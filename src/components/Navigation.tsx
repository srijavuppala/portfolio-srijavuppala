
import React from 'react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  theme: string;
  onThemeToggle: () => void;
}

const Navigation = ({ activeTab, onTabChange, theme, onThemeToggle }: NavigationProps) => {
  const tabs = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/srija-profile.png" 
            alt="Srija Vuppala"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-semibold text-foreground">srijavuppala</span>
        </div>
        
        <div className="hidden md:block">
          <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={onTabChange}
            className="bg-muted rounded-full p-1"
          >
            {tabs.map((tab) => (
              <ToggleGroupItem
                key={tab.id}
                value={tab.id}
                className="rounded-full px-4 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                {tab.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="md:hidden">
          <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={onTabChange}
            className="bg-muted rounded-full p-1"
          >
            {tabs.map((tab) => (
              <ToggleGroupItem
                key={tab.id}
                value={tab.id}
                className="rounded-full px-2 py-1 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                {tab.id === 'portfolio' ? 'Home' : 
                 tab.id === 'about' ? 'About' :
                 tab.id === 'projects' ? 'Work' : 'Contact'}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onThemeToggle}
          className="rounded-full"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
