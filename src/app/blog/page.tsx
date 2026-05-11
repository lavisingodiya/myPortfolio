import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog – Lavi Singodiya",
  description:
    "Technical articles on AWS, Kubernetes, Terraform, GitOps, and enterprise cloud infrastructure — written by Cloud/DevOps Engineer Lavi Singodiya.",
  openGraph: {
    title: "Blog – Lavi Singodiya",
    description:
      "Architecture deep-dives, DevOps patterns, and operational lessons from production cloud environments.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Collect unique tags across all posts, sorted alphabetically
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags))
  ).sort();

  return <BlogIndexClient posts={posts} allTags={allTags} />;
}
