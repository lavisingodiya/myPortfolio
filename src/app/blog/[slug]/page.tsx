import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { useMDXComponents } from "@/components/blog/MdxComponents";
import TagBadge from "@/components/blog/TagBadge";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Pre-generate all post routes at build time */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/** Per-post Open Graph metadata */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) return {};

  const post = getPostBySlug(slug);
  return {
    title: `${post.title} – Lavi Singodiya`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const slugs = getAllSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  const mdxComponents = useMDXComponents({});

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Hero / header band */}
      <div className="section-padding bg-card border-b border-border pt-28 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to articles
          </Link>

          {/* Label */}
          <p className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">
            {post.featured ? "// Featured_Article" : "// Tech_Blog"}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground tracking-tight leading-tight mb-8">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {post.readingTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} size="md" />
            ))}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-primary via-primary/30 to-transparent mb-12" />

          {/* MDX content */}
          <div className="prose-content">{content}</div>

          {/* Bottom divider + back link */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors bg-card px-5 py-2.5 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.1)]"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Articles
            </Link>

            <p className="text-xs font-mono text-muted-foreground">
              // Written by{" "}
              <span className="text-primary">Lavi Singodiya</span> ·{" "}
              {formattedDate}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
