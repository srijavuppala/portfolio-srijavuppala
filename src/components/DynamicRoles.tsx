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
    <div className="h-12 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRoleIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-primary font-semibold absolute"
        >
          {roles[currentRoleIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DynamicRoles;
