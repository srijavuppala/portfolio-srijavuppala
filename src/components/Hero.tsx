import { Button } from "@/components/ui/button";
import { useRef, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import DynamicRoles from './DynamicRoles';
import profilePhoto from '/assets/profile-photo.jpeg';

interface HeroProps {
  onViewProjects?: () => void;
}

const Hero = ({ onViewProjects }: HeroProps) => {
  const [photoUrl, setPhotoUrl] = useState<string>(profilePhoto);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChoosePhoto = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPhotoUrl(objectUrl);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-primary/10 py-20 px-4 pt-24 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Photo Section */}
        <motion.div 
          className="flex justify-center md:justify-end order-2 md:order-1"
          variants={itemVariants}
        >
          <div className="relative group">
            <motion.div 
              className="w-80 h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src={photoUrl}
                  alt="Srija Vuppala"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Hidden file input for changing the photo */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />

            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="h-8 px-3 text-sm" onClick={handleChoosePhoto}>
                Change Photo
              </Button>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-4 h-4 bg-primary/30 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-4 -right-12 w-6 h-6 bg-secondary/40 rounded-full"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.4, 0.9, 0.4] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="text-center md:text-left order-1 md:order-2"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Srija</span> — 
            <br />
            <span className="text-2xl md:text-4xl">passionate about crafting</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <DynamicRoles />
          </motion.div>

          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mt-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            From architecting cloud-native solutions at <span className="text-primary font-semibold">Optum</span> to 
            building scalable systems at <span className="text-primary font-semibold">Ericsson</span>, I transform 
            complex challenges into elegant digital experiences. Currently pursuing my Master's at 
            <span className="text-primary font-semibold"> UT Dallas</span>, I blend academic rigor with 
            real-world innovation in AI, cloud computing, and full-stack development.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button 
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => onViewProjects?.()}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 justify-center md:justify-start mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:scale-110 transition-all duration-200 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/srijavuppala', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:scale-110 transition-all duration-200 hover:bg-primary/10"
              onClick={() => window.open('https://www.linkedin.com/in/srija-vuppala/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
