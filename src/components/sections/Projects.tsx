"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Link2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background relative z-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-border pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-sans font-bold text-foreground tracking-tight"
          >
            Architectural <br />
            <span className="text-primary italic font-light tracking-normal">Deployments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm max-w-sm"
          >
            // Production systems with measurable business impact — built to scale, designed for high availability.
          </motion.p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 lg:p-12 bg-background hover:bg-card transition-colors duration-500 border border-border/50 hover:border-primary/30"
            >
              {/* Left Column: Details */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">
                    {project.featured ? "// Featured_Architecture" : "// Standard_Deployment"}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed font-body">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1.5 text-xs font-mono text-foreground bg-secondary border-l-2 border-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Impact & Links */}
              <div className="w-full lg:w-72 shrink-0 flex flex-col justify-between gap-8 bg-secondary p-8 border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">// Impact_Metrics</h4>
                  <ul className="space-y-3">
                    {project.impact.map((metric) => (
                      <li
                        key={metric}
                        className="flex items-start gap-3 text-sm font-mono text-primary"
                      >
                        <TrendingUp className="w-4 h-4 mt-0.5 shrink-0" />
                        <span className="leading-tight">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] bg-background px-4 py-2 border border-border"
                  >
                    <Link2 className="w-4 h-4" />
                    Source
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] bg-background px-4 py-2 border border-border"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
