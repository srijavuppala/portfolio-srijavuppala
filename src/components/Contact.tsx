
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Email Me</h3>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
              onClick={() => window.open('mailto:srijavuppala11@gmail.com')}
            >
              <Mail className="h-4 w-4" />
              srijavuppala11@gmail.com
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
              onClick={() => window.open('mailto:sxv240014@utdallas.edu')}
            >
              <Mail className="h-4 w-4" />
              sxv240014@utdallas.edu
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
              onClick={() => window.open('https://www.linkedin.com/in/srija-vuppala/')}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
              onClick={() => window.open('https://github.com/srijavuppala', '_blank')}
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
              onClick={() => window.location.reload()}
            >
              <Globe className="h-4 w-4" />
              Portfolio Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
