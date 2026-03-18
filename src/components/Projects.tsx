import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "RAG Chatbot Application",
    description: "Intelligent document Q&A built with Snowflake Cortex Search and Mistral LLM for contextual, retrieval-augmented responses.",
    tags: ["AI", "Snowflake", "LLM", "Python"],
    category: "AI & ML",
    github: "https://github.com/srijavuppala/rag_chat_bot",
    featured: true,
  },
  {
    title: "ML End-to-End Pipeline",
    description: "Complete MLOps pipeline from data preprocessing through model deployment, with automated retraining and monitoring workflows.",
    tags: ["Python", "MLOps", "Docker", "ML"],
    category: "AI & ML",
    github: "https://github.com/srijavuppala/ml_end_to_end",
    featured: true,
  },
  {
    title: "Voice Detection Dashboard",
    description: "IoT control system integrating speech-to-text for voice-activated device management with real-time telemetry.",
    tags: ["IoT", "Speech-to-Text", "React", "WebSockets"],
    category: "IoT & Voice",
    github: "https://github.com/srijavuppala/voice_detect",
    featured: false,
  },
  {
    title: "Email Template MCP Server",
    description: "MCP server enabling dynamic email template generation and management with structured content APIs.",
    tags: ["MCP", "Node.js", "Templates", "API"],
    category: "Web Apps",
    github: "https://github.com/srijavuppala/email-template",
    featured: false,
  },
  {
    title: "Gesture Detection System",
    description: "Real-time computer vision system for gesture recognition and interactive control using trained ML models.",
    tags: ["Computer Vision", "OpenCV", "ML", "Python"],
    category: "AI & ML",
    github: "https://github.com/srijavuppala/gesture-detection",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "This portfolio — built with React, Vite, and Tailwind CSS. Modular component architecture with Framer Motion animations.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    category: "Web Apps",
    github: "https://github.com/srijavuppala/portfolio-srijavuppala",
    featured: false,
  },
];

const filters = ["All", "AI & ML", "Web Apps", "IoT & Voice"];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 px-6 md:px-12 bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Selected Work</p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Things I've <em className="italic font-light">built</em>
            </h2>
            {/* Filter tabs */}
            <div className="flex gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-sans tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                    activeFilter === f
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid — asymmetric */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
            initial="hidden"
            animate="visible"
          >
            {filtered.map((project, i) => {
              const isFeatureSized = project.featured && i < 2 && activeFilter === "All";
              return (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={itemVariants}
                  className={`group bg-background rounded-sm border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col ${
                    isFeatureSized ? 'md:col-span-6' : 'md:col-span-4'
                  }`}
                >
                  {/* Accent bar */}
                  <div className="h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 rounded-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    {/* Category label */}
                    <p className="text-xs font-sans tracking-widest uppercase text-primary mb-3">{project.category}</p>

                    {/* Description */}
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans px-2.5 py-1 bg-secondary text-muted-foreground rounded-sm border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-24">
            <p className="font-display text-xl">No projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
