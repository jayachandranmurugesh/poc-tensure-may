import { useState } from 'react';
import { MarqueeBanner } from './components/ui/marquee-banner';
import { Navigation } from './components/blocks/navigation.tsx';
import { SplitHero } from './components/blocks/split-hero';
import { CardDeck } from './components/blocks/card-deck';
import { ProductTour } from './components/blocks/product-tour.tsx';
import { BentoMatrix } from './components/blocks/bento-matrix.tsx';
import { ControlPanel } from './components/presenters/control-panel.tsx';
import { PortfolioScroll } from './components/blocks/portfolio-scroll.tsx';
import { Footer } from './components/blocks/footer';  

export default function App() {
  const [persona, setPersona] = useState<'developer' | 'enterprise' | 'scale'>('developer');
  const [activeLens, setActiveLens] = useState<'performance' | 'design' | 'conversion'>('performance');

  return (
    /* FIX 1: Removed hardcoded `bg-neutral-950` and `text-neutral-100`.
      Enforced dynamic token styles inline so the canvas uses Tensure's official beige theme.
    */
    <div 
      className="relative min-h-screen transition-colors duration-300 select-none"
      style={{ 
        backgroundColor: 'var(--bg-base)', 
        color: 'var(--text-main)' 
      }}
    >
      {/* FIX 2: Removed the dark dot pattern layer overlay. 
        The background dots are now handled elegantly inside the individual component sections.
      */}

      {/* Narrative Funnel Execution */}
      <MarqueeBanner />
      <Navigation setPersona={setPersona} />
      
      {/* FIX 3: Adjusted the vertical margin spaces from `space-y-32` down to a cleaner `space-y-12`.
        This brings the Bento Matrix, Product Tour, and Card Deck tightly together 
        so they balance beautifully right against your presenter control panel.
      */}
      <main className="relative z-10 space-y-12 pb-20">
        <SplitHero persona={persona} />
        <ProductTour />
        <BentoMatrix />
        <PortfolioScroll />
        <CardDeck />
      </main>

      <Footer />

      {/* Isolated Presentation Control Hub */}
      <ControlPanel 
        persona={persona} 
        setPersona={setPersona} 
        activeLens={activeLens} 
        setActiveLens={setActiveLens} 
      />
    </div>
  );
}