import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import DynamicRoles from './DynamicRoles';
import profilePhoto from '/assets/profile-photo.jpeg';

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
  const [photoUrl, setPhotoUrl] = useState<string>(profilePhoto);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoUrl(URL.createObjectURL(file));
  };

  return (
    <section className="min-h-screen grid md:grid-cols-2 bg-background overflow-hidden">
      {/* Left — content */}
      <motion.div
        className="flex flex-col justify-end pb-20 pt-32 px-8 md:px-12 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="section-label mb-5">
          Full-Stack Engineer · AI · Cloud
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.02] mb-6"
        >
          Building systems<br />
          that <span className="italic font-light text-primary">think</span><br />
          and scale.
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-6">
          <DynamicRoles />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md font-sans"
        >
          Cloud-native engineer at <span className="text-foreground font-normal">Optum</span> and{' '}
          <span className="text-foreground font-normal">Ericsson</span>. Pursuing a Master's in
          Computer Engineering at{' '}
          <span className="text-foreground font-normal">UT Dallas</span>. I build AI-driven systems,
          distributed infrastructure, and experiences that hold up under pressure.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap mb-8">
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

        <motion.div variants={itemVariants} className="flex items-center gap-1">
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
        </motion.div>
      </motion.div>

      {/* Right — photo */}
      <motion.div
        className="relative hidden md:block overflow-hidden bg-secondary order-last"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={photoUrl}
          alt="Srija Vuppala"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(0.15) contrast(1.05)' }}
        />

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />

        {/* Floating stat badges */}
        <motion.div
          className="absolute top-10 right-8 bg-background/90 backdrop-blur-sm px-4 py-3 border-l-2 border-primary"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-display text-2xl font-medium text-foreground leading-none">2+</div>
          <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-0.5">Years Exp.</div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-8 bg-foreground px-4 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-display text-2xl font-medium text-background leading-none">6+</div>
          <div className="text-xs font-sans tracking-widest uppercase text-background/60 mt-0.5">Projects</div>
        </motion.div>

        {/* Change photo overlay */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-4 right-4 text-xs font-sans tracking-wide text-background/60 hover:text-background transition-colors bg-foreground/40 backdrop-blur-sm px-3 py-1.5 rounded-sm"
        >
          Change photo
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
