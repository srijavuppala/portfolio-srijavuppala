import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section from state
    if (location.state?.scrollToSection) {
      setActiveTab(location.state.scrollToSection);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const renderContent = () => {
    const pageTransition = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.3 }
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          {...pageTransition}
          className="min-h-screen"
        >
          {(() => {
            switch (activeTab) {
              case 'portfolio':
                return <Hero />;
              case 'about':
                return <Experience />;
              case 'projects':
                return <Projects />;
              case 'contact':
                return <Contact />;
              default:
                return <Hero />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="transition-all duration-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
