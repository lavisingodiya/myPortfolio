"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import { personalInfo, stats, certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-mono text-primary mb-3"
            >
              # about.me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6 text-foreground"
            >
              Turning Cloud Complexity{" "}
              <span className="gradient-text">Into Simplicity</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              I&apos;m a Senior Cloud Engineer with over{" "}
              <span className="text-foreground font-medium">2+ years of enterprise experience</span>{" "}
              designing and operating mission-critical infrastructure on AWS and Microsoft Azure. I specialize in
              Kubernetes orchestration, GitOps delivery, cloud security hardening, and cross-functional
              incident management.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I&apos;ve built production DC-DR architectures for banking workloads achieving near-zero downtime,
              reduced deployment cycles by ~60% through CI/CD automation, and continuously sustained 99.9% uptime
              SLA across high-traffic cloud environments while leading successful cloud cost-optimization strategies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>{personalInfo.location} · Available for challenging roles</span>
            </motion.div>
          </div>

          {/* Right: Stats + Certifications + Education */}
          <div className="space-y-6">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-5 hover:glow-border transition-all duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Certifications and Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Education</span>
                </div>
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col glass-card rounded-lg px-4 py-3 border-l-2 border-l-primary/50"
                  >
                    <div className="text-sm font-medium text-foreground">{edu.degree}</div>
                    <div className="text-xs text-muted-foreground">
                      {edu.institution} · GPA: {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Certifications & Awards</span>
                </div>
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between glass-card rounded-lg px-4 py-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-foreground leading-tight mb-1">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
