"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-card relative z-0">
      <div className="section-container max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
        >
          // Career_Timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-sans font-bold text-foreground mb-20 tracking-tight"
        >
          Operational <span className="text-primary italic font-light tracking-normal">History</span>
        </motion.h2>

        {/* Brutalist Timeline */}
        <div className="space-y-16">
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Vertical line indicator mobile only */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 md:hidden" />
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Left side: Meta info */}
                <div className="md:w-1/3 shrink-0">
                  <div className="sticky top-24 pt-2">
                    <span className="text-xl font-sans font-bold text-foreground block mb-2">{job.company}</span>
                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 border-l-2 border-primary inline-block mb-4">
                      {job.period}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Right side: Role details */}
                <div className="md:w-2/3 bg-background p-8 border border-border hover:border-primary/30 transition-colors duration-500">
                  <h3 className="text-2xl font-bold font-sans text-foreground mb-8 text-primary">
                    {job.role}
                  </h3>

                  <ul className="space-y-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-4 text-base font-body text-muted-foreground items-start">
                        <span className="text-primary font-mono text-sm mt-1 shrink-0">{"->"}</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
