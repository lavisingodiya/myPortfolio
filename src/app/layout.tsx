import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavi Singodiya – Senior Cloud Engineer",
  description:
    "Senior Cloud Engineer specializing in AWS, Kubernetes, Terraform, and DevOps. Building resilient, scalable infrastructure for modern applications.",
  keywords: ["Cloud Engineer", "AWS", "Kubernetes", "Terraform", "DevOps", "Infrastructure"],
  openGraph: {
    title: "Lavi Singodiya – Senior Cloud Engineer",
    description:
      "Building resilient, scalable infrastructure that powers modern applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} dark h-full antialiased selection:bg-primary/20 selection:text-primary font-body`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
