"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="section-padding bg-card relative z-0">
      <div className="section-container">
        {/* Section header — identical pattern to Experience section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
        >
          // Knowledge_Base
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-border pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-sans font-bold text-foreground tracking-tight"
          >
            Technical <br />
            <span className="text-primary italic font-light tracking-normal">
              Writings
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm max-w-sm"
          >
            // Battle-tested patterns, architecture deep-dives, and operational
            lessons from production cloud environments.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} index={idx} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-end"
        >
          <Link
            href="/blog"
            className="group flex items-center gap-3 text-sm font-mono text-foreground hover:text-primary transition-colors bg-background px-6 py-3 border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] duration-300"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
