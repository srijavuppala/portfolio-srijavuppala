
import React, { useState, useEffect } from 'react';

const roles = [
  "Cloud Developer",
  "CI/CD Developer", 
  "Machine Learning Engineer",
  "Hardware Engineer",
  "AI/ML Engineer",
  "Software Developer"
];

const DynamicRoles = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 flex items-center justify-center">
      <span 
        className={`text-xl md:text-2xl text-primary font-semibold transition-all duration-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
        }`}
      >
        {roles[currentRoleIndex]}
      </span>
    </div>
  );
};

export default DynamicRoles;
