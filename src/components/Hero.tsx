import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const NeuralNetworkBg = lazy(() => import('./three/NeuralNetworkBg'));

interface HeroProps {
  onViewProjects?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = ({ onViewProjects }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden touch-manipulation">
      {/* 3D neural network constellation background */}
      <Suspense fallback={null}>
        <NeuralNetworkBg />
      </Suspense>

      {/* Content — centered full width */}
      <motion.div
        className="relative z-10 flex flex-col justify-center w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="section-label mb-5">
          Full-Stack Engineer · AI · Cloud
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.02] mb-6"
        >
          Building systems<br />
          that <span className="italic font-light text-primary">think</span><br />
          and scale.
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap mb-10">
          <button
            onClick={onViewProjects}
            className="inline-flex items-center gap-2.5 text-xs font-sans font-normal tracking-widest uppercase text-primary-foreground bg-primary px-6 py-3.5 rounded-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-px group"
          >
            View Projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="mailto:srijavuppala11@gmail.com"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <a
            href="https://github.com/srijavuppala"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/srija-vuppala/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://srijavuppala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            aria-label="Website"
          >
            <ExternalLink className="h-4 w-4" />
          </a>

          <div className="ml-6 flex items-center gap-6 border-l border-border pl-6">
            <div>
              <div className="font-display text-xl font-medium text-foreground leading-none">2+</div>
              <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-0.5">Years Exp.</div>
            </div>
            <div>
              <div className="font-display text-xl font-medium text-foreground leading-none">6+</div>
              <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-0.5">Projects</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
