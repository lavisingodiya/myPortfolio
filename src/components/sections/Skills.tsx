"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Code2 } from "lucide-react";
import { skillCategories, otherSkills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5" />,
  "git-branch": <GitBranch className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-2 text-center"
        >
          # skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-center mb-3"
        >
          Technical <span className="gradient-text">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
        >
          A battle-tested toolkit built for enterprise-grade cloud environments and automated delivery.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:glow-border transition-all duration-300 group flex flex-col h-full"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {category.icon && iconMap[category.icon] ? iconMap[category.icon] : <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills list with progress */}
              <div className="space-y-4 flex-1">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-mono truncate mr-2">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.06,
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, oklch(0.75 0.18 200), oklch(0.65 0.15 280))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other toolset tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Additional Technologies & Compliance</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-secondary/50 border border-border rounded-md hover:text-foreground hover:border-primary/40 transition-colors"
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
