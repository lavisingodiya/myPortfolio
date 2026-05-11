import type { MDXComponents } from "mdx/types";

/**
 * Custom MDX renderer — maps standard markdown/HTML elements to
 * styled components that match the portfolio's design system.
 *
 * Design tokens used:
 *  - font-sans (Space Grotesk) for headings
 *  - font-mono (JetBrains Mono) for code
 *  - font-body (Manrope) for prose
 *  - primary (#00e5ff dark / #008b99 light) for accents
 *  - border-border for dividers
 *  - bg-secondary for code blocks
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground tracking-tight mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground tracking-tight mt-12 mb-5 pb-3 border-b border-border">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-sans font-semibold text-foreground mt-6 mb-3">
        {children}
      </h4>
    ),

    // Body text
    p: ({ children }) => (
      <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-5">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 pl-0 list-none">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-6 pl-0 list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="flex gap-3 text-base text-muted-foreground font-body leading-relaxed">
        <span className="text-primary font-mono text-sm mt-1 shrink-0">{"→"}</span>
        <span>{children}</span>
      </li>
    ),

    // Inline code
    code: ({ children, className }) => {
      // When inside a pre block, className will be set (e.g. "language-hcl")
      // Let the pre handler deal with block code; only style inline code here
      const isBlock = className?.startsWith("language-");
      if (isBlock) return <code className={className}>{children}</code>;
      return (
        <code className="font-mono text-sm text-primary bg-primary/10 px-1.5 py-0.5 border-l border-primary">
          {children}
        </code>
      );
    },

    // Code blocks
    pre: ({ children }) => (
      <pre className="bg-secondary border border-border border-l-2 border-l-primary overflow-x-auto rounded-none p-6 my-6 font-mono text-sm text-foreground leading-relaxed">
        {children}
      </pre>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary bg-primary/5 pl-6 py-4 my-6 text-muted-foreground italic font-body">
        {children}
      </blockquote>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-primary hover:text-primary/80 underline underline-offset-4 font-mono text-sm transition-colors"
      >
        {children}
      </a>
    ),

    // Horizontal rule
    hr: () => <hr className="border-border my-10" />,

    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse font-mono text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b-2 border-primary">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left py-3 px-4 text-xs text-primary uppercase tracking-widest font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="py-3 px-4 text-muted-foreground border-b border-border">
        {children}
      </td>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-card transition-colors">{children}</tr>
    ),

    // Strong / em
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-primary not-italic font-mono">{children}</em>
    ),

    ...components,
  };
}
