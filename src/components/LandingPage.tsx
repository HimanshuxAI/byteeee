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
      <header className="sticky top-0 z-50 bg-[var(--theme-surface)]/80 backdrop-blur-md border-b border-[var(--theme-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--theme-elevated)] text-[var(--theme-text-primary)] flex items-center justify-center group-hover:bg-[var(--theme-accent)] group-hover:text-white transition-colors duration-300">
              <span className="text-xl">◇</span>
            </div>
            <span className="font-bold text-xl tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>PolytraceAi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">How it Works</a>
            <a href="#docs" className="text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">Documentation</a>
          </nav>

          <div className="flex items-center gap-4 relative">
            <a href="https://github.com/HimanshuxAI/byteeee" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors">
              <span>Star us</span>
            </a>

            {/* Theme Switcher Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--theme-border-default)] hover:border-[var(--theme-text-primary)] bg-[var(--theme-surface)] text-[var(--theme-text-primary)] text-sm transition-all shadow-sm"
                title="Change Theme"
              >
                <div className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${theme === 'dark' ? 'bg-[#1D9BF0]' :
                    'bg-[#d97706]'
                    }`} />
                  <span className="capitalize hidden sm:block">{theme.replace('-dark', '').replace('-light', '')}</span>
                </div>
              </button>

              {/* Theme Dropdown Menu */}
              {isThemeMenuOpen && (
                <div className="absolute top-12 right-0 w-40 rounded-xl border border-[var(--theme-border-subtle)] bg-[var(--theme-elevated)] shadow-lg overflow-hidden flex flex-col z-50 animate-fade-in text-sm">
                  {(['dark', 'white'] as AppTheme[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-[var(--theme-hover)] transition-colors ${theme === t ? 'bg-[var(--theme-hover)]' : ''}`}
                    >
                      <div className={`w-3 h-3 rounded-full ${t === 'dark' ? 'bg-[#1D9BF0]' :
                        'bg-[#d97706]'
                        }`} />
                      <span className="capitalize text-[var(--theme-text-primary)] font-medium text-left">
                        {t.replace('-dark', '').replace('-light', '')}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleLaunchApp} className="bg-[var(--theme-accent)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--theme-accent-dim)] transition-colors shadow-sm active:scale-95">
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
              The Zero-Server <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-dim)]">
                Code Intelligence
              </span> Engine.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[var(--theme-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Drop in a GitHub repo or ZIP file, and instantly get an interactive knowledge graph with a built-in RAG Agent. All running securely in your browser.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button 
                onClick={handleLaunchApp} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--theme-accent)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--theme-accent-dim)] shadow-lg shadow-[var(--theme-accent)]/20 active:scale-95 transition-all"
              >
                Try PolytraceAi Now
                <span>→</span>
              </button>
              <a 
                href="https://github.com/HimanshuxAI/byteeee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--theme-surface)] border-2 border-[var(--theme-border-default)] text-[var(--theme-text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[var(--theme-text-primary)] hover:bg-[var(--theme-hover)] transition-all active:scale-95"
              >
                View on GitHub
              </a>
            </div>

            {/* Stats/Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[var(--theme-text-secondary)] font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--theme-accent)]">✓</span>
                No signup required
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--theme-accent)]">✓</span>
                100% Client-side
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--theme-accent)]">✓</span>
                Open Source
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
              <div className="w-full relative overflow-hidden rounded-b-lg md:rounded-b-[1.5rem] bg-[#0d1117] flex justify-center items-center m-0 p-0 line-height-0">
                <video
                  src="/demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto object-contain block m-0 p-0 border-none"
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

        {/* Multi-Repo Architecture */}
        <section className="py-24 px-6 border-b border-[var(--theme-border-default)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--theme-text-primary)] tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>Multi-Repo MCP Architecture</h2>
              <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto">Set up your editors once. PolytracerAI uses a global registry to seamlessly route graph queries to any indexed repository on your machine without restarting your agent.</p>
            </div>

            <div className="bg-[var(--theme-surface)] border border-[var(--theme-border-default)] rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center text-sm font-semibold tracking-wide">

                <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-6 rounded-2xl flex-1 w-full relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--theme-void)] border border-[var(--theme-border-default)] rounded-full text-xs text-[var(--theme-text-secondary)]">Agent</div>
                  <h4 className="text-[var(--theme-text-primary)] text-lg mb-2">Editor Instance</h4>
                  <div className="text-[var(--theme-text-secondary)] font-mono text-xs opacity-80 mt-4">Claude / Cursor</div>
                </div>

                <div className="text-[var(--theme-accent)] animate-pulse">⇌ MCP ⇌</div>

                <div className="bg-[var(--theme-hover)] border-2 border-[var(--theme-accent)] p-6 rounded-2xl flex-1 w-full relative">
                  <h4 className="text-[var(--theme-text-primary)] text-lg mb-4">PolytracerAI Server</h4>
                  <div className="flex items-center justify-center gap-2 font-mono text-xs opacity-80 border-t border-[var(--theme-border-subtle)] pt-4 text-[var(--theme-text-secondary)]">Reads ~/.PolytraceAI/registry</div>
                </div>

                <div className="text-[var(--theme-accent)] animate-pulse">⇌ KuzuDB ⇌</div>

                <div className="flex flex-col gap-4 flex-1 w-full relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--theme-void)] border border-[var(--theme-border-default)] rounded-full text-xs text-[var(--theme-text-secondary)]">Local Repos</div>
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-[var(--theme-text-primary)] shadow-sm">
                    Frontend Repo
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">/.PolytraceAI</div>
                  </div>
                  <div className="bg-[var(--theme-elevated)] border border-[var(--theme-border-default)] p-4 rounded-xl text-[var(--theme-text-primary)] shadow-sm">
                    Backend Repo
                    <div className="text-[var(--theme-text-muted)] text-[10px] mt-1 font-mono">/.PolytraceAI</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 px-6 bg-[var(--theme-void)]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>Engineered for Scale</h2>
            <p className="text-[var(--theme-text-secondary)] text-md max-w-xl mx-auto mb-12">Leveraging the fastest modern tooling for C-native parsing, embedded graph operations, and client-side ML.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-80">
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-colors border border-[var(--theme-border-default)] px-4 py-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-2xl text-[var(--theme-text-primary)] mb-1">🌲</div>
                <span className="font-bold text-[var(--theme-text-primary)] text-sm">Tree-sitter</span>
              </div>
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-colors border border-[var(--theme-border-default)] px-4 py-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-2xl text-[var(--theme-text-primary)] mb-1">🗄️</div>
                <span className="font-bold text-[var(--theme-text-primary)] text-sm">KuzuDB</span>
              </div>
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-colors border border-[var(--theme-border-default)] px-4 py-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-2xl text-[var(--theme-text-primary)] mb-1">🧠</div>
                <span className="font-bold text-[var(--theme-text-primary)] text-sm">transformers.js</span>
              </div>
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-colors border border-[var(--theme-border-default)] px-4 py-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-2xl text-[var(--theme-text-primary)] mb-1">⚙️</div>
                <span className="font-bold text-[var(--theme-text-primary)] text-sm">WebAssembly</span>
              </div>
              <div className="bg-[var(--theme-surface)] hover:bg-[var(--theme-hover)] transition-colors border border-[var(--theme-border-default)] px-4 py-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-2xl text-[var(--theme-text-primary)] mb-1">🕸️</div>
                <span className="font-bold text-[var(--theme-text-primary)] text-sm">Sigma.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-[var(--theme-elevated)] rounded-[2.5rem] border border-[var(--theme-border-default)] p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative blur behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-text-primary)] mb-6 tracking-tight" style={{ fontFamily: 'Archivo, sans-serif' }}>
                Ready to master your codebase?
              </h2>
              <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto mb-10">
                Join developers using PolytraceAi to navigate complex repositories, understand legacy code, and accelerate onboarding.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleLaunchApp} className="w-full sm:w-auto bg-[var(--theme-surface)] text-[var(--theme-text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--theme-hover)] transition-colors shadow-lg active:scale-95">
                  Launch Web App
                </button>
                <a href="https://github.com/HimanshuxAI/byteeee" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--theme-surface)]/10 hover:bg-[var(--theme-surface)]/20 border border-[var(--theme-border-default)] text-[var(--theme-text-primary)] px-6 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm active:scale-95">
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-[var(--theme-text-secondary)] font-normal leading-none mb-1">Star on GitHub</span>
                    <span className="leading-none flex items-center gap-1">
                      PolytraceAi
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--theme-border-default)] bg-[var(--theme-surface)] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[var(--theme-elevated)] text-[var(--theme-text-primary)] flex items-center justify-center">
              <span className="text-sm">◇</span>
            </div>
            <span className="font-bold text-[var(--theme-text-primary)]" style={{ fontFamily: 'Archivo, sans-serif' }}>PolytraceAi</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-[var(--theme-text-secondary)]">
            <a href="#docs" className="hover:text-[var(--theme-text-primary)] transition-colors">Documentation</a>
            <a href="#" className="hover:text-[var(--theme-text-primary)] transition-colors">Changelog</a>
            <a href="https://github.com/HimanshuxAI/byteeee/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--theme-text-primary)] transition-colors">License</a>
          </div>
          <div className="text-sm text-gray-400">
            &copy; 2024 PolytraceAi Contributors.
          </div>
        </div>
      </footer>
    </div>
  );
};
