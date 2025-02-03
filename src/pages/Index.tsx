import React from 'react';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;