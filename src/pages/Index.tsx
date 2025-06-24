
import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const { theme, toggleTheme } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <div className="transition-all duration-300">
        {renderContent()}
      </div>
    </main>
  );
};

export default Index;
