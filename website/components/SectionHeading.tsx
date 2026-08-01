import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
