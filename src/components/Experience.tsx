import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import {
  MonitorIcon,
  BrainCircuitIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  BookOpenIcon,
  MapPinIcon,
} from 'lucide-react';

const ParticlesBg = lazy(() => import('./three/ParticlesBg'));

const experiences = [
  {
    company: "University of Texas at Dallas",
    role: "Systems Engineer",
    period: "Oct 2025 – Present",
    location: "Richardson, TX, USA",
    description: "Administering enterprise IT infrastructure supporting 25,000+ users across hybrid Red Hat Linux and Windows Server environments.",
    achievements: [
      "Administered Red Hat Linux and Windows Server environments supporting 25,000+ users, improving system reliability through automated patching cycles and standardized configuration management across hybrid infrastructure.",
      "Managed Microsoft 365 and enterprise email infrastructure, configuring Exchange Online, SPF/DKIM/DMARC, and mail flow rules to improve email deliverability, security compliance, and reduce spoofing risks across university domains.",
      "Deployed and scaled Zabbix monitoring across servers and network systems, enabling proactive alerting and reducing incident response time; integrated with InCommon to automate SSL/TLS certificate lifecycle management.",
      "Built Splunk dashboards and alerting pipelines for log aggregation and security event analysis, enabling faster anomaly detection and improving root-cause analysis for production incidents.",
      "Designed and evaluated AI-powered support agent (Comet AI) by building prompt workflows and testing across diverse user scenarios, improving first-touch resolution accuracy and reducing support escalations.",
    ],
    technologies: ["Red Hat Linux", "Windows Server", "Microsoft 365", "Exchange Online", "Zabbix", "Splunk", "SPF/DKIM/DMARC", "InCommon"],
    icon: <BrainCircuitIcon className="w-4 h-4" />,
  },
  {
    company: "Optum (UnitedHealth Group)",
    role: "AI & Cloud Engineer",
    period: "Feb 2024 – Jul 2024",
    description: "Led AI and cloud initiatives, developing innovative healthcare solutions using cutting-edge technologies.",
    achievements: [
      "Developed RAG Chatbot using Snowflake Cortex Search and Mistral LLM",
      "Built real-time monitoring pipelines for production healthcare systems",
      "Automated cloud infrastructure at scale using DevOps best practices",
    ],
    technologies: ["Python", "Snowflake", "Mistral LLM", "AWS", "Docker", "React"],
    icon: <BrainCircuitIcon className="w-4 h-4" />,
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "Feb 2023 – Dec 2023",
    description: "Developed and maintained critical telecommunications software for enterprise-grade network infrastructure.",
    achievements: [
      "Built scalable network monitoring tools for telecom-grade systems",
      "Engineered CI/CD frameworks deployed on Docker and Kubernetes",
      "Optimised system performance and implemented automated testing",
    ],
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
    icon: <MonitorIcon className="w-4 h-4" />,
  },
];

const education = [
  {
    university: "University of Texas at Dallas",
    degree: "Master of Science — Computer Engineering",
    period: "Aug 2024 – May 2026",
    location: "Dallas, Texas, USA",
    description: "Advanced coursework in Cloud Computing, Machine Learning, Database Theory, and Advanced Algorithms.",
    achievements: [
      "Specialising in Cloud Computing and Machine Learning",
      "Advanced research in Database Theory and Algorithms",
      "Active in technology research groups",
    ],
    coursework: ["Cloud Computing", "Machine Learning", "Database Theory", "Advanced Algorithms", "Operating Systems"],
    icon: <GraduationCapIcon className="w-4 h-4" />,
    link: { label: "UTD Engineering", url: "https://engineering.utdallas.edu/" },
  },
  {
    university: "Jawaharlal Nehru Technological University",
    degree: "B.Tech — Electronics & Communication Engineering",
    period: "Aug 2019 – Jun 2023",
    location: "Telangana, India",
    description: "Comprehensive foundation in engineering with strong emphasis on programming and system design.",
    achievements: [
      "First Class with Distinction",
      "Winner — Inter-University Programming Contest",
      "Lead Developer in multiple academic projects",
    ],
    coursework: ["C", "Java", "Python", "Data Structures", "DBMS", "Computer Networks", "Operating Systems"],
    icon: <BookOpenIcon className="w-4 h-4" />,
    link: { label: "JNTU Official Site", url: "https://jntuh.ac.in/" },
  },
];

interface TimelineCardProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  tags: string[];
  icon: React.ReactNode;
  link?: { label: string; url: string };
  isLast: boolean;
}

const TimelineCard = ({
  title,
  subtitle,
  period,
  location,
  description,
  achievements,
  tags,
  icon,
  link,
  isLast,
}: TimelineCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 z-10">
          {icon}
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Card */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
        <motion.div
          className="bg-background border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors duration-200"
          layout
        >
          <button
            className="w-full text-left p-5 md:p-6"
            onClick={() => setOpen((o) => !o)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-medium text-primary leading-snug">{title}</h3>
                <p className="font-sans text-sm text-foreground mt-0.5">{subtitle}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                  <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">{period}</span>
                  {location && (
                    <span className="flex items-center gap-1 text-xs font-sans text-muted-foreground">
                      <MapPinIcon className="w-3 h-3" />
                      {location}
                    </span>
                  )}
                </div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mt-3">{description}</p>
              </div>
              <ChevronDownIcon
                className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </div>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border pt-4 space-y-4">
                  <div>
                    <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">Highlights</p>
                    <ul className="space-y-2">
                      {achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm font-sans text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                      {tags.length > 0 && tags[0].length < 25 ? 'Technologies' : 'Coursework'}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-sans font-normal rounded-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {link && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLinkIcon className="w-3 h-3" />
                      {link.label}
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Subtle 3D floating dots background */}
      <Suspense fallback={null}>
        <ParticlesBg count={35} opacity={0.22} speed={0.006} />
      </Suspense>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* About */}
        <div className="mb-16">
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              Cloud-native engineer at <span className="text-foreground font-medium">Optum</span> and{' '}
              <span className="text-foreground font-medium">Ericsson</span>. Pursuing a Master's in
              Computer Engineering at{' '}
              <span className="text-foreground font-medium">UT Dallas</span>. I build AI-driven systems,
              distributed infrastructure, and experiences that hold up under pressure.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="font-display text-2xl font-medium tracking-tight">Experience</h2>
          </div>
          {experiences.map((exp, i) => (
            <TimelineCard
              key={i}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              description={exp.description}
              achievements={exp.achievements}
              tags={exp.technologies}
              icon={exp.icon}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="font-display text-2xl font-medium tracking-tight">Education</h2>
          </div>
          {education.map((edu, i) => (
            <TimelineCard
              key={i}
              title={edu.university}
              subtitle={edu.degree}
              period={edu.period}
              location={edu.location}
              description={edu.description}
              achievements={edu.achievements}
              tags={edu.coursework}
              icon={edu.icon}
              link={edu.link}
              isLast={i === education.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
