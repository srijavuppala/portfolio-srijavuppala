import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={onTabChange}
            className="bg-muted/80 rounded-full p-1.5 shadow-lg"
          >
            <AnimatePresence mode="wait">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <ToggleGroupItem
                    value={tab.id}
                    className="rounded-full px-5 py-2.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground relative hover:bg-muted-foreground/10 transition-all duration-200"
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full shadow-md"
                        initial={false}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30,
                          duration: 0.3
                        }}
                      />
                    )}
                    <span className="relative z-10 font-medium">{tab.label}</span>
                  </ToggleGroupItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </ToggleGroup>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
