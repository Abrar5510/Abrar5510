import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">intelligent</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-400">
            Whether it&apos;s fine-tuning foundation models, shipping computer
            vision to the edge, or architecting multi-agent platforms — I&apos;m
            ready to help take your AI systems to production.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-glow"
            >
              Connect on LinkedIn
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Explore My GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
