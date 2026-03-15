import React, { useState } from 'react';
import { useAppState, AppTheme } from '../hooks/useAppState';

export const LandingPage = () => {
  const { setViewMode, theme, setTheme } = useAppState();
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const handleLaunchApp = (e: React.MouseEvent) => {
    e.preventDefault();
    setViewMode('onboarding');
  };

  return (
    <div className="bg-[var(--theme-void)] text-[var(--theme-text-primary)] transition-colors duration-300 font-manrope antialiased selection:bg-[var(--theme-accent)] selection:text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-slate-50/80 blur-3xl -z-10 pointer-events-none"></div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[var(--theme-surface)]/80 backdrop-blur-md border-b border-[var(--theme-border-subtle)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
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

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">How it Works</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); setViewMode('docs'); }} className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">Docs</a>
          </nav>

          <div className="flex items-center gap-4 relative">
            <a href="https://github.com/HimanshuxAI/byteeee" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">
              <span>⭐ GitHub <span className="font-mono text-xs opacity-80 pl-1">1.2k</span></span>
            </a>

            <button onClick={handleLaunchApp} className="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-400 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95">
              Open App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border-default)] text-xs font-semibold text-[var(--theme-text-secondary)] mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--theme-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--theme-accent)]"></span>
              </span>
              Client-side Graph RAG is here
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
              One Graph.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-dim)]">
                Every Repository.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[var(--theme-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              PolytraceAI builds a client-side dependency graph across your entire system, enabling AI agents to reason instantly across services, APIs, and databases—so you can ask questions like <span className="italic text-[var(--theme-text-primary)]">"What breaks if I change this API?"</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button 
                onClick={handleLaunchApp} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--theme-accent)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--theme-accent-dim)] shadow-lg shadow-[var(--theme-accent)]/20 active:scale-95 transition-all"
              >
                Start Exploring Your Codebase
                <span>→</span>
              </button>
              <a 
                href="https://github.com/HimanshuxAI/byteeee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--theme-surface)] border-2 border-[var(--theme-border-default)] text-[var(--theme-text-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:border-[var(--theme-text-primary)] hover:bg-[var(--theme-hover)] transition-all active:scale-95"
              >
                View on GitHub
              </a>
            </div>

            {/* Stats/Social Proof (Metrics Grid) */}
            <div className="mt-14 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--theme-border-default)] text-center border-y border-[var(--theme-border-default)] py-6 bg-[var(--theme-surface)]/30 backdrop-blur-sm rounded-2xl shadow-inner">
              <div className="flex flex-col items-center justify-center px-4">
                <span className="text-3xl font-extrabold text-[var(--theme-text-primary)] tracking-tight mb-1" style={{ fontFamily: 'Archivo, sans-serif' }}>50k+ Files</span>
                <span className="text-xs text-[var(--theme-text-secondary)] font-semibold uppercase tracking-wider">Indexed Instantly</span>
              </div>
              <div className="flex flex-col items-center justify-center px-4 pt-4 sm:pt-0">
                <span className="text-3xl font-extrabold text-[var(--theme-text-primary)] tracking-tight mb-1" style={{ fontFamily: 'Archivo, sans-serif' }}>12 Languages</span>
                <span className="text-xs text-[var(--theme-text-secondary)] font-semibold uppercase tracking-wider">Single Dependency Graph</span>
              </div>
              <div className="flex flex-col items-center justify-center px-4 pt-4 sm:pt-0">
                <span className="text-3xl font-extrabold text-[var(--theme-text-primary)] tracking-tight mb-1" style={{ fontFamily: 'Archivo, sans-serif' }}>&lt;50ms</span>
                <span className="text-xs text-[var(--theme-text-secondary)] font-semibold uppercase tracking-wider">Graph Traversal Time</span>
              </div>
            </div>
          </div>

          {/* Hero Visual / App Mockup */}
          <div className="max-w-6xl mx-auto mt-16 px-4">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-[var(--theme-border-default)] bg-[var(--theme-surface)] p-2" style={{ boxShadow: '0 12px 32px -4px rgba(31, 35, 40, 0.08)' }}>
              {/* Mac OS style window controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--theme-elevated)] border-b border-[var(--theme-border-default)] rounded-t-xl md:rounded-t-[1.75rem]">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-xs font-mono text-[var(--theme-text-secondary)] flex-1 text-center">app.polytraceai.dev</div>
              </div>
              {/* App Video Demo */}
              <div className="w-full overflow-hidden rounded-b-lg md:rounded-b-[1.5rem] bg-black flex justify-center items-center m-0 p-0 leading-none shadow-inner border-t border-[var(--theme-border-default)]">
                <video
                  src="/demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto object-contain block m-0 p-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="py-24 bg-[var(--theme-deep)] border-y border-[var(--theme-border-subtle)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Archivo, sans-serif' }}>Intelligent code analysis, without the infrastructure.</h2>
              <p className="text-[var(--theme-text-secondary)] text-lg">PolytraceAi brings powerful static analysis and AI-driven exploration directly to your machine.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[var(--theme-surface)] p-8 rounded-2xl border border-[var(--theme-border-default)] group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300" style={{ boxShadow: '0 4px 20px -2px rgba(9, 105, 218, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0969da] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-all duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>Zero Server Architecture</h3>
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">No backend required. Drop in your repository and start analyzing immediately. Perfect for quick explorations and local-first workflows.</p>
              </div>

              <div className="bg-[var(--theme-surface)] p-8 rounded-2xl border border-[var(--theme-border-default)] group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300" style={{ boxShadow: '0 4px 20px -2px rgba(9, 105, 218, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl bg-[var(--theme-elevated)] text-[var(--theme-accent)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-all duration-300">
                  <span className="text-2xl">🕸️</span>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>Knowledge Graph Creation</h3>
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">Automatically map out dependencies, function calls, classes, and code structure into an interactive, explorable visual node graph.</p>
              </div>

              <div className="bg-[var(--theme-surface)] p-8 rounded-2xl border border-[var(--theme-border-default)] group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300" style={{ boxShadow: '0 4px 20px -2px rgba(9, 105, 218, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl bg-[var(--theme-elevated)] text-[var(--theme-accent)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-all duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>Graph RAG Agent</h3>
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">Chat with your codebase using advanced Retrieval-Augmented Generation. Ask complex questions and get context-aware answers instantly.</p>
              </div>

              <div className="bg-[var(--theme-surface)] p-8 rounded-2xl border border-[var(--theme-border-default)] group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300" style={{ boxShadow: '0 4px 20px -2px rgba(9, 105, 218, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl bg-[var(--theme-elevated)] text-[var(--theme-accent)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-all duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>Client-Side Processing</h3>
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">Unmatched privacy. Your code never leaves your device. All parsing, embedding, and graph generation happens directly in your browser.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works (Minimal steps) */}
        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>Understand any codebase in seconds.</h2>
                <div className="space-y-8 mt-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--theme-deep)] border border-[var(--theme-border-default)] flex items-center justify-center font-bold text-sm text-[#0969da]" style={{ fontFamily: 'Archivo, sans-serif' }}>1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Import Repository</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm">Provide a GitHub URL or drop a local ZIP file directly into the browser.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--theme-deep)] border border-[var(--theme-border-default)] flex items-center justify-center font-bold text-sm text-[#0969da]" style={{ fontFamily: 'Archivo, sans-serif' }}>2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Local Processing</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm">PolytraceAi uses WebAssembly to parse ASTs and build the knowledge graph locally.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--theme-deep)] border border-[var(--theme-border-default)] flex items-center justify-center font-bold text-sm text-[#0969da]" style={{ fontFamily: 'Archivo, sans-serif' }}>3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Explore & Chat</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm">Visualize the architecture or ask the built-in AI agent questions about the code flow.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full bg-[var(--theme-deep)] rounded-3xl p-8 border border-[var(--theme-border-default)] flex items-center justify-center relative overflow-hidden">
                {/* Abstract representation of processing */}
                <div className="absolute inset-0 bg-[radial-gradient(#d1d9e0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative z-10 w-full max-w-sm bg-[var(--theme-surface)] rounded-xl border border-[var(--theme-border-default)] p-6 space-y-4" style={{ boxShadow: '0 12px 32px -4px rgba(31, 35, 40, 0.08)' }}>
                  <div className="flex items-center gap-3 border-b border-[var(--theme-border-subtle)] pb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--theme-elevated)] text-[var(--theme-text-primary)] flex items-center justify-center">
                      <span className="text-xl">{'</>'}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold">src/core/engine.ts</div>
                      <div className="text-xs text-[var(--theme-text-secondary)]">Parsing AST... 87%</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-[var(--theme-elevated)] rounded-full w-full overflow-hidden">
                      <div className="h-full bg-[var(--theme-accent)] w-[87%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-[var(--theme-text-secondary)] font-mono">
                      <span>Building Graph Nodes</span>
                      <span>342 found</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Two Ways to Use PolytracerAI */}
        <section id="versions" className="py-24 px-6 border-b border-[var(--theme-border-default)] bg-[var(--theme-void)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>Two Ways to Use PolytracerAI</h2>
              <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto">Choose the environment that fits your workflow. From local AI agent integrations to browser-based exploration.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* CLI + MCP */}
              <div className="bg-[var(--theme-surface)] rounded-2xl p-8 border border-[var(--theme-border-default)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[var(--theme-accent)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Recommended</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] flex items-center justify-center mb-6 text-[var(--theme-text-primary)] group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-colors duration-300">
                  <span className="text-xl">{'❯_'}</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2" style={{ fontFamily: 'Archivo, sans-serif' }}>CLI + MCP</h3>
                <p className="text-[var(--theme-text-secondary)] mb-6 flex-1 text-sm leading-relaxed">Index repos locally and connect AI agents like Cursor or Claude via the Model Context Protocol (MCP).</p>
                <ul className="space-y-3 mb-8 text-sm text-[var(--theme-text-secondary)] flex-1">
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Full repository scale support</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> KuzuDB native fast persistent storage</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Tree-sitter native C bindings</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Deep hooks with Claude Code, Cursor, Windsurf</li>
                </ul>
                <div className="bg-[var(--theme-elevated)] p-4 rounded-xl border border-[var(--theme-border-default)]">
                  <code className="text-sm font-mono text-[var(--theme-text-primary)]">npx PolytraceAI analyze</code>
                  <div className="mt-2 text-xs text-[var(--theme-text-secondary)]">Run anywhere from your terminal.</div>
                </div>
              </div>

              {/* Web UI */}
              <div className="bg-[var(--theme-surface)] rounded-2xl p-8 border border-[var(--theme-border-default)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] flex items-center justify-center mb-6 text-[var(--theme-text-primary)] group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-colors duration-300">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2" style={{ fontFamily: 'Archivo, sans-serif' }}>Web UI</h3>
                <p className="text-[var(--theme-text-secondary)] mb-6 flex-1 text-sm leading-relaxed">Visual graph explorer and AI chat right in your browser. Perfect for quick exploration without installation.</p>
                <ul className="space-y-3 mb-8 text-sm text-[var(--theme-text-secondary)] flex-1">
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Zero installation required</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Fully client-side execution</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> KuzuDB WASM in-memory engine</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--theme-accent)]">✓</span> Drag & drop local ZIP files to explore</li>
                </ul>
                <div className="bg-[var(--theme-elevated)] p-4 rounded-xl border border-[var(--theme-border-default)]">
                  <code className="text-sm font-mono text-[var(--theme-text-primary)]">app.polytraceai.dev</code>
                  <div className="mt-2 text-xs text-[var(--theme-text-secondary)]">Navigate to the domain to explore.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Tooling */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--theme-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-text-primary)] mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>Supercharge your AI Agents</h2>
                <p className="text-[var(--theme-text-secondary)] text-lg mb-8 leading-relaxed">
                  Claude Code, Cursor, and Windsurf are powerful, but they naturally lack deep structural context of large codebases. PolytracerAI solves this by equipping them with 7 precomputed structural tools via MCP.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm mt-8">
                  <div className="bg-[var(--theme-surface)] p-5 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] transition-colors">
                    <h4 className="font-bold text-[var(--theme-text-primary)] mb-2 flex items-center gap-3"><span className="text-xl">🔍</span> Impact Analysis</h4>
                    <span className="text-[var(--theme-text-secondary)] leading-relaxed block">Calculates blast radius and likelihood of breakage across dependents.</span>
                  </div>
                  <div className="bg-[var(--theme-surface)] p-5 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] transition-colors">
                    <h4 className="font-bold text-[var(--theme-text-primary)] mb-2 flex items-center gap-3"><span className="text-xl">🗺️</span> 360° Context</h4>
                    <span className="text-[var(--theme-text-secondary)] leading-relaxed block">Retrieves all incoming and outgoing connections for any symbol.</span>
                  </div>
                  <div className="bg-[var(--theme-surface)] p-5 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] transition-colors">
                    <h4 className="font-bold text-[var(--theme-text-primary)] mb-2 flex items-center gap-3"><span className="text-xl">🗂️</span> Process Search</h4>
                    <span className="text-[var(--theme-text-secondary)] leading-relaxed block">Groups search results by logical execution flows, mapping exactly how code runs.</span>
                  </div>
                  <div className="bg-[var(--theme-surface)] p-5 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] transition-colors">
                    <h4 className="font-bold text-[var(--theme-text-primary)] mb-2 flex items-center gap-3"><span className="text-xl">✏️</span> Coordinated Rename</h4>
                    <span className="text-[var(--theme-text-secondary)] leading-relaxed block">Performs multi-file renames leveraging AST relationships, not regex.</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="bg-[#0D1117] rounded-2xl border border-[var(--theme-border-default)] overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-[var(--theme-border-default)]">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 text-xs font-mono text-[#8b949e]">claude-code</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-[#c9d1d9] overflow-x-auto leading-relaxed">
                    <div className="flex gap-3 items-center">
                      <span className="text-purple-400 font-bold">❯</span>
                      <span className="font-bold text-white text-base">What breaks if I change UserService?</span>
                    </div>

                    <div className="mt-4 space-y-1">
                      <div className="text-[#58a6ff]">Calling tool `impact` with args:</div>
                      <div className="text-[#8b949e]">{`{ "target": "UserService", "direction": "upstream" }`}</div>
                    </div>

                    <div className="mt-4">
                      TARGET: <span className="text-[#f2cc60]">Class</span> <span className="font-bold text-white">UserService</span> <span className="text-[#8b949e]">(src/services/user.ts)</span>
                    </div>

                    <div className="mt-4">
                      <div>UPSTREAM (what depends on this):</div>
                      <div className="mt-2 pl-4 border-l-2 border-[#30363d]">
                        <div className="mb-2">
                          Depth 1 <span className="text-red-400 font-bold">(WILL BREAK)</span>:
                        </div>
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center"><span className="w-32">handleLogin</span> <span className="text-[#f85149] w-28">[CALLS 90%]</span> <span className="text-[#8b949e] mr-2">-{'>'}</span> src/api/auth.ts:45</div>
                          <div className="flex items-center"><span className="w-32">handleRegister</span> <span className="text-[#f85149] w-28">[CALLS 90%]</span> <span className="text-[#8b949e] mr-2">-{'>'}</span> src/api/auth.ts:78</div>
                          <div className="flex items-center"><span className="w-32">UserController</span> <span className="text-[#f85149] w-28">[CALLS 85%]</span> <span className="text-[#8b949e] mr-2">-{'>'}</span> src/controllers/user.ts:12</div>
                        </div>
                      </div>
                      <div className="mt-4 pl-4 border-l-2 border-[#30363d] opacity-80">
                        <div className="mb-2">
                          Depth 2 <span className="text-[#d2a8ff]">(LIKELY AFFECTED)</span>:
                        </div>
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center"><span className="w-32">authRouter</span> <span className="text-[#58a6ff] w-28">[IMPORTS]</span> <span className="text-[#8b949e] mr-2">-{'>'}</span> src/routes/auth.ts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Graph RAG vs PolytracerAI */}
        <section className="py-24 px-6 bg-[var(--theme-deep)] border-y border-[var(--theme-border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>Precomputed Relational Intelligence</h2>
              <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto">Traditional agents burn through tokens and context making ten queries to understand one function. PolytracerAI precomputes relationships at index time.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4 text-center">
              {/* Traditional */}
              <div className="flex-1 w-full bg-[var(--theme-void)] p-8 rounded-3xl border border-[var(--theme-border-default)] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <h3 className="text-lg font-bold text-[var(--theme-text-secondary)] mb-8 uppercase tracking-widest border-b border-[var(--theme-border-subtle)] pb-4">Traditional Graph RAG</h3>

                <div className="space-y-4 font-mono text-sm text-[var(--theme-text-secondary)] relative">
                  <div className="absolute top-8 bottom-8 left-1/2 w-0.5 bg-[var(--theme-border-default)] -translate-x-1/2 -z-10"></div>

                  <div className="p-4 bg-[var(--theme-surface)] border border-[var(--theme-border-default)] rounded-xl mx-auto w-4/5 text-xs shadow-sm">
                    Query: <span className="text-[var(--theme-text-primary)] font-semibold">"Find callers"</span>
                  </div>
                  <div className="p-4 bg-[var(--theme-surface)] border border-[var(--theme-border-default)] rounded-xl mx-auto w-4/5 text-xs shadow-sm">
                    Query: <span className="text-[var(--theme-text-primary)] font-semibold">"What files are those?"</span>
                  </div>
                  <div className="p-4 bg-[var(--theme-surface)] border border-[var(--theme-border-default)] rounded-xl mx-auto w-4/5 text-xs shadow-sm">
                    Query: <span className="text-[var(--theme-text-primary)] font-semibold">"Filter out test files"</span>
                  </div>
                  <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl font-bold">
                    Result: Token limit exhausted
                  </div>
                </div>
              </div>

              <div className="text-sm font-bold text-[var(--theme-text-muted)] bg-[var(--theme-surface)] rounded-full px-4 py-2 border border-[var(--theme-border-default)] whitespace-nowrap z-10 md:-mx-8 my-[-20px] md:my-0 shadow-sm uppercase tracking-widest">VS</div>

              {/* PolytracerAI */}
              <div className="flex-1 w-full bg-[var(--theme-void)] p-8 rounded-3xl border-2 border-[var(--theme-accent)] shadow-[0_0_40px_rgba(var(--theme-accent),0.1)] relative overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--theme-accent)] to-[#833ab4]/50 opacity-10 blur-xl group-hover:opacity-30 transition-opacity"></div>
                <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-8 uppercase tracking-widest border-b border-[var(--theme-border-subtle)] pb-4 relative z-10">PolytracerAI Smart Tools</h3>

                <div className="space-y-4 font-mono text-sm text-[var(--theme-text-secondary)] relative z-10">
                  <div className="absolute top-8 bottom-8 left-1/2 w-0.5 bg-[var(--theme-border-[var(--theme-accent)]] border-dashed border-l-2 -translate-x-1/2 -z-10 opacity-30"></div>

                  <div className="p-4 bg-[var(--theme-elevated)] border border-[var(--theme-accent)]/50 rounded-xl mx-auto w-[90%] text-sm shadow-sm text-[var(--theme-text-primary)]">
                    <span className="text-[var(--theme-accent)]">Tool:</span> <code>impact UserService</code>
                  </div>
                  <div className="h-[90px] flex items-center justify-center text-xs opacity-50">KuzuDB fast graph retrieval</div>
                  <div className="p-6 bg-[var(--theme-accent)] text-white rounded-xl font-bold shadow-lg shadow-[var(--theme-accent)]/30 transform scale-105">
                    Pre-structured graph response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Intelligence Architecture */}
        <section className="py-24 px-6 border-b border-[var(--theme-border-default)] relative overflow-hidden">
          {/* Subtle background glow for the whole section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--theme-accent)]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--theme-text-primary)] tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>
                One Graph. Every Repository.
              </h2>
              <p className="text-[var(--theme-text-secondary)] text-lg md:text-xl max-w-3xl mx-auto font-medium">
                PolytraceAI turns scattered repositories into a single dependency graph that AI agents can query instantly.
              </p>
            </div>

            {/* Architecture Diagram (Larger, 70% focus, tightened flow) */}
            <div className="w-full md:w-[85%] mx-auto bg-[var(--theme-surface)]/50 backdrop-blur-sm border border-[var(--theme-border-default)] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
              
              {/* Top Layer: Editor / Agent */}
              <div className="flex justify-center mb-3 relative z-10">
                <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] px-8 py-4 rounded-2xl shadow-sm">
                  <h4 className="text-[var(--theme-text-primary)] font-bold text-lg text-center">Editor / AI Agent</h4>
                  <div className="text-[var(--theme-text-muted)] font-mono text-xs text-center mt-1">Claude Code • Cursor • Roo</div>
                </div>
              </div>

              {/* Protocol Flow */}
              <div className="flex justify-center my-2 relative z-10">
                <div className="inline-flex items-center justify-center bg-[var(--theme-void)] border border-[var(--theme-border-subtle)] px-4 py-1.5 rounded-full font-mono text-xs text-[var(--theme-text-secondary)]">
                  ↓ <span className="mx-2 text-[var(--theme-accent)] font-semibold">MCP Protocol</span> ↓
                </div>
              </div>

              {/* THE CORE ENGINE (Unified Block) */}
              <div className="flex justify-center mb-3 mt-4 relative group z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--theme-accent)] to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-glow"></div>
                <div className="relative bg-[#1A1E24] border-2 border-[var(--theme-accent)] w-full max-w-md rounded-3xl shadow-[0_0_50px_rgba(29,155,240,0.2)] overflow-hidden">
                  
                  {/* Internal top header representing the server bounding */}
                  <div className="bg-[var(--theme-void)] border-b border-[var(--theme-border-subtle)] px-6 py-3 flex items-center justify-between">
                     <span className="font-mono text-xs text-[var(--theme-text-secondary)] tracking-wider">Polytracer Server</span>
                     <div className="flex gap-1.5">
                       <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]/80 animate-pulse"></span>
                     </div>
                  </div>

                  {/* Internal core capabilities */}
                  <div className="px-12 py-10 text-center">
                    <h3 className="text-white font-extrabold text-2xl tracking-wide mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>
                      Polytrace Engine
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-sm text-[var(--theme-text-secondary)] font-medium bg-black/30 rounded-full px-4 py-1.5 border border-white/5 inline-flex mb-4">
                       <span className="text-[var(--theme-accent)]">⚡</span> Cross-Repo Graph
                    </div>
                    <div className="flex justify-center mt-2 gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-75"></span>
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protocol Flow */}
              <div className="flex justify-center my-3 relative z-10">
                <div className="inline-flex items-center justify-center bg-[var(--theme-void)] border border-[var(--theme-border-subtle)] px-4 py-1.5 rounded-full font-mono text-xs text-[var(--theme-text-secondary)]">
                  ↓ <span className="mx-2 text-purple-400 font-semibold">Dependency Context</span> ↓
                </div>
              </div>

              {/* Bottom Layer: Repositories (Polyglot) */}
              <div className="mt-6 relative z-10">
                <div className="text-center mb-4">
                  <span className="text-xs font-bold text-[var(--theme-text-secondary)] uppercase tracking-[0.15em]">Indexed Sources of Truth</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-center shadow-md">
                    <div className="text-xl mb-2">⚛️</div>
                    <div className="text-[var(--theme-text-primary)] font-bold text-sm">Frontend Repo</div>
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">React / TS</div>
                  </div>
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-center shadow-md">
                    <div className="text-xl mb-2">🐍</div>
                    <div className="text-[var(--theme-text-primary)] font-bold text-sm">Backend Repo</div>
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">FastAPI / Python</div>
                  </div>
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-center shadow-md">
                    <div className="text-xl mb-2">🗄️</div>
                    <div className="text-[var(--theme-text-primary)] font-bold text-sm">Database Schema</div>
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">Prisma / SQL</div>
                  </div>
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-center shadow-md">
                    <div className="text-xl mb-2">📄</div>
                    <div className="text-[var(--theme-text-primary)] font-bold text-sm">API Contracts</div>
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">OpenAPI / GraphQL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="mt-8 text-center px-4 w-full">
               <p className="text-[var(--theme-accent)] font-semibold text-lg md:text-xl italic animate-fade-in-up shadow-sm inline-block px-6 py-3 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border-subtle)] backdrop-blur-sm">
                 "From fragmented repositories to a single system-level intelligence layer."
               </p>
            </div>

            {/* WHAT THIS UNLOCKS (Capabilities Strip) */}
            <div className="mt-20">
              <h3 className="text-sm font-bold text-[var(--theme-text-secondary)] uppercase tracking-[0.2em] text-center mb-10 border-b border-[var(--theme-border-subtle)] pb-4 max-w-xs mx-auto">
                What This Unlocks
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-[var(--theme-surface)] p-6 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)] transition-colors">
                  <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-xl mb-5">💥</div>
                  <h4 className="text-lg font-bold text-[var(--theme-text-primary)] mb-3">Cross-Repo Blast Radius</h4>
                  <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">
                    Change one shared API endpoint and instantly see every downstream service, frontend component, and mobile app affected across your entire organization.
                  </p>
                </div>

                <div className="bg-[var(--theme-surface)] p-6 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] rounded-xl flex items-center justify-center text-xl mb-5">🤖</div>
                  <h4 className="text-lg font-bold text-[var(--theme-text-primary)] mb-3">AI-Queryable Code Graph</h4>
                  <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">
                    Ask: <span className="font-mono text-[var(--theme-text-primary)] text-xs bg-[var(--theme-elevated)] px-1 py-0.5 rounded">"What breaks if I modify this schema?"</span> Your agent traverses the absolute truth of your system's architecture in milliseconds.
                  </p>
                </div>

                <div className="bg-[var(--theme-surface)] p-6 rounded-2xl border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)] transition-colors">
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center text-xl mb-5">🌍</div>
                  <h4 className="text-lg font-bold text-[var(--theme-text-primary)] mb-3">Polyglot Intelligence</h4>
                  <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">
                    Universal AST parsing maps Python functions, TypeScript interfaces, Java classes, and SQL tables into one single, semantically unified system graph.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Tech Stack & Pipeline */}
        <section className="py-24 px-6 bg-[var(--theme-void)] relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--theme-text-primary)] tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>High-Performance Code Intelligence Engine</h2>
              <p className="text-[var(--theme-text-secondary)] text-lg md:text-xl max-w-3xl mx-auto font-medium">PolytracerAI combines fast AST parsing, embedded graph databases, and client-side AI to analyze massive codebases in real time.</p>
            </div>

            {/* Pipeline Visual */}
            <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--theme-border-default)] to-transparent -translate-y-1/2 z-0"></div>
              
              <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] w-full md:w-auto px-6 py-4 rounded-2xl text-center z-10 shadow-md">
                <div className="text-xl mb-2">💻</div>
                <div className="font-bold text-[var(--theme-text-primary)] text-sm">Code</div>
              </div>
              <div className="text-[var(--theme-accent)] rotate-90 md:rotate-0 z-10">→</div>
              <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] w-full md:w-auto px-6 py-4 rounded-2xl text-center z-10 shadow-md">
                <div className="text-xl mb-2">🌲</div>
                <div className="font-bold text-[var(--theme-text-primary)] text-sm">AST Parsing</div>
              </div>
              <div className="text-[var(--theme-accent)] rotate-90 md:rotate-0 z-10">→</div>
              <div className="bg-[var(--theme-elevated)] border border-[var(--theme-accent)] w-full md:w-auto px-6 py-4 rounded-2xl text-center z-10 shadow-[0_0_20px_rgba(29,155,240,0.2)]">
                <div className="text-xl mb-2">🗄️</div>
                <div className="font-bold text-[var(--theme-accent)] text-sm">Dependency Graph</div>
              </div>
              <div className="text-[var(--theme-accent)] rotate-90 md:rotate-0 z-10">→</div>
              <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] w-full md:w-auto px-6 py-4 rounded-2xl text-center z-10 shadow-md">
                <div className="text-xl mb-2">🤖</div>
                <div className="font-bold text-[var(--theme-text-primary)] text-sm">AI Reasoning</div>
              </div>
              <div className="text-[var(--theme-accent)] rotate-90 md:rotate-0 z-10">→</div>
              <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] w-full md:w-auto px-6 py-4 rounded-2xl text-center z-10 shadow-md">
                <div className="text-xl mb-2">🕸️</div>
                <div className="font-bold text-[var(--theme-text-primary)] text-sm">Visualization</div>
              </div>
            </div>

            {/* Tech Capabilities Cards (Larger, more padding) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-all duration-300 border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)]/50 p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--theme-elevated)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🌲</div>
                  <h3 className="font-bold text-xl text-[var(--theme-text-primary)]">Tree-sitter</h3>
                </div>
                <div>
                  <h4 className="text-[var(--theme-accent)] text-sm font-semibold mb-2 uppercase tracking-wider">Fast Code Parsing</h4>
                  <p className="text-[var(--theme-text-secondary)]">Parses multi-language codebases into structured ASTs instantly.</p>
                </div>
              </div>

              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-all duration-300 border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)]/50 p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] group lg:scale-105 border-b-4 border-b-[var(--theme-accent)] relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--theme-elevated)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🗄️</div>
                  <h3 className="font-bold text-xl text-[var(--theme-text-primary)]">KuzuDB</h3>
                </div>
                <div>
                  <h4 className="text-[var(--theme-accent)] text-sm font-semibold mb-2 uppercase tracking-wider">Graph Intelligence Engine</h4>
                  <p className="text-[var(--theme-text-secondary)]">Embedded graph database for ultra-fast dependency traversal.</p>
                </div>
              </div>

              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-all duration-300 border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)]/50 p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--theme-elevated)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🤖</div>
                  <h3 className="font-bold text-xl text-[var(--theme-text-primary)]">transformers.js</h3>
                </div>
                <div>
                  <h4 className="text-[var(--theme-accent)] text-sm font-semibold mb-2 uppercase tracking-wider">Local AI Inference</h4>
                  <p className="text-[var(--theme-text-secondary)]">Runs ML models directly in the browser for private analysis.</p>
                </div>
              </div>

              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-all duration-300 border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)]/50 p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] group lg:col-span-2 lg:mx-auto lg:w-3/4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--theme-elevated)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="font-bold text-xl text-[var(--theme-text-primary)]">WebAssembly</h3>
                </div>
                <div>
                  <h4 className="text-[var(--theme-accent)] text-sm font-semibold mb-2 uppercase tracking-wider">Native-Speed Execution</h4>
                  <p className="text-[var(--theme-text-secondary)]">Accelerates parsing and graph operations to near-native performance.</p>
                </div>
              </div>

              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-all duration-300 border border-[var(--theme-border-default)] hover:border-[var(--theme-accent)]/50 p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] group lg:col-span-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--theme-elevated)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🕸️</div>
                  <h3 className="font-bold text-xl text-[var(--theme-text-primary)]">Sigma.js</h3>
                </div>
                <div>
                  <h4 className="text-[var(--theme-accent)] text-sm font-semibold mb-2 uppercase tracking-wider">Interactive Graph Visualization</h4>
                  <p className="text-[var(--theme-text-secondary)]">Renders large dependency graphs with smooth exploration.</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics Strip */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-elevated)] border border-[var(--theme-border-default)] rounded-[2rem] p-8 md:p-12 shadow-xl">
              <h3 className="text-center font-bold text-2xl mb-10 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>Enterprise-Grade Performance</h3>
              <div className="flex flex-col md:flex-row gap-8 justify-between text-left">
                 <div className="flex items-start gap-4 flex-1">
                    <div className="text-2xl mt-1">⚡</div>
                    <div>
                      <h4 className="font-bold text-[var(--theme-text-primary)] text-lg mb-1">Blazing Fast Parsing</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm font-medium">Parses 100k+ lines of code in seconds.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 flex-1">
                    <div className="text-2xl mt-1">📊</div>
                    <div>
                      <h4 className="font-bold text-[var(--theme-text-primary)] text-lg mb-1">Instant Traversal</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm font-medium">Graph traversal in milliseconds.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 flex-1">
                    <div className="text-2xl mt-1">🧠</div>
                    <div>
                      <h4 className="font-bold text-[var(--theme-text-primary)] text-lg mb-1">Zero Latency AI</h4>
                      <p className="text-[var(--theme-text-secondary)] text-sm font-medium">Local AI inference without cloud delays.</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto relative group">
            {/* Animated Glow Effect behind the main card (widened horizontally) */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--theme-accent)] to-purple-600 rounded-[3rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
            
            <div className="relative bg-[var(--theme-elevated)]/90 backdrop-blur-xl rounded-[2.5rem] border border-[var(--theme-border-default)] shadow-2xl px-6 py-16 md:p-20 text-center overflow-hidden">
              
              {/* Internal decorative gradients & graph visual */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--theme-text-primary) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[var(--theme-accent)]/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Faint Abstract Graph Nodes Behind Text */}
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="200" cy="100" r="10" fill="currentColor"/>
                 <circle cx="600" cy="80" r="15" fill="currentColor"/>
                 <circle cx="400" cy="300" r="12" fill="currentColor"/>
                 <circle cx="300" cy="200" r="8" fill="currentColor"/>
                 <line x1="200" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="2"/>
                 <line x1="300" y1="200" x2="400" y2="300" stroke="currentColor" strokeWidth="2"/>
                 <line x1="600" y1="80" x2="400" y2="300" stroke="currentColor" strokeWidth="2"/>
                 <line x1="200" y1="100" x2="600" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>

              <div className="relative z-10 flex flex-col items-center">
                {/* Small Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-surface)]/80 border border-[var(--theme-border-subtle)] text-xs font-semibold text-[var(--theme-text-primary)] mb-8 shadow-sm backdrop-blur-md">
                  <span className="text-[var(--theme-accent)]">⚡</span> Index your codebase in seconds
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--theme-text-secondary)] mb-6 tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Start Exploring Your<br/>Codebase in Seconds
                </h2>
                
                <p className="text-[var(--theme-text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  PolytraceAI builds a global dependency graph across your repositories so you can trace dependencies, detect blast radius, and understand your system instantly.
                </p>

                {/* 3-Point Value Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 w-full max-w-4xl mx-auto">
                   <div className="flex items-center gap-3 bg-[var(--theme-surface)]/50 px-4 py-2.5 rounded-xl border border-[var(--theme-border-subtle)] shadow-sm backdrop-blur-sm whitespace-nowrap">
                     <span className="text-xl">⚡</span>
                     <span className="text-sm font-bold text-[var(--theme-text-primary)] tracking-wide">Index massive repositories instantly</span>
                   </div>
                   <div className="flex items-center gap-3 bg-[var(--theme-surface)]/50 px-4 py-2.5 rounded-xl border border-[var(--theme-border-subtle)] shadow-sm backdrop-blur-sm whitespace-nowrap">
                     <span className="text-xl">🔎</span>
                     <span className="text-sm font-bold text-[var(--theme-text-primary)] tracking-wide">Trace dependencies across services</span>
                   </div>
                   <div className="flex items-center gap-3 bg-[var(--theme-surface)]/50 px-4 py-2.5 rounded-xl border border-[var(--theme-border-subtle)] shadow-sm backdrop-blur-sm whitespace-nowrap">
                     <span className="text-xl">💥</span>
                     <span className="text-sm font-bold text-[var(--theme-text-primary)] tracking-wide">Predict blast radius before shipping</span>
                   </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                  <button 
                    onClick={handleLaunchApp} 
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--theme-accent)] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[var(--theme-accent-dim)] transition-all shadow-lg shadow-[var(--theme-accent)]/25 hover:shadow-[var(--theme-accent)]/40 hover:-translate-y-1 active:scale-95 border border-white/10"
                  >
                    Explore Your Codebase
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  
                  <a 
                    href="https://github.com/HimanshuxAI/byteeee" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] text-[var(--theme-text-primary)] px-8 py-5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95"
                  >
                    <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="fill-current">
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-[10px] text-[var(--theme-text-secondary)] font-semibold uppercase tracking-wider leading-none mb-1">Star on GitHub</span>
                      <span className="leading-none font-bold text-base">PolytraceAi</span>
                    </div>
                  </a>
                </div>

                {/* Trust/Credibility Footer */}
                <div className="mt-12 pt-6 border-t border-[var(--theme-border-subtle)] w-full max-w-lg mx-auto">
                   <p className="text-[var(--theme-text-secondary)] text-xs md:text-sm font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-3">
                     <span>Open-source</span> • <span>Local-first</span> • <span>Built for polyglot codebases</span>
                   </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--theme-border-default)] bg-[var(--theme-surface)] py-16 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--theme-accent)]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-8 z-10 relative">
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-[var(--theme-elevated)] text-[var(--theme-text-primary)] flex items-center justify-center border border-[var(--theme-border-subtle)] shadow-inner">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <span className="font-bold text-[var(--theme-text-primary)] text-xl tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>PolytraceAi</span>
            </div>
            <p className="text-sm md:text-base font-medium text-[var(--theme-text-secondary)]">Dependency Graph Intelligence for Polyglot Codebases</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-semibold text-[var(--theme-text-secondary)] mt-2">
            <a href="https://github.com/HimanshuxAI/byteeee" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-text-primary)] transition-colors flex items-center gap-2">
              GitHub
            </a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); setViewMode('docs'); }} className="hover:text-[var(--theme-text-primary)] transition-colors">Docs</a>
            <a href="#" className="hover:text-[var(--theme-text-primary)] transition-colors">Changelog</a>
            <a href="https://github.com/HimanshuxAI/byteeee/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-text-primary)] transition-colors">License</a>
          </div>
          
          <div className="text-sm font-medium text-[var(--theme-text-muted)] mt-4">
            &copy; 2026 PolytraceAi.
          </div>
        </div>
      </footer>
    </div>
  );
};
