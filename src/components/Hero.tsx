
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DynamicRoles from './DynamicRoles';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background py-20 px-4 pt-24">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/269e323c-dd51-427a-836f-4758d8708827.png" 
            alt="Srija's Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-primary/20"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm Srija
        </h1>
        <DynamicRoles />
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto mt-8">
          I'm an enthusiast in cloud development, CI/CD, machine learning, hardware engineering, 
          AI/ML, and software development. Building innovative solutions at the intersection of 
          technology and creativity.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate('/projects')}
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
