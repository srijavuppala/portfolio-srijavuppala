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
  ExternalLinkIcon,
  UsersIcon,
  GraduationCapIcon,
  AwardIcon,
  BookOpenIcon
} from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const experiences = [
  {
    company: "UT Dallas — Hardware Research Lab",
    role: "Hardware Research Assistant",
    period: "Nov 2025 - Present",
    description: "Investigating machine-learning algorithms on real-time operating systems to identify energy-efficient hardware architectures for edge-computing applications.",
    achievements: [
      "Built Python/TensorFlow/scikit-learn framework to predict transistor sizing and power-delay tradeoffs for standard cell designs",
      "Applied reinforcement learning to optimize layout configurations for area and power efficiency",
      "Reduced manual design iterations by 35% via ML-driven design space exploration",
      "Conducted comparative analysis of CMOS circuit topologies with ML-driven performance prediction models",
      "Integrated AI methodologies into traditional ASIC design flows using static code analysis"
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "RTOS", "ASIC", "Reinforcement Learning", "CMOS"],
    icon: <BrainCircuitIcon className="w-5 h-5" />,
    iconBackground: "#FF6B35",
    links: [
      { title: "Hardware Research", url: "#" }
    ]
  },
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
    iconBackground: "#0D5C63",
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
    iconBackground: "#0D5C63",
    links: [
      { title: "Network Tools", url: "#" },
      { title: "Testing Framework", url: "#" }
    ]
  }
];

const education = [
  {
    university: "University of Texas at Dallas",
    degree: "Master in Computer Engineering",
    period: "August 2024 - May 2026",
    location: "Dallas, Texas, USA",
    description: "Advanced coursework focused on cutting-edge technologies and research in computer engineering.",
    achievements: [
      "Specialized in Cloud Computing and Machine Learning",
      "Advanced research in Database Theory and Algorithms",
      "Graduate Teaching Assistant opportunities",
      "Active participation in technology research groups"
    ],
    coursework: ["Cloud Computing", "Machine Learning", "Database Theory", "Advanced Algorithms", "Operating Systems"],
    icon: <GraduationCapIcon className="w-5 h-5" />,
    iconBackground: "#FF6B35",
    links: [
      { title: "UTD Computer Engineering", url: "https://engineering.utdallas.edu/" }
    ]
  },
  {
    university: "Jawaharlal Nehru Technology University",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "August 2019 - June 2023",
    location: "Telangana, India",
    description: "Comprehensive foundation in engineering principles with strong emphasis on programming and system design.",
    achievements: [
      "First Class with Distinction",
      "Winner of Inter-University Programming Contest",
      "Lead Developer in multiple academic projects",
      "Published research in communication systems"
    ],
    coursework: ["C", "Java", "Python", "Data Structures", "DBMS", "Probability & Statistics", "Computer Networks", "Web Technologies", "Data Mining", "Software Engineering", "Operating Systems"],
    icon: <BookOpenIcon className="w-5 h-5" />,
    iconBackground: "#0D5C63",
    links: [
      { title: "JNTU Official Website", url: "https://jntuh.ac.in/" }
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
            <h2 className="font-display text-2xl font-medium tracking-tight">About</h2>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold">Srija Vuppala</span> — a full-stack engineer and AI/cloud specialist currently pursuing my <span className="text-primary font-semibold">Master's in Computer Engineering at UT Dallas</span> (graduating May 2026). I build systems that are fast, intelligent, and built to last.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At <span className="text-primary font-semibold">Optum (UnitedHealth Group)</span>, I developed a <span className="text-primary font-semibold">RAG-based AI chatbot</span> using Snowflake and Mistral LLM, built real-time monitoring pipelines, and automated cloud infrastructure at scale. Before that, at <span className="text-primary font-semibold">Ericsson</span>, I engineered network monitoring tools and CI/CD frameworks for telecom-grade software deployed on Docker and Kubernetes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a <span className="text-primary font-semibold">Microsoft Student Ambassador</span>, I led technical workshops and mentored peers in cloud and AI — a role that sharpened my belief that the best engineers are also good communicators.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My stack spans <span className="text-primary font-semibold">Python, Java, React, TypeScript, AWS, Docker, and Kubernetes</span>. I'm drawn to problems at the intersection of AI and infrastructure — where models need to actually run reliably in production.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="font-display text-2xl font-medium tracking-tight">Experience</h2>
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
                      <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-primary transition-colors">
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

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="font-display text-2xl font-medium tracking-tight">Education</h2>
          </div>
          
          <VerticalTimeline lineColor="var(--border)">
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
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
                date={edu.period}
                iconStyle={{ background: edu.iconBackground, color: '#fff' }}
                icon={edu.icon}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="group cursor-pointer">
                      <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-primary transition-colors">
                        {edu.university}
                      </h3>
                      <h4 className="text-lg font-medium mb-2">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <ChevronDownIcon className="w-4 h-4" />
                        <span>Hover for details</span>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  
                  <HoverCardContent className="w-96">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="hover:text-foreground transition-colors">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Learn More:</h5>
                        <div className="space-y-2">
                          {edu.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
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