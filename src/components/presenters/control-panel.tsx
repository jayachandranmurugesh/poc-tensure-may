import React from 'react';
import { Settings } from 'lucide-react';

interface ControlPanelProps {
  persona: 'developer' | 'enterprise' | 'scale';
  setPersona: (p: 'developer' | 'enterprise' | 'scale') => void;
  activeLens: 'performance' | 'design' | 'conversion';
  setActiveLens: (l: 'performance' | 'design' | 'conversion') => void;
}

export const ControlPanel = ({ persona, setPersona, activeLens, setActiveLens }: ControlPanelProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-neutral-900/95 border border-neutral-800 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden">
      <div className="bg-neutral-950 px-4 py-2.5 border-b border-neutral-850 flex items-center gap-2">
        <Settings className="w-3.5 h-3.5 text-violet-400 animate-spin-slow" />
        <div>
          <h4 className="text-xs font-bold text-white">Presentation Auditor</h4>
          <p className="text-[9px] text-neutral-500 font-mono">Tensure Controls</p>
        </div>
      </div>

      <div className="p-4 space-y-4 text-xs">
        {/* Persona Controller */}
        <div className="space-y-1.5">
          <span className="text-[9px] font-mono font-bold text-neutral-500 uppercase block tracking-wider">1. Audience Morphing</span>
          <div className="grid grid-cols-3 gap-1 bg-neutral-950 p-0.5 rounded border border-neutral-850 text-[10px]">
            {(['developer', 'enterprise', 'scale'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPersona(p)}
                className={`py-1 rounded capitalize font-medium ${persona === p ? 'bg-violet-600 text-white' : 'text-neutral-400'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Lens Controller */}
        <div className="space-y-1.5">
          <span className="text-[9px] font-mono font-bold text-neutral-500 uppercase block tracking-wider">2. System Lens</span>
          <div className="grid grid-cols-3 gap-1 bg-neutral-950 p-0.5 rounded border border-neutral-850 text-[10px]">
            {(['performance', 'design', 'conversion'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setActiveLens(l)}
                className={`py-1 rounded capitalize font-medium ${activeLens === l ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Context Card based on activeLens state */}
        <div className="p-3 bg-neutral-950 rounded border border-neutral-850 font-mono text-[10px] text-neutral-400 leading-relaxed">
          {activeLens === 'performance' && "✓ Core paint optimized below 0.8s using non-blocking SVG matrices."}
          {activeLens === 'design' && "✓ Stylized grid frameworks matching strict Shadcn parameters."}
          {activeLens === 'conversion' && "✓ Quantitative narrative conversion mapping running above fold."}
        </div>
      </div>
    </div>
  );
};