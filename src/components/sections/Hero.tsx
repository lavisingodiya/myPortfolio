"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link2, ExternalLink, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const techBadges = ["AWS", "Kubernetes", "Terraform", "Docker", "Python", "Go"];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div
        className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-primary) 0%, transparent 60%)",
        }}
      />

      {/* Asymmetrical Content layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Heavy Typography */}
        <div className="flex-1 text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 glass-card text-xs font-mono uppercase tracking-widest text-primary border-l-2 border-l-primary">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
              System Online
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight leading-[0.9] font-sans text-foreground mb-6"
          >
            {personalInfo.name.split(" ")[0]}
            <br />
            <span className="text-muted-foreground">{personalInfo.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-mono bg-primary/10 inline-block px-4 py-2 border border-primary/20">
              {personalInfo.role}
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed border-l border-border pl-6"
          >
            {personalInfo.tagline}
          </motion.p>
        </div>

        {/* Right Side: Floating Interactive Terminal/Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="w-full lg:w-[450px] shrink-0"
        >
          <div className="glass-card p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
            {/* Top Bar overlay */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-transparent" />
            
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6 border-b border-border pb-4">
              // Control_Panel
            </h3>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="/Lavi_Singodiya_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Lavi_Singodiya_Resume.pdf"
                className="flex items-center justify-between w-full px-6 py-4 bg-primary text-primary-foreground font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 group/btn"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <span>Download_Resume.pdf</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={scrollToProjects}
                className="flex items-center justify-between w-full px-6 py-4 bg-transparent border border-border text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-mono text-sm">Initialize_Projects()</span>
              </button>
            </div>

            {/* Tech Tags */}
            <div className="space-y-3">
              <span className="text-xs text-muted-foreground font-mono">active_modules:</span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[10px] uppercase font-mono bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
