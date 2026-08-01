import { ticker } from "@/data/portfolio";

export default function Ticker() {
  const row = [...ticker, ...ticker];
  return (
    <div className="relative overflow-hidden border-b border-line py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-10 font-mono text-sm text-slate-500"
          >
            {t}
            <span className="text-cyan-500/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
