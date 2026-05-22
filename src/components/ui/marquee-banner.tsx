import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const MarqueeBanner = () => {
  const announcements = [
    "Tensure AI-Native Edge Nodes are universally available",
    "Bypassing regional telecom aggregators automatically",
    "Average processing benchmark clocked at <8ms latency",
    "SOC 2 Type II & Sovereign EU Data residency shields live"
  ];

  return (
    <div className="w-full bg-neutral-900 border-b border-neutral-800/80 overflow-hidden relative py-3 select-none z-50">
      {/* Visual Glare Vignettes on Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      
      {/* Twin Moving Rail Tracks */}
      <div className="flex w-max animate-marquee whitespace-nowrap gap-12">
        {/* Track 1 */}
        <div className="flex items-center gap-12 text-[11px] font-mono tracking-wider font-semibold text-neutral-300">
          {announcements.map((text, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Sparkles className="w-3.5 h-3.5 text-violet-500 animate-pulse" />
              <span>{text}</span>
              <span className="text-neutral-600 font-sans">•</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Identical duplicate for seamless looping loop) */}
        <div className="flex items-center gap-12 text-[11px] font-mono tracking-wider font-semibold text-neutral-300" aria-hidden="true">
          {announcements.map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3">
              <Sparkles className="w-3.5 h-3.5 text-violet-500 animate-pulse" />
              <span>{text}</span>
              <span className="text-neutral-600 font-sans">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};