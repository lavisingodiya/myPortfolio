"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import TagBadge from "@/components/blog/TagBadge";

interface BlogIndexClientProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogIndexClient({ posts, allTags }: BlogIndexClientProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search.trim() === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesTag =
        activeTag === null || post.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Page header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
        >
          // Knowledge_Base
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border pb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-sans font-bold text-foreground tracking-tight"
          >
            Technical <br />
            <span className="text-primary italic font-light tracking-normal">
              Writings
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm max-w-sm"
          >
            // Architecture deep-dives, DevOps patterns, and operational lessons
            from production cloud environments.
          </motion.p>
        </div>

        {/* Search + Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 space-y-6"
        >
          {/* Search input */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              id="blog-search"
              className="w-full bg-card border border-border pl-11 pr-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all"
            />
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              // Filter:
            </span>
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors border-l-2 ${
                activeTag === null
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-secondary border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors border-l-2 ${
                  activeTag === tag
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-secondary border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs font-mono text-muted-foreground mb-8 tracking-widest"
        >
          // Showing {filtered.length} of {posts.length} articles
        </motion.p>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <BlogCard key={post.slug} post={post} index={idx} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 border border-border"
          >
            <p className="font-mono text-muted-foreground text-sm">
              // No articles found for &quot;{search}&quot;
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
