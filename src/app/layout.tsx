import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
