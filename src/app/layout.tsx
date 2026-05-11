import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import ClarityAnalytics from "@/components/analytics/Clarity";
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
  metadataBase: new URL("https://lavisingodiya.tech"),
  title: "Lavi Singodiya – Cloud/DevOps Engineer",
  description:
    "Cloud/DevOps Engineer specializing in AWS, Kubernetes, Terraform, and DevOps. Building resilient, scalable infrastructure for modern applications.",
  keywords: ["Cloud Engineer", "AWS", "Kubernetes", "Terraform", "DevOps", "Infrastructure"],
  openGraph: {
    title: "Lavi Singodiya – Cloud/DevOps Engineer",
    description:
      "Building resilient, scalable infrastructure that powers modern applications.",
    type: "website",
    url: "https://lavisingodiya.tech",
    siteName: "Lavi Singodiya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lavi Singodiya - Cloud/DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavi Singodiya – Cloud/DevOps Engineer",
    description: "Building resilient, scalable infrastructure that powers modern applications.",
    images: ["/og-image.png"],
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
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/20 selection:text-primary font-body`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClarityAnalytics />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
