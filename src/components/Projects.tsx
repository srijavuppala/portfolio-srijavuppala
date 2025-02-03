import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "RAG Chatbot Application",
    description: "Built using Snowflake, Cortex Search, and Mistral LLM for intelligent document processing and Q&A.",
    tags: ["AI", "Snowflake", "LLM"]
  },
  {
    title: "Real-Time Monitoring System",
    description: "Web application for monitoring and ensuring compliance in real-time operations.",
    tags: ["DevOps", "Monitoring", "Web"]
  },
  {
    title: "Google Vertex AI Chatbot",
    description: "Integrated chatbot solution using Google Vertex AI and AlloyDB for enhanced user interactions.",
    tags: ["Google Cloud", "AI", "Database"]
  },
  {
    title: "Infrastructure Management",
    description: "Automated system for managing and scaling cloud infrastructure efficiently.",
    tags: ["Cloud", "Automation", "DevOps"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-background/95 backdrop-blur hover:bg-background/100 transition-colors"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;