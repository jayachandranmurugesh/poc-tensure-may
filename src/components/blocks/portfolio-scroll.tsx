import { InfiniteMovingCards } from '../ui/infinite-cards.tsx';
import { ArrowLeftRight } from 'lucide-react';

export const PortfolioScroll = () => {
  return (
    <section 
      className="w-full py-16 border-t transition-colors duration-300 relative z-20 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        
        {/* Header Title Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 px-3 py-1 rounded-full text-violet-700 dark:text-violet-400 text-xs font-mono tracking-wider">
              <ArrowLeftRight className="w-3.5 h-3.5 animate-pulse" /> Infinite Engine Active
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
              Proven Platform Realizations
            </h2>
          </div>
          <p className="text-xs font-mono text-left sm:text-right max-w-xs" style={{ color: 'var(--text-muted)' }}>
            // Zero scroll-jacking. Experience continuous, smooth, hardware-accelerated performance metrics.
          </p>
        </div>

        {/* MOUNT MOVEMENT DECK */}
        <InfiniteMovingCards />

      </div>
    </section>
  );
};