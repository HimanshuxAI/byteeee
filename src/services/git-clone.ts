import git from 'isomorphic-git';
import http from 'isomorphic-git/http/web';
import LightningFS from '@isomorphic-git/lightning-fs';
import { shouldIgnorePath } from '../config/ignore-service';
import { FileEntry } from './zip';

// Initialize virtual filesystem (persists in IndexedDB)
// Use a unique name each time to avoid stale data issues
let fs: LightningFS;
let pfs: any;

const initFS = () => {
  // Create a fresh filesystem instance
  const fsName = `polytracerai-git-${Date.now()}`;
  fs = new LightningFS(fsName);
  pfs = fs.promises;
  return fsName;
};

/**
 * Parse GitHub URL to extract owner and repo
 * Supports: 
 *   - https://github.com/owner/repo
 *   - https://github.com/owner/repo.git
 *   - github.com/owner/repo
 */
export const parseGitHubUrl = (url: string): { owner: string; repo: string } | null => {
  const cleaned = url.trim().replace(/\.git$/, '');
  const match = cleaned.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  
  if (!match) return null;
  
  return {
    owner: match[1],
    repo: match[2],
  };
};

/**
 * Clone a GitHub repository using isomorphic-git
 * Returns files in the same format as extractZip for compatibility
 * 
 * @param url - GitHub repository URL
 * @param onProgress - Progress callback
 * @param token - Optional GitHub PAT for private repos (stays client-side only)
 */
export const cloneRepository = async (
  url: string,
  onProgress?: (phase: string, progress: number) => void,
  token?: string
): Promise<FileEntry[]> => {
  const parsed = parseGitHubUrl(url);
  if (!parsed) {
    throw new Error('Invalid GitHub URL. Use format: https://github.com/owner/repo');
  }

  // Initialize fresh filesystem to avoid stale IndexedDB data
  const fsName = initFS();
  
  const dir = `/${parsed.repo}`;
  const repoUrl = `https://github.com/${parsed.owner}/${parsed.repo}.git`;

  try {
    onProgress?.('cloning', 0);

    // Clone with maximum speed optimizations
    await git.clone({
      fs,
      http,
      dir,
      url: repoUrl,
      corsProxy: 'https://cors.isomorphic-git.org',
      depth: 1,
      singleBranch: true,
      noTags: true,
      // Auth callback for private repos (PAT stays client-side)
      onAuth: token ? () => ({ username: token, password: 'x-oauth-basic' }) : undefined,
      onProgress: (event) => {
        if (event.total) {
          const percent = Math.round((event.loaded / event.total) * 100);
          onProgress?.('cloning', percent);
        }
      },
    });

    onProgress?.('reading', 0);

    // Read all files from the cloned repo
    const files = await readAllFiles(dir, dir);

    // Cleanup: remove the cloned repo from virtual FS to save space
    await removeDirectory(dir);
    
    // Also try to clean up the IndexedDB database
    try {
      indexedDB.deleteDatabase(fsName);
    } catch {}

    onProgress?.('complete', 100);

    return files;
  } catch (error) {
    // Cleanup on error
    try {
      await removeDirectory(dir);
      indexedDB.deleteDatabase(fsName);
    } catch {}
    
    throw error;
  }
};

/**
 * Recursively read all files from a directory in the virtual filesystem
 * Uses parallel reads for speed
 */
const readAllFiles = async (baseDir: string, currentDir: string): Promise<FileEntry[]> => {
  // First pass: collect all file paths
  const filePaths: string[] = [];
  await collectFilePaths(baseDir, currentDir, filePaths);

  // Second pass: read files in parallel batches for speed
  const BATCH_SIZE = 50;
  const files: FileEntry[] = [];
  
  for (let i = 0; i < filePaths.length; i += BATCH_SIZE) {
    const batch = filePaths.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (relativePath) => {
        try {
          const content = await pfs.readFile(`${baseDir}/${relativePath}`, { encoding: 'utf8' }) as string;
          return { path: relativePath, content } as FileEntry;
        } catch {
          // Skip binary files or files that can't be read as text
          return null;
        }
      })
    );
    files.push(...results.filter((f): f is FileEntry => f !== null));
  }

  return files;
};

/**
 * Recursively collect all file paths (without reading content)
 */
const collectFilePaths = async (baseDir: string, currentDir: string, paths: string[]): Promise<void> => {
  let entries: string[];
  try {
    entries = await pfs.readdir(currentDir);
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry === '.git') continue;

    const fullPath = `${currentDir}/${entry}`;
    const relativePath = fullPath.replace(`${baseDir}/`, '');

    if (shouldIgnorePath(relativePath)) continue;

    let stat;
    try {
      stat = await pfs.stat(fullPath);
    } catch {
      continue;
    }

    if (stat.isDirectory()) {
      await collectFilePaths(baseDir, fullPath, paths);
    } else {
      paths.push(relativePath);
    }
  }
};

/**
 * Recursively remove a directory from the virtual filesystem
 */
const removeDirectory = async (dir: string): Promise<void> => {
  try {
    const entries = await pfs.readdir(dir);
    
    for (const entry of entries) {
      const fullPath = `${dir}/${entry}`;
      const stat = await pfs.stat(fullPath);
      
      if (stat.isDirectory()) {
        await removeDirectory(fullPath);
      } else {
        await pfs.unlink(fullPath);
      }
    }
    
    await pfs.rmdir(dir);
  } catch {
    // Ignore errors during cleanup
  }
};

