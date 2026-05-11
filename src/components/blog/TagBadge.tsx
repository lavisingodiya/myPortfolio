"use client";

interface TagBadgeProps {
  tag: string;
  size?: "sm" | "md";
}

export default function TagBadge({ tag, size = "sm" }: TagBadgeProps) {
  return (
    <span
      className={`font-mono text-primary bg-primary/10 border-l-2 border-primary transition-colors hover:bg-primary/20 ${
        size === "sm"
          ? "px-2.5 py-1 text-xs"
          : "px-3 py-1.5 text-sm"
      }`}
    >
      {tag}
    </span>
  );
}
