import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm Srija
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          AI & Cloud Engineer | Tech Community Leader
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building innovative solutions at the intersection of AI, Cloud, and DevOps.
          Currently working at Optum (UnitedHealth Group).
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;