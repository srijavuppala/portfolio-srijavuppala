import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  
  const sections = [
    { id: 'portfolio', component: Hero, title: 'Portfolio' },
    { id: 'about', component: Experience, title: 'About Me' },
    { id: 'projects', component: Projects, title: 'Projects' },
    { id: 'contact', component: Contact, title: 'Contact Me' }
  ];

  const handleViewProjects = () => {
    scrollToSection('projects');
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveTab(sectionId);
  };

  const handleTabChange = (tabId: string) => {
    scrollToSection(tabId);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
          
          <div className="scroll-smooth">
            {sections.map((section) => {
              const Component = section.component;
              return (
                <motion.section
                  key={section.id}
                  ref={(el) => {
                    sectionsRef.current[section.id] = el;
                  }}
                  data-section={section.id}
                  className="min-h-screen"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Component 
                    onViewProjects={section.id === 'portfolio' ? handleViewProjects : undefined}
                  />
                </motion.section>
              );
            })}
          </div>
          
          <Chatbot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;