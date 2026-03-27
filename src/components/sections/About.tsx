"use client";

import { motion } from "framer-motion";
import { personalInfo, stats, certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-sans font-bold mb-8 text-foreground tracking-tight leading-tight"
            >
              Architecting <br className="hidden md:block" />
              <span className="text-primary italic font-light tracking-normal">Resilience</span>
            </motion.h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg border-l-2 border-primary/30 pl-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I am a Senior Cloud Engineer with over <span className="text-foreground font-medium">2+ years of enterprise experience</span> designing and operating mission-critical infrastructure across AWS and Microsoft Azure. I specialize in Kubernetes orchestration, GitOps delivery, and cloud security hardening.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                My work centers on the intersection of engineering excellence and operational scale: building production DC-DR architectures for banking workloads achieving near-zero downtime, and automating complex deployment pipelines to reduce cycle times by over 60%.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-4 flex items-center gap-4 text-sm font-mono text-primary uppercase tracking-widest"
              >
                <span>Status: Available / Ready</span>
                <span className="w-8 h-[1px] bg-primary/50" />
                <span>Loc: {personalInfo.location}</span>
              </motion.div>
            </div>
          </div>

          {/* Right: Stats + Grid */}
          <div className="lg:col-span-5 space-y-8 pt-4 lg:pt-0">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-px bg-border p-px"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 flex flex-col justify-center hover:bg-secondary transition-colors duration-300"
                >
                  <div className="text-4xl font-sans font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Accolades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-secondary p-8 border-l border-primary"
            >
              <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">// Credentials</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-foreground font-bold mb-1">{education[0].degree}</h4>
                  <div className="text-sm text-muted-foreground flex justify-between">
                    <span>{education[0].institution}</span>
                    <span className="font-mono text-primary">GPA: {education[0].gpa}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-border" />

                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="flex flex-col gap-1">
                      <span className="text-sm text-foreground">{cert.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
