import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy } from 'lucide-react';

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
    title: "RTL Agent Pipeline",
    description: "AI-powered hardware design generator — converts natural language specs and technical docs into synthesizable RTL code using a two-oracle agent architecture with Gemini 2.5.",
    tags: ["Gemini AI", "Python", "Jupyter", "Hardware"],
    category: "AI & ML",
    github: "https://github.com/srijavuppala/rtl_agent",
    featured: false,
  },
  {
    title: "ShellGenie",
    description: "Native macOS app that translates plain English into terminal commands via ⌘K. Streams Claude-powered suggestions with context awareness and built-in safety checks for destructive patterns.",
    tags: ["TypeScript", "Rust", "Tauri", "Claude API"],
    category: "Web Apps",
    github: "https://github.com/srijavuppala/shellGenie",
    featured: false,
  },
  {
    title: "PIL — Post-Purchase Intelligence",
    description: "Multi-agent AI system built on Amazon Nova that detects post-delivery friction and intervenes before dissatisfaction escalates into a return.",
    tags: ["Amazon Nova", "AWS", "AI Agents", "Python"],
    category: "Hackathon",
    devpost: "https://devpost.com/srijavuppala11",
    github: "https://github.com/srijavuppala",
    featured: false,
  },
  {
    title: "BOTiqAI",
    description: "Conversational shopping assistant combining Gemini AI with cloud-native GKE microservices to deliver personalised product recommendations at scale.",
    tags: ["Gemini AI", "GKE", "React", "Microservices"],
    category: "Hackathon",
    devpost: "https://devpost.com/srijavuppala11",
    github: "https://github.com/srijavuppala/GKE-hackathon",
    featured: false,
  },
  {
    title: "Financial Inclusion",
    description: "Alternative credit-readiness scoring engine that turns real-life habits — on-time utility and rent payments — into a fair, transparent score for the credit-invisible.",
    tags: ["FinTech", "AI/ML", "Python", "Data"],
    category: "Hackathon",
    devpost: "https://devpost.com/srijavuppala11",
    github: "https://github.com/srijavuppala",
    featured: false,
  },
  {
    title: "Voice Detection Dashboard",
    description: "IoT control system integrating speech-to-text for voice-activated device management with real-time telemetry.",
    tags: ["IoT", "Speech-to-Text", "React", "WebSockets"],
    category: "Hardware",
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
  {
    title: "UniWay",
    description: "Campus navigation and community guide app that helps students orient, connect, and find their way — winner at the hackathon.",
    tags: ["React Native", "Maps", "Community", "Navigation"],
    category: "Hackathon",
    devpost: "https://devpost.com/srijavuppala11",
    github: "https://github.com/srijavuppala",
    featured: false,
    winner: true,
  },
  // Hardware
  {
    title: "65nm ASIC Standard Cell Library Design & Characterization",
    description: "Designed complete standard cell library — NAND2, NOR2, INV, MUX2, OAI21, DFF — in 65nm CMOS using Cadence Virtuoso. Resolved 500+ DRC/LVS violations with Mentor Calibre. Automated characterization with TCL/shell scripts, cutting iteration time by 40%. Achieved 20% dynamic power reduction through device sizing and logical effort optimization.",
    tags: ["Cadence Virtuoso", "HSPICE", "Mentor Calibre", "TCL", "65nm CMOS"],
    category: "Hardware",
    github: "https://github.com/srijavuppala",
    featured: true,
  },
  {
    title: "ML-Based Hardware Architecture Predictor for Edge AI",
    description: "Neural network predictors estimating power and performance for ASIC architectures targeting edge AI deployment. Integrated ML predictions with HSPICE simulations and unit tests; reduced design time by 25% through early-stage architecture selection.",
    tags: ["Python", "TensorFlow", "HSPICE", "ML", "ASIC"],
    category: "Hardware",
    github: "https://github.com/srijavuppala",
    featured: false,
  },
  {
    title: "Embedded AI Hardware Systems — Autonomous Robotics",
    description: "Person-following autonomous luggage cart and agricultural monitoring robot with embedded sensor fusion, motor control, and real-time processing. Optimized ML deployment on resource-constrained hardware using quantization for power-efficient edge inference.",
    tags: ["Embedded", "Sensor Fusion", "Quantization", "Python", "Edge AI"],
    category: "Hardware",
    github: "https://github.com/srijavuppala",
    featured: false,
  },
  {
    title: "Automotive ECU — Toyota Hack Festa 2024",
    description: "Developed embedded C firmware for automotive ECU with CAN bus communication protocol. Implemented hardware-software co-design for real-time control with strict timing requirements, automated ECU validation frameworks, and fault-tolerant sensor/actuator integration.",
    tags: ["Embedded C", "CAN Bus", "ECU", "RTOS", "Automotive"],
    category: "Hackathon",
    github: "https://github.com/srijavuppala",
    featured: false,
  },
  {
    title: "Agentic Multimodal Pipeline for Verified Hardware Generation",
    description: "End-to-end hardware agent generating synthesizable RTL from text, PDF, audio, and video specs. Two-oracle verification strategy (spec-derived + smoke testbench) with Verilator, Yosys, SymbiYosys, ngspice, and OpenSTA. Significantly outperforms direct LLM prompting on verified RTL success rate.",
    tags: ["Gemini AI", "SystemVerilog", "Verilator", "Yosys", "SymbiYosys"],
    category: "Hardware",
    github: "https://github.com/srijavuppala/rtl_agent",
    featured: true,
  },
  {
    title: "SuperGate-Net: CDM Logic Neural Networks for Low-Power Inference",
    description: "Maps sparse quantized MLPs to CDM-inspired 4-input XOR/XNOR super-gates at 28nm CMOS. Analytical model shows 80% lower transistor count, 87–94% lower dynamic power, and up to 89× better figure of merit vs baseline. Achieves 97.9% accuracy on network intrusion detection (UNSW-NB15).",
    tags: ["28nm CMOS", "Neural Networks", "XOR/XNOR", "VLSI", "Logic Synthesis"],
    category: "Hardware",
    github: "https://github.com/srijavuppala",
    featured: true,
  },
];

const filters = ["All", "AI & ML", "Hardware", "Hackathon", "Web Apps"];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 md:py-24 px-4 md:px-12 bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Selected Work</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Things I've <em className="italic font-light">built</em>
            </h2>
            {/* Filter tabs */}
            <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none md:flex-wrap md:overflow-visible">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex-shrink-0 text-xs font-sans tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
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
                  className={`group bg-background rounded-sm border transition-all duration-300 overflow-hidden flex flex-col ${
                    isFeatureSized ? 'md:col-span-6' : 'md:col-span-4'
                  } ${(project as any).winner ? 'border-amber-400/60 hover:border-amber-400' : 'border-border hover:border-primary/30'}`}
                >
                  {/* Accent bar */}
                  <div className={`h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${(project as any).winner ? 'bg-amber-400' : 'bg-primary'}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        {(project as any).winner && (
                          <span className="inline-flex items-center gap-1 text-xs font-sans tracking-wide px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-sm">
                            <Trophy className="h-3 w-3" />
                            Winner
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                        {(project as any).devpost && (
                          <a
                            href={(project as any).devpost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 rounded-sm transition-all duration-200 text-xs font-sans font-medium"
                            aria-label="View on DevPost"
                            onClick={(e) => e.stopPropagation()}
                          >
                            D
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 rounded-sm transition-all duration-200"
                          aria-label="View on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
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
