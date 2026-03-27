"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Copy, Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Link2,
    description: "Check out my repos",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: ExternalLink,
    description: "Connect professionally",
  },
  {
    label: "Twitter / X",
    href: personalInfo.twitter,
    icon: ExternalLink,
    description: "Follow my thoughts",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, oklch(0.75 0.18 200) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono text-primary mb-2"
          >
            # contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            Let&apos;s <span className="gradient-text">Build Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-10 leading-relaxed"
          >
            Whether you&apos;re looking for a Senior Cloud Engineer, want to collaborate on an
            open-source project, or just want to talk shop — my inbox is open.
          </motion.p>

          {/* Email block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="glass-card rounded-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap hover:glow-border transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-foreground text-sm sm:text-base">
                  {personalInfo.email}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs border-border hover:border-primary/50"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </Button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open Mail
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-4"
          >
            {socialLinks.map(({ label, href, icon: Icon, description }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 flex flex-col items-center gap-2 hover:glow-border hover:text-primary transition-all duration-300 group"
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground">{label}</span>
                <span className="text-xs text-muted-foreground hidden sm:block">{description}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
