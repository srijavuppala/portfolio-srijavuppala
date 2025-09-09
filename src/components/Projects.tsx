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
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/srijavuppala/rag_chat_bot"
  },
  {
    title: "ML End-to-End Pipeline",
    description: "Complete machine learning pipeline from data preprocessing to model deployment, showcasing MLOps practices and automated workflows.",
    tags: ["Python", "MLOps", "Deployment", "ML"],
    category: "AI & ML",
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/srijavuppala/ml_end_to_end"
  },
  {
    title: "Voice Detection Dashboard",
    description: "IoT dashboard control system with speech-to-text integration for voice-activated device management and real-time monitoring.",
    tags: ["IoT", "Speech-to-Text", "Dashboard", "Voice Control"],
    category: "IoT & Voice",
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/srijavuppala/voice_detect"
  },
  {
    title: "Email Template MCP Server",
    description: "MCP server for creating customized email templates with dynamic content generation and template management system.",
    tags: ["MCP", "Email Templates", "Node.js", "Templates"],
    category: "Web Apps",
    color: "from-green-500 to-emerald-600",
    github: "https://github.com/srijavuppala/email-template"
  },
  {
    title: "Gesture Detection System",
    description: "Advanced computer vision system for real-time gesture recognition and interactive control using machine learning models.",
    tags: ["Computer Vision", "Gesture Recognition", "ML", "Real-time"],
    category: "AI & ML",
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/srijavuppala/gesture-detection"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, Vite, and TailwindCSS featuring interactive components and animations.",
    tags: ["React", "Vite", "TailwindCSS"],
    category: "Web Apps",
    color: "from-green-500 to-emerald-600",
    github: "https://github.com/srijavuppala/portfolio-srijavuppala-2"
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
    name: "IoT & Voice", 
    count: projects.filter(p => p.category === "IoT & Voice").length, 
    icon: "🎤",
    description: "IoT & Voice Control",
    gradient: "from-purple-500 to-pink-600"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
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
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
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