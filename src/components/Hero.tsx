import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import DynamicRoles from './DynamicRoles';

interface HeroProps {
  onViewProjects?: () => void;
}

const Hero = ({ onViewProjects }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background py-20 px-4 pt-24">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          I am Srija, an enthusiast in
        </h1>
        <DynamicRoles />
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto mt-8">
          I'm passionate about building innovative solutions that combine cutting-edge technology 
          with creative problem-solving. My diverse background spans cloud development, CI/CD, 
          machine learning, hardware engineering, and software development.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => onViewProjects?.()}
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
