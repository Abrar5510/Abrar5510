"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { stats } from "@/data/portfolio";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduced]);

  return (
    <span ref={ref} className="text-gradient text-4xl font-bold sm:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="relative border-y border-line bg-panel/40 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
