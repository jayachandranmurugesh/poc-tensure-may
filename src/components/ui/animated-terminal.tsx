import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ShieldAlert } from 'lucide-react';

export const AnimatedTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const terminalSteps = [
    { type: 'input', text: 'tensure platform init --blueprint=finserv-gke' },
    { type: 'process', text: '⠋ Resolving Google Cloud Premier token structures...' },
    { type: 'success', text: '✓ Dynamic authentication handshake verified.' },
    { type: 'input', text: 'tensure guardrails verify --spec=pci-dss.yaml' },
    { type: 'process', text: '⠙ Injecting Policy-as-Code auditing shields...' },
    { type: 'success', text: '✓ 14 enterprise compliance rules compiled (SOC 2 Type II ready).' },
    { type: 'input', text: 'tensure live --deploy' },
    { type: 'process', text: '⠦ Syncing automated GitOps golden paths...' },
    { type: 'live', text: '🚀 SUCCESS: Internal Developer Platform provisioned in 4.8s.' }
  ];

  useEffect(() => {
    if (currentStep >= terminalSteps.length) {
      // Loop execution cleanly every 6 seconds to keep your presentation lively
      const resetTimeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentStep(0);
      }, 6000);
      return () => clearTimeout(resetTimeout);
    }

    const currentLine = terminalSteps[currentStep];
    let timingDelay = 800; // Standard typing pause configuration

    if (currentLine.type === 'process') timingDelay = 1200; // Simulate server communication time
    if (currentLine.type === 'success') timingDelay = 400;

    const sequenceTimer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    }, timingDelay);

    return () => clearTimeout(sequenceTimer);
  }, [currentStep]);

  return (
    <div 
      className="w-full border rounded-2xl shadow-2xl overflow-hidden font-mono text-[11px] bg-neutral-950 text-neutral-200 border-neutral-800 text-left"
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-neutral-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block" />
          <span className="text-neutral-400 text-[10px] ml-2 flex items-center gap-1.5 font-bold">
            <Terminal className="w-3.5 h-3.5 text-violet-500" /> core_engine.sh
          </span>
        </div>
        <div className="text-[9px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400 border border-neutral-700 font-bold">
          LIVE TELEMETRY
        </div>
      </div>

      {/* Code Console Screen Output */}
      <div className="p-5 space-y-2.5 min-h-[250px] max-h-[320px] overflow-y-auto bg-neutral-950/95 backdrop-blur-md">
        {visibleLines.map((index) => {
          const step = terminalSteps[index];
          
          if (step.type === 'input') {
            return (
              <div key={index} className="flex items-start gap-2">
                <span className="text-violet-500 font-bold select-none">tensure~</span>
                <motion.p 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden whitespace-nowrap text-neutral-100 font-medium tracking-wide"
                >
                  {step.text}
                </motion.p>
              </div>
            );
          }

          if (step.type === 'process') {
            return (
              <motion.p 
                key={index} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-yellow-500/90 pl-4 animate-pulse flex items-center gap-2"
              >
                {step.text}
              </motion.p>
            );
          }

          if (step.type === 'success') {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-400 pl-4 flex items-center gap-1.5 font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{step.text}</span>
              </motion.div>
            );
          }

          if (step.type === 'live') {
            return (
              <motion.div 
                key={index}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-4 p-3 rounded-xl border bg-violet-950/20 border-violet-500/30 text-violet-300 font-bold shadow-[0_0_20px_rgba(109,40,217,0.15)] flex items-start gap-2 animate-pulse"
              >
                <span>{step.text}</span>
              </motion.div>
            );
          }

          return null;
        })}

        {/* Dynamic Cursor Target Marker */}
        <motion.span 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-1.5 h-3.5 bg-neutral-400 ml-1 translate-y-0.5"
        />
      </div>
    </div>
  );
};