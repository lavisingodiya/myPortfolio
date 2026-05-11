"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Star } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import TagBadge from "./TagBadge";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="h-full flex flex-col bg-background hover:bg-card transition-colors duration-500 border border-border/50 hover:border-primary/30 p-8">
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {formattedDate}
            </span>
            <div className="flex items-center gap-4">
              {post.featured && (
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              )}
              <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Label */}
          <div className="text-xs font-mono text-primary mb-3 tracking-widest uppercase">
            {post.featured ? "// Featured_Article" : "// Tech_Blog"}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold font-sans text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-4">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-base text-muted-foreground font-body leading-relaxed flex-1 mb-6">
            {post.description}
          </p>

          {/* Tags + CTA */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6 pt-6 border-t border-border">
              {post.tags.slice(0, 4).map((tag) => (
                <TagBadge key={tag} tag={tag} size="sm" />
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read Article
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
