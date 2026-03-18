import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "AI/ML Developer",
  "DevOps Engineer",
  "Software Developer",
  "Hardware Engineer",
  "Product Developer",
  "Telecom Engineer"
];

const DynamicRoles = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRoleIndex}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl md:text-2xl font-normal text-primary absolute"
        >
          {roles[currentRoleIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DynamicRoles;
