import imgUrl from '../../assets/logo.svg'
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
          <img src={imgUrl} alt="Tensure Logo" className="w-24 h-24" />
         
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