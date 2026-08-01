import type { ReactElement } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { standards } from "@/data/portfolio";

const icons: Record<string, ReactElement> = {
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  layers: <path d="M12 2l10 6-10 6L2 8l10-6zM2 14l10 6 10-6" />,
  zap: <path d="M13 2L3 14h7l-1 8 11-13h-7l0-7z" />,
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
};

export default function Standards() {
  return (
    <section id="standards" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Engineering Discipline"
          title="Deployment & Scalability Standards"
          subtitle="Every system is built to rigorous enterprise standards for reliability, scale, and performance."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {standards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="glass group flex h-full gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-glow-violet">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {icons[s.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
