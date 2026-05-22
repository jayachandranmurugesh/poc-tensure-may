import React, { useState } from 'react';
import { Terminal, RefreshCw, Smartphone, ArrowRight } from 'lucide-react';
import { TENSURE_MATRIX, SCRIPT_PAYLOADS } from '../../lib/data-matrix';
import { AnimatedTerminal } from '../ui/animated-terminal';

interface HeroProps {
  persona: 'developer' | 'enterprise' | 'scale';
}

export const SplitHero = ({ persona }: HeroProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('typescript');
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [phoneMessageState, setPhoneMessageState] = useState<'idle' | 'sending' | 'received'>('idle');

  const current = TENSURE_MATRIX[persona];

  const renderHeadline = () => {
    const parts = current.headline.split(current.highlightWord);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block bg-violet-600/10 text-violet-700 dark:text-violet-400 px-3 py-0.5 mx-1 rounded border border-violet-500/20 shadow-[0_0_40px_rgba(109,40,217,0.08)] font-black">
          {current.highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  const executeCode = () => {
    if (isCodeRunning) return;
    setIsCodeRunning(true);
    setPhoneMessageState('sending');

    setTimeout(() => {
      setPhoneMessageState('received');
      setIsCodeRunning(false);
    }, 1200);
  };

  return (
    <section 
      className="relative min-h-[92vh] w-full flex flex-col justify-center overflow-hidden border-b z-10 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}
    >
      
      {/* 1. ENHANCED CINEMATIC BACKGROUND VIDEO ENGINE */}
      <div className="absolute inset-0 pointer-events-none z-0 size-full overflow-hidden select-none">
        
        {/* Optimized Alpha Diffuser Mask - Uses transparency to let video streams breathe on beige canvas */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/60 z-20 transition-colors duration-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--bg-base)_95%)] z-20 transition-colors duration-300" />

        {/* ENHANCEMENT VECTOR:
          - Increased opacity from 0.25 to 0.65 in light mode for crisp definition.
          - Added `mix-blend-mode: multiply` and conditional layout inversion filters (`invert dark:invert-0`) 
            so the dark data lines snap perfectly to the light-beige background topography.
        */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto" 
          className="absolute inset-0 size-full object-cover opacity-65 dark:opacity-40 z-10 scale-[1.02] filter saturate-[1.2] transition-all invert dark:invert-0 mix-blend-multiply dark:mix-blend-normal"
        >
          <source src="https://cdn.sanity.io/files/3do82whm/next/93b774bc512e56dd785670f3ae94bb796ad40eb8.webm" type="video/webm" />
        </video>

        {/* Refined Dot Backing Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-40 z-20" 
          style={{ 
            backgroundImage: 'radial-gradient(var(--dot-color) 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      {/* 2. FOREGROUND TWO-COLUMN INTEGRATION WORKSPACE */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: THE NARRATIVE CONTROLS */}
        <div className="lg:col-span-6 space-y-6 text-left animate-fadeIn">
          <div className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-full shadow-sm bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm" style={{ borderColor: 'var(--border-color)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              {current.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-balance" style={{ color: 'var(--text-main)' }}>
            {renderHeadline()}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
            {current.subheadline}
          </p>

          {/* Metrics Panel Block */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg border p-4 rounded-xl font-mono text-[11px] shadow-sm bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm" style={{ borderColor: 'var(--border-color)' }}>
            <div>
              <p className="uppercase text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>IDP Delivery</p>
              <p className="text-violet-700 dark:text-violet-400 font-extrabold text-sm mt-0.5">{current.metrics.speed}</p>
            </div>
            <div>
              <p className="uppercase text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>Resiliency</p>
              <p className="font-extrabold text-sm mt-0.5" style={{ color: 'var(--text-main)' }}>{current.metrics.security}</p>
            </div>
            <div className="hidden sm:block">
              <p className="uppercase text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>Developer Velocity</p>
              <p className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm mt-0.5">{current.metrics.scale}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button className="h-12 px-6 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-bold rounded-lg text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2">
              {current.primaryCta}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: THE SIMULATOR MONITOR */}
        <div className="lg:col-span-6 relative w-full">
          <div className="relative border rounded-xl shadow-2xl overflow-hidden bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md" style={{ borderColor: 'var(--border-color)' }}>
            
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: 'var(--bg-element)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-xs font-mono ml-2 flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
                  <Terminal className="w-3.5 h-3.5 text-violet-600" />
                  {current.terminalTab}
                </span>
              </div>
              <div className="flex items-center gap-1 p-0.5 rounded border" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}>
                {['typescript', 'python', 'yaml'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded transition-all uppercase ${
                      selectedLanguage === lang ? 'bg-violet-600 text-white shadow' : 'text-neutral-500 hover:text-violet-600'
                    }`}
                  >
                    {lang === 'typescript' ? 'TS SPEC' : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 grid sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7 flex flex-col justify-between">
                <div className="font-mono text-[11px] space-y-1 overflow-auto min-h-[190px] leading-relaxed" style={{ color: 'var(--text-main)' }}>
                  {SCRIPT_PAYLOADS[selectedLanguage].split('\n').map((line, idx) => (
                    <div key={idx} className="whitespace-pre">
                      <span className="text-neutral-400 select-none mr-3 inline-block w-4 text-right">{idx + 1}</span>
                      {line.includes('import') || line.includes('from') || line.includes('version:') ? (
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">{line}</span>
                      ) : line.includes('const') || line.includes('client =') || line.includes('kind:') ? (
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{line}</span>
                      ) : line.includes('await') || line.includes('spec:') ? (
                        <span className="text-violet-600 dark:text-violet-400 font-semibold">{line}</span>
                      ) : line.includes('\'') || line.includes('"') ? (
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium">{line}</span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Platform Engine Online
                  </span>
                  <button
                    onClick={executeCode}
                    disabled={isCodeRunning}
                    className="px-3.5 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded text-[10px] font-bold flex items-center gap-1.5 transition-all disabled:opacity-50 hover:opacity-90 shadow-sm"
                  >
                    {isCodeRunning ? 'Provisioning...' : 'Provision Path'}
                  </button>
                </div>
              </div>

              {/* Smartphone Frame Monitor Simulator */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l" style={{ borderColor: 'var(--border-color)' }}>
                <div className="relative w-40 h-64 rounded-[24px] border-[3px] border-neutral-950 bg-neutral-950 shadow-2xl flex flex-col overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-4 bg-neutral-950 flex justify-center items-center z-10">
                    <div className="w-12 h-2.5 bg-neutral-950 rounded-full" />
                  </div>

                  <div className="flex-1 bg-neutral-900 p-2.5 relative flex flex-col justify-between pt-6 text-[10px]">
                    <div className="flex justify-between text-neutral-500 text-[8px] font-mono">
                      <span>Tensure-IDP</span>
                      <span>Active</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center space-y-2">
                      {phoneMessageState === 'idle' && (
                        <div className="text-center text-neutral-500 space-y-1 scale-95 font-mono">
                          <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider animate-pulse">Awaiting Trigger</p>
                        </div>
                      )}

                      {phoneMessageState === 'sending' && (
                        <div className="text-center space-y-1.5 font-mono text-[9px] text-neutral-400">
                          <RefreshCw className="w-4 h-4 animate-spin text-violet-500 mx-auto" />
                        </div>
                      )}

                      {phoneMessageState === 'received' && (
                        <div className="w-full bg-neutral-950 border border-emerald-500/30 p-2 rounded-xl shadow-lg space-y-1 animate-slideUp text-left">
                          <div className="flex items-center justify-between text-[7px] text-emerald-400 font-bold font-mono">
                            <span>PLATFORM LIVE</span>
                            <span>now</span>
                          </div>
                          <p className="text-neutral-200 text-[8px] font-mono leading-tight">✓ Golden path active. Cluster ready for delivery.</p>
                        </div>
                      )}
                    </div>
                    <div className="w-10 h-0.5 bg-neutral-600 mx-auto rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* RIGHT COLUMN PANEL: UPGRADED INTERACTIVE TERMINAL TRACK */}
<div className="lg:col-span-6 relative w-full px-2 sm:px-0">
  {/* Absolute background flare behind terminal console to enrich contrast */}
  <div className="absolute -inset-4 bg-violet-500/10 dark:bg-violet-500/5 rounded-3xl blur-2xl pointer-events-none z-0" />
  
  <div className="relative z-10 w-full max-w-xl mx-auto">
    <AnimatedTerminal />
  </div>
</div>
        </div>

      </div>
    </section>
  );
};