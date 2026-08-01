"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#standards", label: "Standards" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-400 to-violet-400"
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white">
          <span className="text-cyan-400">&gt;</span> abrar.ahmad
          <span className="animate-blink text-cyan-400">_</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/40 px-4 py-1.5 text-sm text-cyan-300 transition-all hover:bg-cyan-400/10 hover:shadow-glow"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-line px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
