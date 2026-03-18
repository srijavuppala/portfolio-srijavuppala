import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onTabChange('portfolio')}
          className="font-display font-semibold text-base tracking-tight text-foreground hover:text-primary transition-colors duration-200"
        >
          Srija Vuppala<span className="text-primary">.</span>
        </button>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onTabChange(link.id)}
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

        {/* CTA */}
        <button
          onClick={() => onTabChange('contact')}
          className="hidden md:inline-flex items-center gap-2 text-xs font-sans font-normal tracking-widest uppercase text-primary-foreground bg-primary px-5 py-2.5 rounded-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-px"
        >
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
