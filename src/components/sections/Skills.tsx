"use client";

import { motion } from "framer-motion";
import { skillCategories, otherSkills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-sans font-bold text-foreground tracking-tight"
          >
            Technical <br />
            <span className="text-primary italic font-light tracking-normal">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm max-w-sm"
          >
            // A battle-tested toolkit built for enterprise-grade cloud environments and automated delivery pipelines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-500"
            >
              <h3 className="font-sans font-bold text-xl text-foreground mb-8 pb-4 border-b border-border group-hover:border-primary/30 transition-colors">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 font-mono">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    {/* Linear neon line indicator */}
                    <div className="h-0.5 bg-background overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.06,
                        }}
                        className="h-full bg-primary shadow-[0_0_10px_#00e5ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Node Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card p-8 border-l border-primary"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            // Ancillary_Protocols & Compliance
          </p>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-mono text-foreground bg-secondary border-l-2 border-primary hover:bg-background transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
