import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const handleViewProjects = () => {
    setActiveTab('projects');
  };

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
                return <Hero onViewProjects={handleViewProjects} />;
              case 'about':
                return <Experience />;
              case 'projects':
                return <Projects />;
              case 'contact':
                return <Contact />;
              default:
                return <Hero onViewProjects={handleViewProjects} />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="transition-all duration-300">
            {renderContent()}
          </div>
          <Chatbot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;