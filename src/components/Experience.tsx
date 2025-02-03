import React from 'react';

const experiences = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "AI & Cloud Engineer",
    period: "2022 - Present",
    description: "Leading AI and cloud initiatives, developing innovative healthcare solutions using cutting-edge technologies."
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "Previous",
    description: "Developed and maintained critical telecommunications software solutions."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative flex flex-col md:flex-row gap-4 p-6 rounded-lg border border-border bg-secondary/5 hover:bg-secondary/10 transition-colors"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                <p className="text-muted">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;