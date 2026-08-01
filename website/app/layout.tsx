import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abrar Ahmad — Full-Stack AI Engineer",
  description:
    "Full-stack AI/ML engineer building production-grade machine learning systems across healthcare, autonomous vehicles, fitness technology, and industrial robotics.",
  openGraph: {
    title: "Abrar Ahmad — Full-Stack AI Engineer",
    description:
      "Production-grade ML systems: LLM fine-tuning, computer vision, multimodal AI, and scalable cloud/edge deployments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${mono.variable} bg-ink font-sans text-slate-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
