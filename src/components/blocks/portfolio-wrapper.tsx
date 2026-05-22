import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PortfolioScroll } from './portfolio-scroll';

export const PortfolioSectionWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Initialize native Framer Motion scroll tracking over a controlled vertical path
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  // Maps the 0 -> 1 progress of the 150vh runway into exactly how far the card track needs to travel.
  // Shifting to -55% smoothly brings the final card into position without clipping.
  const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    /* This wrapper acts as our isolated sandbox layer. 
       A height of 150vh provides a tight, responsive runway for the scroll track,
       completely eliminating the massive vertical blank space under your components.
    */
    <div 
      ref={wrapperRef} 
      className="relative h-[150vh] w-full"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Pin the viewport area to a crisp 100vh window so the mouse pointer remains completely still */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <PortfolioScroll movingX={horizontalX} />
      </div>
    </div>
  );
};