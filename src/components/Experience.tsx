import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "@/components/ui/badge";
import { 
  BriefcaseIcon,
  MonitorIcon,
  CloudIcon,
  BrainCircuitIcon 
} from 'lucide-react';

const experiences = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "AI & Cloud Engineer",
    period: "2022 - Present",
    description: "Leading AI and cloud initiatives, developing innovative healthcare solutions using cutting-edge technologies.",
    achievements: [
      "Developed RAG Chatbot using Snowflake and Mistral LLM",
      "Implemented real-time monitoring systems",
      "Led cloud infrastructure automation projects"
    ],
    technologies: ["AI/ML", "Cloud", "DevOps", "Python", "React"],
    icon: <BrainCircuitIcon className="w-5 h-5" />,
    iconBackground: "#6366F1"
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "Previous",
    description: "Developed and maintained critical telecommunications software solutions.",
    achievements: [
      "Built scalable network monitoring tools",
      "Optimized system performance",
      "Implemented automated testing frameworks"
    ],
    technologies: ["Java", "Spring", "Docker", "Kubernetes", "CI/CD"],
    icon: <MonitorIcon className="w-5 h-5" />,
    iconBackground: "#0F172A"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <VerticalTimeline lineColor="var(--border)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--border)' }}
              date={exp.period}
              iconStyle={{ background: exp.iconBackground, color: '#fff' }}
              icon={exp.icon}
            >
              <div className="group">
                <h3 className="text-xl font-semibold text-primary mb-1">{exp.company}</h3>
                <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;