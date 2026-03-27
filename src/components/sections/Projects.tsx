"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-2 text-center"
        >
          # projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-center mb-3"
        >
          Featured <span className="gradient-text">Work</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
        >
          Production systems with measurable business impact — built to scale, designed to last.
        </motion.p>

        {/* Featured (first 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:glow-border transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-primary mb-1">Featured Project</div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    aria-label="GitHub"
                  >
                    <Link2 className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    aria-label="Live"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Impact metrics */}
              <div className="flex flex-wrap gap-2">
                {project.impact.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {metric}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects (2 more) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(2).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-5 flex flex-col gap-3 hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    aria-label="GitHub"
                  >
                    <Link2 className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    aria-label="Live"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
