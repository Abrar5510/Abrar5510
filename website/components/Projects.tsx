"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, tiers, type Project } from "@/data/portfolio";

const accentStyles: Record<Project["accent"], { ring: string; text: string; bg: string }> = {
  cyan: { ring: "hover:border-cyan-400/40", text: "text-cyan-300", bg: "from-cyan-500/10" },
  violet: { ring: "hover:border-violet-400/40", text: "text-violet-300", bg: "from-violet-500/10" },
  mint: { ring: "hover:border-emerald-400/40", text: "text-emerald-300", bg: "from-emerald-500/10" },
  amber: { ring: "hover:border-amber-400/40", text: "text-amber-300", bg: "from-amber-500/10" },
  rose: { ring: "hover:border-rose-400/40", text: "text-rose-300", bg: "from-rose-500/10" },
  blue: { ring: "hover:border-sky-400/40", text: "text-sky-300", bg: "from-sky-500/10" },
};

function ProjectCard({ project, expanded, onToggle }: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}) {
  const accent = accentStyles[project.accent];
  const hasDetails = Boolean(project.problem || project.highlights.length);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45 }}
      className={`spotlight-card glass group flex flex-col rounded-2xl p-6 transition-colors duration-500 ${accent.ring}`}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-2xl bg-gradient-to-b ${accent.bg} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      <div className="mb-4 flex items-start justify-between gap-3">
        <span className={`font-mono text-sm ${accent.text}`}>{project.index}</span>
        <div className="flex flex-wrap justify-end gap-2">
          {project.badges.map((b) => (
            <span
              key={b}
              className={`rounded-full border border-line bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${accent.text}`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.solution}</p>

      <AnimatePresence initial={false}>
        {expanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {project.problem && (
              <div className="mt-4 rounded-xl border border-line bg-white/[0.02] p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Problem
                </p>
                <p className="mt-1.5 text-sm text-slate-400">{project.problem}</p>
              </div>
            )}
            {project.highlights.length > 0 && (
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h.label} className="flex gap-3 text-sm">
                    <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accent.text}`} />
                    <span className="text-slate-400">
                      <strong className="font-semibold text-slate-200">{h.label}:</strong>{" "}
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {hasDetails && (
        <button
          onClick={onToggle}
          className={`mt-4 self-start font-mono text-xs ${accent.text} transition-opacity hover:opacity-70`}
        >
          {expanded ? "− collapse details" : "+ expand details"}
        </button>
      )}

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-slate-500">
              {s}
              <span className="mx-1.5 text-slate-700">/</span>
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeTier, setActiveTier] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visible =
    activeTier === "All" ? projects : projects.filter((p) => p.tier === activeTier);

  return (
    <section id="projects" className="relative border-t border-line bg-panel/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Featured Work"
          title="Production Systems"
          subtitle="14 flagship systems spanning LLM fine-tuning, safety-critical robotics, healthcare AI, and autonomous multi-agent platforms."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {tiers.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTier(t)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                activeTier === t
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-glow"
                  : "border border-line text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                expanded={expandedId === p.id}
                onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
