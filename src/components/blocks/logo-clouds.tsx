import React from 'react';
import { motion } from 'framer-motion';

export const LogoClouds = () => {
  const partners = [
    {
      name: "Google Cloud",
      detail: "Premier Partner Tier",
      icon: (
        /* GCP Official Vector Blueprint Geometry */
        <svg className="h-7 w-auto object-contain shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19.35 10.04c-.1-.53-.3-1.03-.57-1.51L12 13.5v6.5h7c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#34A853"/>
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4v9.5l6.78-4.97c-.1-.53-.3-1.03-.57-1.51z" fill="#EA4335"/>
          <path d="M12 4C9.11 4 6.6 5.64 5.35 8.04c.73-.08 1.44.13 2.06.56L12 13.5V4z" fill="#FBBC05"/>
        </svg>
      )
    },
    {
      name: "Amazon Web Services",
      detail: "Advanced Consulting",
      icon: (
        /* AWS Official Infrastructure Vector Geometry */
        <svg className="h-7 w-auto object-contain shrink-0 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      name: "Microsoft Azure",
      detail: "Cloud Delivery Core",
      icon: (
        /* Azure Official Enterprise Architecture Vector Geometry */
        <svg className="h-6 w-auto object-contain shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M5.4 19.3L1.1 14.1C.7 13.6.7 12.9 1.1 12.4L10.3 2.3C10.7 1.9 11.4 1.9 11.8 2.3L22.9 14.5C23.3 15 23.3 15.7 22.9 16.2L18.6 21.4C18.2 21.8 17.5 21.8 17.1 21.4L5.4 19.3Z" fill="#007FFF"/>
          <path d="M10.3 2.3L1.1 12.4C.7 12.9.7 13.6 1.1 14.1L5.4 19.3L13.5 10.2L10.3 2.3Z" fill="#005A9C"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      className="w-full py-20 border-t transition-colors duration-300 relative z-20 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full text-center space-y-10">
        
        {/* Aceternity Style Typography Header Track */}
        <div className="space-y-2 max-w-md mx-auto">
          <span className="text-violet-700 dark:text-violet-400 text-xs font-mono tracking-widest uppercase bg-violet-600/10 border border-violet-500/20 px-3 py-0.5 rounded-full">
            / certified_hyperscalers.sh
          </span>
          <h3 className="text-2xl font-black tracking-tight pt-2" style={{ color: 'var(--text-main)' }}>
            Trusted by modern operators across industries
          </h3>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            From pilot to scale without cloud engineering chaos.
          </p>
        </div>

        {/* ACETERNITY UI EXACT PORT LAYER: 
          Responsive Grid track maps: 1 col on mobile, 3 columns on desktop.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              /* Aceternity Spec Parameters: 
                - Starts 10px below layout bounds
                - Heavy 10px initial motion blur
                - Zero raw initial alpha opacity
              */
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1, // Staggered entry timing block 
                ease: [0.21, 1.02, 0.43, 1.01] // Exact premium custom ease-out curves
              }}
              className="border p-6 rounded-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-violet-500/30 group"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div className="transition-all duration-300 group-hover:scale-105 filter drop-shadow-sm group-hover:drop-shadow-[0_4px_12px_rgba(109,40,217,0.15)]">
                {partner.icon}
              </div>
              
              <div className="text-center space-y-0.5">
                <p className="text-sm font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
                  {partner.name}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {partner.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};