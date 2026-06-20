import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-ink-100">
            <span className="gradient-text">{SITE.name}</span>
          </p>
          <p className="mt-1 font-mono text-xs text-ink-700">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-ink-300 transition-all hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            <Github size={16} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-ink-300 transition-all hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2.5 text-ink-300 transition-all hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-700">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
