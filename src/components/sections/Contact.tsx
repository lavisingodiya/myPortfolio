"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Link2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: Link2 },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: ExternalLink },
  { label: "Twitter / X", href: personalInfo.twitter, icon: ExternalLink },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background relative border-t border-border">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="section-container flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-4 uppercase tracking-widest"
        >
          // Secure_Channel
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-sans font-bold mb-10 text-foreground tracking-tight"
        >
          Establish <span className="text-primary italic font-light tracking-normal">Connection</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-16 max-w-2xl leading-relaxed"
        >
          My inbox is always open for robust architectural challenges, cross-functional collaboration, or direct technical discussions.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-4 bg-primary text-primary-foreground px-8 py-5 text-lg font-bold font-sans hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 group mb-16"
        >
          <Mail className="w-6 h-6" />
          <span>{personalInfo.email}</span>
          <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6 border-t border-border pt-12 w-full justify-center"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
