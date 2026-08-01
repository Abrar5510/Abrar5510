import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · Full-Stack AI Engineer
        </p>
        <div className="flex gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
