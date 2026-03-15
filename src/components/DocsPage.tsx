import React, { useState } from 'react';
import { useAppState } from '../hooks/useAppState';

export const DocsPage = () => {
  const { setViewMode } = useAppState();
  const [activeTab, setActiveTab] = useState<'overview' | 'cli' | 'mcp' | 'tools'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview & Web UI' },
    { id: 'cli', label: 'CLI Usage' },
    { id: 'mcp', label: 'MCP & Editor Setup' },
    { id: 'tools', label: 'AI Agent Tools' }
  ];

  return (
    <div className="bg-[var(--theme-void)] text-[var(--theme-text-primary)] min-h-screen flex flex-col font-manrope selection:bg-[var(--theme-accent)] selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[var(--theme-surface)]/80 backdrop-blur-md border-b border-[var(--theme-border-subtle)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); setViewMode('landing'); }} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--theme-elevated)] text-[var(--theme-text-primary)] flex items-center justify-center group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-colors duration-300 border border-[var(--theme-border-subtle)] shadow-inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>PolytraceAi</span>
              <span className="text-[10px] text-[var(--theme-text-secondary)] font-medium leading-none mt-1">Dependency Graph Intelligence</span>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <a href="https://github.com/HimanshuxAI/byteeee" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">
              <span>⭐ GitHub</span>
            </a>
            <button onClick={() => setViewMode('landing')} className="bg-[var(--theme-surface)] border border-[var(--theme-border-default)] text-[var(--theme-text-primary)] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--theme-hover)] transition-colors shadow-sm">
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Docs Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-32 pb-24 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <h3 className="font-bold text-[var(--theme-text-secondary)] uppercase tracking-wider text-xs mb-4 pl-3">Documentation</h3>
            <nav className="flex flex-col gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]' 
                      : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface)] hover:text-[var(--theme-text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 prose prose-invert max-w-none text-[var(--theme-text-secondary)]">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-6 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>PolytraceAi Overview</h1>
              <p className="text-lg mb-8 leading-relaxed">
                PolytraceAi builds nervous systems for agent context. It indexes any codebase into a knowledge graph — mapping every dependency, call chain, cluster, and execution flow — then exposes it through smart tools so AI agents never miss critical code context.
              </p>

              <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)] mb-10">
                <h3 className="text-xl font-bold text-[var(--theme-text-primary)] mb-4 flex items-center gap-2">
                  <span className="text-[var(--theme-accent)]">⚡</span> The Problem PolytraceAi Solves
                </h3>
                <p>
                  Tools like Cursor, Claude Code, and Windsurf are powerful, but they don't truly know your codebase structure. 
                  When an AI edits <code>UserService.validate()</code> without knowing 47 functions depend on its return type, breaking changes ship.
                </p>
                <p className="mb-0">
                  <strong>Traditional Graph RAG</strong> forces the LLM to query repeatedly ("Find callers" -&gt; "What files?" -&gt; "Filter tests?").<br />
                  <strong>PolytraceAi</strong> precomputes relational intelligence at index time (clustering, tracing, scoring). Tools return complete context in a single call, saving tokens and vastly improving reliability.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-4 mt-12 pb-2 border-b border-[var(--theme-border-subtle)]">Two Ways to Use PolytraceAi</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--theme-border-subtle)]">
                      <th className="pb-3 text-[var(--theme-text-primary)] font-semibold">Feature</th>
                      <th className="pb-3 text-[var(--theme-text-primary)] font-semibold">Web UI (Browser)</th>
                      <th className="pb-3 text-[var(--theme-text-primary)] font-semibold">CLI + MCP (Local)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--theme-border-subtle)]">
                    <tr><td className="py-3 font-medium">Core Use Case</td><td className="py-3">Visual explorer + in-browser AI chat</td><td className="py-3">Deep agent integration with Cursor/Claude</td></tr>
                    <tr><td className="py-3 font-medium">Installation</td><td className="py-3">None (runs locally in browser)</td><td className="py-3"><code>npm install -g polytraceai</code></td></tr>
                    <tr><td className="py-3 font-medium">Database</td><td className="py-3">KuzuDB WASM (in-memory, drops on close)</td><td className="py-3">KuzuDB Native (fast, persistent storage)</td></tr>
                    <tr><td className="py-3 font-medium">Privacy</td><td className="py-3">100% Client-Side. No servers.</td><td className="py-3">100% Local Machine. No network.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-4 mt-12 pb-2 border-b border-[var(--theme-border-subtle)]">Supported Languages</h2>
              <p>Tree-sitter and PolytraceAi support deep parsing for</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['TypeScript', 'JavaScript', 'Python', 'Java', 'Kotlin', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'C', 'C++'].map(lang => (
                  <span key={lang} className="bg-[var(--theme-surface)] border border-[var(--theme-border-subtle)] text-[var(--theme-text-primary)] px-3 py-1.5 rounded-md text-xs font-semibold">{lang}</span>
                ))}
              </div>
              <p className="text-sm border-l-2 border-[var(--theme-accent)] pl-4 italic">
                Features extracted automatically include: cross-file imports, named bindings, exports, class heritage, constructor inference, framework patterns, and entry point heuristics.
              </p>
            </div>
          )}

          {/* CLI USAGE TAB */}
          {activeTab === 'cli' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-6 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>CLI Integration & Commands</h1>
              <p className="text-lg mb-8 leading-relaxed">
                The PolytraceAi CLI indexes your repository locally and runs an MCP server that gives AI agents deep codebase awareness instantly.
              </p>

              <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-4 mt-8 pb-2 border-b border-[var(--theme-border-subtle)]">Quick Start</h2>
              <pre className="bg-[#0D1117] text-[#E6EDF3] p-4 rounded-lg overflow-x-auto border border-[var(--theme-border-subtle)] text-sm mb-6">
                <code>
<span className="text-[#8B949E]"># Install globally</span><br/>
npm install -g polytraceai<br/><br/>
<span className="text-[#8B949E]"># Index your repo (run from repo root)</span><br/>
npx polytraceai analyze
                </code>
              </pre>
              <p>This single command indexes the codebase, installs agent skills, registers editor hooks, and creates <code>AGENTS.md</code> or <code>CLAUDE.md</code> context files.</p>

              <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-4 mt-12 pb-2 border-b border-[var(--theme-border-subtle)]">Full CLI Command Reference</h2>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai setup</code> <span className="flex-1">Configure MCP for your editors automatically (one-time setup).</span></li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai analyze</code> <span className="flex-1">Index a repository (or update stale index).</span></li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai --skills</code> <span className="flex-1">Generate repo-specific skill files from detected communities using the Leiden algorithm.</span></li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai mcp</code> <span className="flex-1">Start the MCP server (stdio) — serves all indexed repos globally.</span></li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai serve</code> <span className="flex-1">Start local HTTP server enabling the Web UI to connect to your local repos securely.</span></li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4"><code className="shrink-0 font-bold text-[var(--theme-text-primary)] bg-[var(--theme-surface)] px-2 py-1 rounded inline-block">polytraceai wiki</code> <span className="flex-1">Generate an LLM-powered project wiki directly from the knowledge graph.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[var(--theme-text-primary)] mt-12 mb-4">Wiki Generation Example</h3>
              <p>Generate documentation from your knowledge graph using any LLM:</p>
              <pre className="bg-[#0D1117] text-[#E6EDF3] p-4 rounded-lg overflow-x-auto border border-[var(--theme-border-subtle)] text-sm">
                <code>
polytraceai wiki --model gpt-4o<br/>
polytraceai wiki --base-url https://api.anthropic.com/v1<br/>
                </code>
              </pre>

            </div>
          )}

          {/* MCP TAB */}
          {activeTab === 'mcp' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-6 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>Model Context Protocol (MCP)</h1>
              <p className="text-lg mb-8 leading-relaxed">
                PolytraceAi uses a <strong>Multi-Repo Global Registry</strong> architecture so one MCP server can serve multiple indexed repos simultaneously. No per-project config required!
              </p>

              <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)] mb-10 overflow-hidden">
                <h3 className="font-bold text-[var(--theme-text-primary)] mb-4">Auto Setup</h3>
                <p className="mb-4">Running the setup command auto-detects installed editors and writes the global configuration immediately:</p>
                <code className="block bg-[#0D1117] px-4 py-3 rounded text-sm text-[var(--theme-accent)]">npx polytraceai setup</code>
              </div>

              <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-6 pb-2 border-b border-[var(--theme-border-subtle)]">Manual Editor Configuration</h2>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg text-[var(--theme-text-primary)] mb-2">Claude Code (Full Support)</h3>
                <p className="mb-2 text-sm">Claude receives MCP tools, agent skills, and Pre/Post-ToolUse hooks.</p>
                <pre className="bg-[#0D1117] text-[#E6EDF3] p-4 rounded border border-[var(--theme-border-subtle)] text-sm"><code>claude mcp add polytraceai -- npx -y polytraceai@latest mcp</code></pre>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg text-[var(--theme-text-primary)] mb-2">Cursor</h3>
                <p className="mb-2 text-sm">Add to global cursor config (<code>~/.cursor/mcp.json</code>):</p>
                <pre className="bg-[#0D1117] text-[#E6EDF3] p-4 rounded border border-[var(--theme-border-subtle)] text-sm"><code>{`{
  "mcpServers": {
    "polytraceai": {
      "command": "npx",
      "args": ["-y", "polytraceai@latest", "mcp"]
    }
  }
}`}</code></pre>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg text-[var(--theme-text-primary)] mb-2">Windsurf & OpenCode</h3>
                <p className="mb-2 text-sm">Windsurf supports the MCP integration natively. For OpenCode, update <code>~/.config/opencode/config.json</code> using the same args structure as Cursor.</p>
              </div>
            </div>
          )}

          {/* TOOLS TAB */}
          {activeTab === 'tools' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-6 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>7 AI Agent Tools</h1>
              <p className="text-lg mb-8 leading-relaxed">
                When an AI agent connects to PolytraceAi via MCP, it gains access to advanced graph-aware capabilities perfectly tuned for code exploration.
              </p>

              <div className="grid gap-6">
                
                {/* Tool 1 */}
                <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)]">
                  <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-2 font-mono flex items-center justify-between">
                    <span>impact</span>
                    <span className="text-xs bg-[var(--theme-elevated)] px-2 py-1 rounded text-[var(--theme-text-muted)] border border-[var(--theme-border-default)]">Impact Analysis</span>
                  </h3>
                  <p className="text-sm mb-4">Blast radius analysis with depth grouping and confidence scoring. What breaks if I change this function?</p>
                  <pre className="bg-[#0D1117] text-[#E6EDF3] p-3 rounded text-xs overflow-x-auto border border-[#30363d]"><code>{`impact({target: "UserService", direction: "upstream", minConfidence: 0.8})

TARGET: Class UserService (src/services/user.ts)
UPSTREAM (what depends on this):
  Depth 1 (WILL BREAK):
    handleLogin [CALLS 90%] -> src/api/auth.ts:45
  Depth 2 (LIKELY AFFECTED):
    authRouter [IMPORTS] -> src/routes/auth.ts`}</code></pre>
                </div>

                {/* Tool 2 */}
                <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)]">
                  <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-2 font-mono flex items-center justify-between">
                    <span>query</span>
                    <span className="text-xs bg-[var(--theme-elevated)] px-2 py-1 rounded text-[var(--theme-text-muted)] border border-[var(--theme-border-default)]">Process-Grouped Search</span>
                  </h3>
                  <p className="text-sm mb-4">Hybrid search (BM25 + semantic + RRF) grouped by execution processes.</p>
                  <pre className="bg-[#0D1117] text-[#E6EDF3] p-3 rounded text-xs overflow-x-auto border border-[#30363d]"><code>{`query({query: "authentication middleware"})

processes:
  - summary: "LoginFlow"
    priority: 0.042
    step_count: 7
process_symbols:
  - name: validateUser, process_id: proc_login, step: 2`}</code></pre>
                </div>

                {/* Tool 3 */}
                <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)]">
                  <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-2 font-mono flex items-center justify-between">
                    <span>context</span>
                    <span className="text-xs bg-[var(--theme-elevated)] px-2 py-1 rounded text-[var(--theme-text-muted)] border border-[var(--theme-border-default)]">360-Degree Symbol View</span>
                  </h3>
                  <p className="text-sm mb-4">Retrieve categorized incoming and outgoing references alongside process participation.</p>
                  <pre className="bg-[#0D1117] text-[#E6EDF3] p-3 rounded text-xs overflow-x-auto border border-[#30363d]"><code>{`context({name: "validateUser"})

incoming:
  calls: [handleLogin, handleRegister, UserController]
outgoing:
  calls: [checkPassword, createSession]
processes:
  - name: LoginFlow (step 2/7)`}</code></pre>
                </div>

                {/* Additional Info */}
                <div className="bg-[var(--theme-surface)] p-6 rounded-xl border border-[var(--theme-border-subtle)]">
                  <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">Other MCP Tools</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><code className="text-[var(--theme-accent)]">detect_changes</code> Maps pre-commit git-diffs to affected processes and risk levels.</li>
                    <li><code className="text-[var(--theme-accent)]">rename</code> Multi-file coordinated rename utilizing high-confidence graph edges mapped via ASTs.</li>
                    <li><code className="text-[var(--theme-accent)]">cypher</code> Direct raw Cypher graph queries to the embedded KuzuDB for manual traversal.</li>
                    <li><code className="text-[var(--theme-accent)]">list_repos</code> Discover all repositories cached in the global PolytraceAi registry.</li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--theme-border-default)] bg-[var(--theme-surface)] py-8 px-6 text-center text-sm font-medium text-[var(--theme-text-muted)] mt-auto">
        &copy; 2026 PolytraceAi.
      </footer>
    </div>
  );
};
