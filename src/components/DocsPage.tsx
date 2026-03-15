import React from 'react';
import { useAppState } from '../hooks/useAppState';

export const DocsPage = () => {
  const { setViewMode } = useAppState();

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
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-32 pb-24">
        <h1 className="text-4xl font-extrabold mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>Documentation</h1>
        <p className="text-lg text-[var(--theme-text-secondary)] mb-12">
          PolytraceAI turns any GitHub repository or local ZIP file into an interactive knowledge graph with a built-in AI RAG Agent — all running 100% client-side in your browser. No servers, no sign-ups, no data ever leaves your machine.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-[var(--theme-border-subtle)] pb-2 flex items-center gap-2">
            <span className="text-[var(--theme-accent)]">⚡</span> Quick Start
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--theme-text-secondary)]">
            <p className="mb-4">To get started exploring a codebase immediately:</p>
            <ol className="list-decimal list-inside space-y-3 mb-4 bg-[var(--theme-surface)]/50 p-6 rounded-xl border border-[var(--theme-border-subtle)]">
              <li>Click <strong>Open App</strong> in the top navigation.</li>
              <li>Upload a <code>.zip</code> file of your project or paste a GitHub URL to clone it directly in-browser.</li>
              <li>The ingestion pipeline will automatically parse the AST for all files, build the structural hierarchy, and trace execution flows.</li>
              <li>Open the right panel to begin chatting with the RAG agent about the generated graph.</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-[var(--theme-border-subtle)] pb-2 flex items-center gap-2">
            <span className="text-[var(--theme-accent)]">🏗️</span> Architecture & Data Pipeline
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--theme-text-secondary)]">
            <p className="mb-4">The ingestion pipeline transforms raw source code into a queryable graph in 9 phases entirely on your local machine using WebAssembly and WebGPU.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
               <div className="bg-[var(--theme-surface)] p-5 rounded-xl border border-[var(--theme-border-subtle)]">
                 <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">1. AST Parsing</h3>
                 <p className="text-sm">Tree-sitter WASM extracts functions, classes, methods, and interfaces to form <code>DEFINES</code> edges.</p>
               </div>
               <div className="bg-[var(--theme-surface)] p-5 rounded-xl border border-[var(--theme-border-subtle)]">
                 <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">2. Call Resolution</h3>
                 <p className="text-sm">Cross-file call tracing generates <code>CALLS</code>, <code>EXTENDS</code>, and <code>IMPLEMENTS</code> relationship edges.</p>
               </div>
               <div className="bg-[var(--theme-surface)] p-5 rounded-xl border border-[var(--theme-border-subtle)]">
                 <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">3. Community Detection</h3>
                 <p className="text-sm">The Leiden algorithm clusters tightly-coupled code blocks into distinct functional Communities.</p>
               </div>
               <div className="bg-[var(--theme-surface)] p-5 rounded-xl border border-[var(--theme-border-subtle)]">
                 <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">4. Graph DB & RAG</h3>
                 <p className="text-sm">The resulting graph is loaded into KuzuDB WASM. Embeddings are generated via <code>transformers.js</code>.</p>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-[var(--theme-border-subtle)] pb-2 flex items-center gap-2">
            <span className="text-[var(--theme-accent)]">🛠️</span> Agent Capabilities
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--theme-text-secondary)]">
            <p className="mb-4">The built-in RAG agent leverages LangChain + LangGraph with 7 specialized tools optimizing for code exploration:</p>
            <ul className="space-y-3">
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">search</code> <span className="flex-1">Hybrid search (BM25 + Semantic + RRF) grouped by process.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">cypher</code> <span className="flex-1">Execute Cypher structural queries against KuzuDB.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">grep</code> <span className="flex-1">Regex pattern matching across all files.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">read</code> <span className="flex-1">Read full file content with smart path matching.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">overview</code> <span className="flex-1">Analyze cross-cluster dependencies and process maps.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">explore</code> <span className="flex-1">Deep dive on a specific symbol or community.</span></li>
              <li className="flex gap-3"><code className="bg-[var(--theme-surface)] px-2 py-1 rounded border border-[var(--theme-border-subtle)]">impact</code> <span className="flex-1">Blast radius analysis to assess risks before refactoring.</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-[var(--theme-border-subtle)] pb-2 flex items-center gap-2">
            <span className="text-[var(--theme-accent)]">🌐</span> Supported Languages
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--theme-text-secondary)]">
            <p className="mb-4">Tree-sitter WASM provides universal AST parsing support out of the box for 12 languages:</p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift'].map(lang => (
                 <span key={lang} className="bg-[var(--theme-surface)] border border-[var(--theme-border-subtle)] px-4 py-2 rounded-full text-sm font-semibold">{lang}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--theme-border-default)] bg-[var(--theme-surface)] py-8 px-6 text-center text-sm font-medium text-[var(--theme-text-muted)] mt-auto">
        &copy; 2026 PolytraceAi.
      </footer>
    </div>
  );
};
