"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";
import { profile } from "@/data/portfolio";

function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx % phrases.length];
    const speed = deleting ? 35 : 70;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx, phrases]);

  return (
    <span className="font-mono text-cyan-300">
      {text}
      <span className="animate-blink">▍</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* aurora glow blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] animate-aurora rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] animate-aurora rounded-full bg-violet-500/15 blur-[120px] [animation-delay:-8s]" />
      </div>
      <NeuralBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-slate-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Open to opportunities · {profile.location}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-xl sm:text-2xl"
          >
            <Typewriter phrases={profile.typewriter} />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-glow"
            >
              View Projects
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-violet-400/50 hover:text-violet-300"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 hover:text-cyan-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
}
