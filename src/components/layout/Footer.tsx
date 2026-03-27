import { Cloud, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Cloud className="w-4 h-4 text-primary" />
          <span>{personalInfo.name}</span>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-primary fill-primary" /> using Next.js &amp; Tailwind · {year}
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#hero" className="hover:text-primary transition-colors">Top</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
