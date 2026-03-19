import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const links = [
  {
    icon: Mail,
    label: 'srijavuppala11@gmail.com',
    href: 'mailto:srijavuppala11@gmail.com',
    sublabel: 'Personal',
  },
  {
    icon: Mail,
    label: 'sxv240014@utdallas.edu',
    href: 'mailto:sxv240014@utdallas.edu',
    sublabel: 'Academic',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/srija-vuppala',
    href: 'https://www.linkedin.com/in/srija-vuppala/',
    sublabel: 'LinkedIn',
  },
  {
    icon: Github,
    label: 'github.com/srijavuppala',
    href: 'https://github.com/srijavuppala',
    sublabel: 'GitHub',
  },
];

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.querySelector(`[name="${name}"]`) as HTMLInputElement | HTMLTextAreaElement)?.value ?? '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a0edfb30-c271-4f6d-addd-9c41af87c863',
          name: `${getValue('firstName')} ${getValue('lastName')}`,
          email: getValue('email'),
          message: getValue('message'),
          subject: `Portfolio contact from ${getValue('firstName')} ${getValue('lastName')}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      {/* Left — dark panel */}
      <div className="bg-foreground text-background px-8 md:px-12 py-24 flex flex-col justify-between">
        <div>
          <p className="text-xs font-sans tracking-widest uppercase text-background/50 mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
            Let's build<br />something<br /><em className="italic font-light text-primary">together.</em>
          </h2>
          <p className="text-sm font-sans text-background/60 leading-relaxed max-w-sm mb-10">
            Open to full-time roles, research collaborations, and interesting engineering problems.
            If you have something worth building, I'd like to hear about it.
          </p>

          <div className="flex flex-col gap-3">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 text-sm font-sans text-background/60 hover:text-background transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="block group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <span className="text-xs text-background/30">{link.sublabel}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <p className="text-xs font-sans text-background/30 tracking-wide mt-16">
          © 2025 Srija Vuppala · Dallas, TX
        </p>
      </div>

      {/* Right — form */}
      <div className="bg-background px-8 md:px-12 py-24 flex flex-col justify-center">
        <p className="section-label mb-2">New Message</p>
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground mb-8">
          Send a direct note
        </h3>

        {status === 'sent' ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm font-sans text-foreground/80 leading-relaxed">
              Message received — I'll get back to you soon.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="self-start font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans tracking-widest uppercase text-muted-foreground">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Alex"
                  required
                  className="font-sans text-sm bg-secondary border border-border rounded-sm px-3.5 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Rivera"
                  required
                  className="font-sans text-sm bg-secondary border border-border rounded-sm px-3.5 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                placeholder="alex@company.com"
                required
                className="font-sans text-sm bg-secondary border border-border rounded-sm px-3.5 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about the role or project..."
                required
                rows={5}
                className="font-sans text-sm bg-secondary border border-border rounded-sm px-3.5 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-xs font-sans text-red-500">
                Something went wrong. Please try emailing directly at srijavuppala11@gmail.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-sans text-xs tracking-widest uppercase text-primary-foreground bg-foreground rounded-sm py-3.5 px-6 hover:bg-primary transition-colors duration-200 hover:-translate-y-px transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
