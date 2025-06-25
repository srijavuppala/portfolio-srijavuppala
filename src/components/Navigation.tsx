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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ToggleGroup 
          type="single" 
          value={activeTab} 
          onValueChange={onTabChange}
          className="bg-muted rounded-full p-1"
        >
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              <ToggleGroupItem
                key={tab.id}
                value={tab.id}
                className="rounded-full px-4 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground relative"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </ToggleGroupItem>
            ))}
          </AnimatePresence>
        </ToggleGroup>
      </div>
    </motion.nav>
  );
};

export default Navigation;
