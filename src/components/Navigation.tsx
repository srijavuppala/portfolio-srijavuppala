import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { id: 'portfolio', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || mobileOpen
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleTabChange('portfolio')}
          className="font-display font-semibold text-base tracking-tight text-foreground hover:text-primary transition-colors duration-200"
        >
          Srija Vuppala<span className="text-primary">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleTabChange(link.id)}
                className={`relative text-sm tracking-wide font-sans font-normal transition-colors duration-200 pb-0.5 ${
                  activeTab === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme toggle + Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => handleTabChange('contact')}
            className="inline-flex items-center gap-2 text-xs font-sans font-normal tracking-widest uppercase text-primary-foreground bg-primary px-5 py-2.5 rounded-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-px"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex items-center justify-center w-9 h-9 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <ul className="flex flex-col list-none m-0 p-0 px-6 py-4 gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleTabChange(link.id)}
                    className={`w-full text-left text-sm font-sans py-3 border-b border-border/50 transition-colors duration-200 ${
                      activeTab === link.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => handleTabChange('contact')}
                  className="w-full text-xs font-sans font-normal tracking-widest uppercase text-primary-foreground bg-primary px-5 py-3 rounded-sm hover:opacity-90 transition-all duration-200"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
