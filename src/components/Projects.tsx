
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RAG Chatbot Application",
    description: "Built using Snowflake, Cortex Search, and Mistral LLM for intelligent document processing and Q&A.",
    tags: ["AI", "Snowflake", "LLM"],
    category: "AI & ML"
  },
  {
    title: "Real-Time Monitoring System",
    description: "Web application for monitoring and ensuring compliance in real-time operations.",
    tags: ["DevOps", "Monitoring", "Web"],
    category: "Web Apps"
  },
  {
    title: "Google Vertex AI Chatbot",
    description: "Integrated chatbot solution using Google Vertex AI and AlloyDB for enhanced user interactions.",
    tags: ["Google Cloud", "AI", "Database"],
    category: "AI & ML"
  },
  {
    title: "Infrastructure Management",
    description: "Automated system for managing and scaling cloud infrastructure efficiently.",
    tags: ["Cloud", "Automation", "DevOps"],
    category: "DevOps"
  },
  {
    title: "Portfolio Website",
    description: "The codebase for this portfolio, showcasing my skills and projects.",
    tags: ["React", "Vite", "Firebase"],
    category: "Showcase"
  },
  {
    title: "CI/CD Pipeline Tool",
    description: "Automated deployment pipeline with Docker and Kubernetes integration.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    category: "DevOps"
  }
];

const filterCategories = [
  { name: "All", count: projects.length },
  { name: "Showcase", count: projects.filter(p => p.category === "Showcase").length },
  { name: "AI & ML", count: projects.filter(p => p.category === "AI & ML").length },
  { name: "Web Apps", count: projects.filter(p => p.category === "Web Apps").length },
  { name: "DevOps", count: projects.filter(p => p.category === "DevOps").length }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeFilter === category.name ? "default" : "outline"}
              onClick={() => setActiveFilter(category.name)}
              className={`rounded-full px-6 py-2 transition-all ${
                activeFilter === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/10 border-muted text-white hover:bg-background/20"
              }`}
            >
              {category.name === "All" ? "⭐" : 
               category.name === "Showcase" ? "💎" :
               category.name === "AI & ML" ? "🤖" :
               category.name === "Web Apps" ? "🌐" :
               category.name === "DevOps" ? "⚙️" : "📁"} {category.name} {category.count}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-background/95 backdrop-blur hover:bg-background/100 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="mt-2 text-sm">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
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
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
