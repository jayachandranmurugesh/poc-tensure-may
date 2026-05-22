import React from 'react';
import { useTheme } from '../../hooks/use-theme';
import { Sun, Moon } from 'lucide-react';

interface NavProps {
  setPersona: (p: 'developer' | 'enterprise' | 'scale') => void;
}

export const Navigation = ({ setPersona }: NavProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b h-16 transition-all"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* OFFICIAL TENSURE TYPOGRAPHY LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Tensure Geometric Shield Emblem */}
          <svg className="w-6 h-6 text-violet-600 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18c3.39.99 5.82 3.81 5.82 7.09v4.21c0 3.32-1.92 6.42-5.82 7.51-3.9-1.09-5.82-4.19-5.82-7.51v-4.21c0-3.28 2.43-6.1 5.82-7.09z"/>
          </svg>
          <span style={{ color: 'var(--text-main)' }} className="font-black text-xl tracking-tighter uppercase font-sans">
            Tensure<span className="text-violet-600">.</span>
          </span>
        </div>

        {/* Directory Navigation Links */}
        <nav className="hidden md:flex gap-6 text-xs font-mono font-bold" style={{ color: 'var(--text-muted)' }}>
          <button onClick={() => setPersona('developer')} className="hover:text-violet-600 transition-colors uppercase tracking-wider">/ dev_portals</button>
          <button onClick={() => setPersona('enterprise')} className="hover:text-violet-600 transition-colors uppercase tracking-wider">/ compliance_shield</button>
          <button onClick={() => setPersona('scale')} className="hover:text-violet-600 transition-colors uppercase tracking-wider">/ cloud_modernize</button>
        </nav>

        {/* System Theme Toggles */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}
            className="p-2 rounded-lg border hover:bg-neutral-500/10 transition-colors"
            title="Toggle Aura Mode"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-lg text-xs font-mono font-bold transition-all shadow-sm">
            GET_IN_TOUCH_
          </button>
        </div>

      </div>
    </header>
  );
};