"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, ReactElement> = {
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  brain: (
    <path d="M12 3a4 4 0 00-4 4 4 4 0 00-3 6.5A4 4 0 008 20a4 4 0 004-3 4 4 0 004 3 4 4 0 003-6.5A4 4 0 0016 7a4 4 0 00-4-4zM12 7v10" />
  ),
  eye: (
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  ),
  chip: (
    <path d="M7 7h10v10H7zM4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" />
  ),
  db: (
    <path d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  ),
  cloud: (
    <path d="M17.5 19a4.5 4.5 0 100-9 6 6 0 00-11.6 1.6A4 4 0 007 19h10.5z" />
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Technical Arsenal"
          title="Skills Matrix"
          subtitle="Full ML lifecycle coverage — from hardware-optimized fine-tuning to high-throughput production deployment."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="spotlight-card glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-glow"
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 transition-transform duration-500 group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {icons[group.icon]}
                  </svg>
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.025 }}
                    className="chip"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
