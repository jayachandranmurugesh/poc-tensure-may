import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Shield, Activity, Zap } from 'lucide-react';

export const CardDeck = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Real-Time Observability Core",
      subtitle: "INTERNAL DEVELOPER PLATFORM",
      icon: Activity,
      content: (
        <div className="space-y-4 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          <div className="flex justify-between items-center p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-element)', borderColor: 'var(--border-color)' }}>
            <span className="flex items-center gap-1.5 text-violet-700 dark:text-violet-400 font-bold">
              <Zap className="w-3.5 h-3.5 animate-pulse" /> Self-Service Ingress
            </span>
            <span style={{ color: 'var(--text-main)' }} className="font-bold">Active Stream</span>
          </div>
          <p className="text-[10px] leading-relaxed">
            // Internal golden paths automate deployment environments instantly, bypassing legacy infrastructure request delays.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "FinServ Compliance Shield",
      subtitle: "AUTOMATED GOVERNANCE ENGINE",
      icon: Shield,
      content: (
        <div className="space-y-3 font-mono text-[11px]">
          <div className="p-2.5 rounded-lg border flex items-center justify-between" style={{ backgroundColor: 'var(--bg-element)', borderColor: 'var(--border-color)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Security Baseline:</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
              AUDIT READY
            </span>
          </div>
          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
            // Cryptographic workload parameters lock cloud container configurations inside strict banking validation guidelines.
          </p>
        </div>
      )
    }
  ]);

  const handleCycleCard = () => {
    setCards((prev) => {
      const cloned = [...prev];
      const popped = cloned.shift();
      if (popped) cloned.push(popped);
      return cloned;
    });
  };

  return (
    <section 
      className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center border-t transition-colors duration-300 relative z-20"
      style={{ borderTopColor: 'var(--border-color)' }}
    >
      {/* Left Text Narrative Column */}
      <div className="lg:col-span-5 space-y-6 text-left">
        <span className="text-violet-700 dark:text-violet-400 text-xs font-bold uppercase tracking-widest bg-violet-600/10 border border-violet-500/20 px-3 py-1 rounded-full">
          Telemetry Mapping
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-main)' }}>
          Observe execution pipelines live.
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Cycle through deep infrastructure blueprints on screen to demonstrate real-time infrastructure guardrails.
        </p>
        <button 
          onClick={handleCycleCard} 
          className="h-12 px-6 bg-neutral-900 dark:bg-neutral-100 hover:opacity-90 text-white dark:text-neutral-950 font-bold rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Cycle Architecture Layer
        </button>
      </div>

      {/* Right Interactive Deck Column */}
      <div className="lg:col-span-7 flex justify-center items-center relative min-h-[300px] w-full">
        <div className="relative w-full max-w-[440px] h-[260px]">
          <AnimatePresence mode="popLayout">
            {cards.map((item, index) => {
              const Icon = item.icon;
              const isTopCard = index === 0;
              
              return (
                <motion.div
                  key={item.id}
                  animate={{ 
                    scale: 1 - index * 0.04, 
                    y: index * -12, 
                    opacity: index > 1 ? 0 : 1 
                  }}
                  exit={isTopCard ? { x: 360, opacity: 0, rotate: 10, transition: { duration: 0.3 } } : undefined}
                  className={`absolute inset-0 rounded-2xl border p-5 flex flex-col justify-between backdrop-blur-md shadow-xl transition-colors duration-300 ${isTopCard ? 'cursor-pointer' : 'pointer-events-none'}`}
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' ,zIndex: cards.length - index }}
                  onClick={isTopCard ? handleCycleCard : undefined}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2.5" style={{ borderBottomColor: 'var(--border-color)' }}>
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg border text-violet-600" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <h4 className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
                          <p className="text-[9px] font-mono tracking-wider mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    {item.content}
                  </div>
                  
                  <div className="pt-2 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderTopColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                    <span>Click top card area to slide layer</span>
                    <span className="text-violet-700 dark:text-violet-400 font-bold">TENSURE SYSTEMS</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};