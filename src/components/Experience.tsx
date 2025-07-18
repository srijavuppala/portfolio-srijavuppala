
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "@/components/ui/badge";
import { 
  BriefcaseIcon,
  MonitorIcon,
  CloudIcon,
  BrainCircuitIcon,
  ChevronDownIcon,
  ExternalLinkIcon
} from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const experiences = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "AI & Cloud Engineer",
    period: "Feb 2024 - July 2024",
    description: "Led AI and cloud initiatives, developing innovative healthcare solutions using cutting-edge technologies during this internship/contract period.",
    achievements: [
      "Developed RAG Chatbot using Snowflake and Mistral LLM",
      "Implemented real-time monitoring systems",
      "Led cloud infrastructure automation projects"
    ],
    technologies: ["AI/ML", "Cloud", "DevOps", "Python", "React"],
    icon: <BrainCircuitIcon className="w-5 h-5" />,
    iconBackground: "#6366F1",
    links: [
      { title: "RAG Chatbot", url: "#" },
      { title: "Monitoring System", url: "#" }
    ]
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "February 2023 - December 2023",
    description: "Developed and maintained critical telecommunications software solutions.",
    achievements: [
      "Built scalable network monitoring tools",
      "Optimized system performance",
      "Implemented automated testing frameworks"
    ],
    technologies: ["Java", "Spring", "Docker", "Kubernetes", "CI/CD"],
    icon: <MonitorIcon className="w-5 h-5" />,
    iconBackground: "#0F172A",
    links: [
      { title: "Network Tools", url: "#" },
      { title: "Testing Framework", url: "#" }
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="text-2xl font-bold">About</h2>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">full-stack developer</span> and <span className="text-primary font-semibold">DevOps engineer</span> with a knack for building innovative solutions that bridge technology and user needs. Proficient in <span className="text-primary font-semibold">Python, Java, React, Docker, and AWS</span>, I thrive on tackling complex challenges and driving impact through clean code and efficient systems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My recent experience at <span className="text-primary font-semibold">Optum</span> (Feb-July 2024) and previous role at <span className="text-primary font-semibold">Ericsson</span>, combined with leadership in technical workshops as a <span className="text-primary font-semibold">Microsoft Student Ambassador</span>, fuels my commitment to collaboration and continuous learning.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring <span className="text-primary font-semibold">AI/ML advancements</span> or contributing to <span className="text-primary font-semibold">open-source projects</span> to push the boundaries of tech.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
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
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--border)' }}
                date={exp.period}
                iconStyle={{ background: exp.iconBackground, color: '#fff' }}
                icon={exp.icon}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="group cursor-pointer">
                      <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <ChevronDownIcon className="w-4 h-4" />
                        <span>Hover for details</span>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  
                  <HoverCardContent className="w-80">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="hover:text-foreground transition-colors">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Related Projects:</h5>
                        <div className="space-y-2">
                          {exp.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLinkIcon className="w-4 h-4" />
                              {link.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
