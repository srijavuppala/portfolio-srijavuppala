
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RAG Chatbot Application",
    description: "Built using Snowflake, Cortex Search, and Mistral LLM for intelligent document processing and Q&A.",
    tags: ["AI", "Snowflake", "LLM"],
    category: "AI & ML",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Real-Time Monitoring System",
    description: "Web application for monitoring and ensuring compliance in real-time operations.",
    tags: ["DevOps", "Monitoring", "Web"],
    category: "Web Apps",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Google Vertex AI Chatbot",
    description: "Integrated chatbot solution using Google Vertex AI and AlloyDB for enhanced user interactions.",
    tags: ["Google Cloud", "AI", "Database"],
    category: "AI & ML",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Infrastructure Management",
    description: "Automated system for managing and scaling cloud infrastructure efficiently.",
    tags: ["Cloud", "Automation", "DevOps"],
    category: "DevOps",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Portfolio Website",
    description: "The codebase for this portfolio, showcasing my skills and projects.",
    tags: ["React", "Vite", "Firebase"],
    category: "Showcase",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "CI/CD Pipeline Tool",
    description: "Automated deployment pipeline with Docker and Kubernetes integration.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    category: "DevOps",
    color: "from-orange-500 to-red-600"
  }
];

const filterCategories = [
  { 
    name: "All", 
    count: projects.length, 
    icon: "🎯",
    description: "View all projects",
    gradient: "from-gray-500 to-gray-700"
  },
  { 
    name: "Showcase", 
    count: projects.filter(p => p.category === "Showcase").length, 
    icon: "💎",
    description: "Featured work",
    gradient: "from-pink-500 to-rose-600"
  },
  { 
    name: "AI & ML", 
    count: projects.filter(p => p.category === "AI & ML").length, 
    icon: "🤖",
    description: "Artificial Intelligence",
    gradient: "from-blue-500 to-purple-600"
  },
  { 
    name: "Web Apps", 
    count: projects.filter(p => p.category === "Web Apps").length, 
    icon: "🌐",
    description: "Web Applications",
    gradient: "from-green-500 to-emerald-600"
  },
  { 
    name: "DevOps", 
    count: projects.filter(p => p.category === "DevOps").length, 
    icon: "⚙️",
    description: "Development Operations",
    gradient: "from-orange-500 to-red-600"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12">
          Explore {projects.length} projects showcasing my skills and experience
        </p>
        
        {/* Enhanced Filter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {filterCategories.map((category) => (
            <div
              key={category.name}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
                activeFilter === category.name ? "scale-105 shadow-xl" : "hover:scale-102 shadow-lg"
              }`}
              onClick={() => setActiveFilter(category.name)}
              onMouseEnter={() => setHoveredFilter(category.name)}
              onMouseLeave={() => setHoveredFilter(null)}
            >
              <div className={`bg-gradient-to-br ${category.gradient} p-6 text-white`}>
                <div className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-xs opacity-90 mb-2">{category.description}</p>
                  <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                    {category.count} {category.count === 1 ? 'project' : 'projects'}
                  </div>
                </div>
                {activeFilter === category.name && (
                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid with Category Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-background/95 backdrop-blur hover:bg-background/100 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs bg-gradient-to-r ${project.color} text-white border-none`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="mt-2 text-sm">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-muted-foreground mt-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg">No projects found in this category.</p>
            <p className="text-sm">Try selecting a different filter above.</p>
          </div>
        )}

        {/* Filter Summary */}
        {activeFilter !== "All" && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-background/20 rounded-full px-6 py-3 text-white">
              <span>Showing {filteredProjects.length} {activeFilter} projects</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter("All")}
                className="text-white hover:bg-white/20 ml-2"
              >
                View All
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
