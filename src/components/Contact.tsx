import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open('mailto:your.email@example.com')}
          >
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/srija-vuppala/')}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Richardson, Dallas</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;