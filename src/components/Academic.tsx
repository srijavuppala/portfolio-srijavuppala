import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCapIcon,
  BookOpenIcon,
  AwardIcon,
  ChevronDownIcon,
  ExternalLinkIcon
} from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const academics = [
  {
    university: "University of Texas at Dallas",
    degree: "Master of Science in Computer Science",
    period: "2022 - 2024",
    location: "Dallas, TX",
    description: "Advanced coursework in AI/ML, Cloud Computing, and Software Engineering with focus on distributed systems and data science.",
    achievements: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Research in Cloud Computing and Distributed Systems",
      "Graduate Teaching Assistant for Database Systems",
      "Dean's List for Academic Excellence"
    ],
    coursework: ["Machine Learning", "Cloud Computing", "Advanced Algorithms", "Database Systems", "Software Engineering"],
    icon: <GraduationCapIcon className="w-5 h-5" />,
    iconBackground: "#FF6B35",
    links: [
      { title: "UTD Computer Science", url: "https://cs.utdallas.edu/" }
    ]
  },
  {
    university: "Jawaharlal Nehru University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2018 - 2022",
    location: "New Delhi, India",
    description: "Strong foundation in computer science fundamentals with emphasis on software development and system design.",
    achievements: [
      "First Class with Distinction (CGPA: 8.5/10)",
      "President of Computer Science Society",
      "Winner of Inter-University Programming Contest",
      "Published research paper on Machine Learning applications"
    ],
    coursework: ["Data Structures", "Operating Systems", "Computer Networks", "Web Technologies", "Software Engineering"],
    icon: <BookOpenIcon className="w-5 h-5" />,
    iconBackground: "#4A90E2",
    links: [
      { title: "JNU Official Website", url: "https://www.jnu.ac.in/" }
    ]
  }
];

const Academic = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <h2 className="text-3xl font-bold">Academic Background</h2>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey through prestigious institutions, building a strong foundation in computer science 
            and advancing expertise in cutting-edge technologies.
          </p>
        </div>

        {/* Academic Timeline */}
        <div>
          <VerticalTimeline lineColor="var(--border)">
            {academics.map((edu, index) => (
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
                      <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
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
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <AwardIcon className="w-4 h-4" />
                          Key Achievements:
                        </h5>
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

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <GraduationCapIcon className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Advanced Degree</h3>
            <p className="text-sm text-muted-foreground">Master's in Computer Science with AI/ML specialization</p>
          </div>
          
          <div className="text-center p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <AwardIcon className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Academic Excellence</h3>
            <p className="text-sm text-muted-foreground">Consistently recognized for outstanding academic performance</p>
          </div>
          
          <div className="text-center p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <BookOpenIcon className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Research Experience</h3>
            <p className="text-sm text-muted-foreground">Published research in ML applications and distributed systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;