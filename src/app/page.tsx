import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BlogSection from "@/components/sections/Blog";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BlogSection posts={latestPosts} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

