"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { SITE } from "@/lib/data";

export default function Hero() {
  const typed = useTypingEffect({
    words: SITE.roles,
    typingSpeed: 65,
    deletingSpeed: 35,
    pauseDuration: 1600,
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 text-center sm:px-10"
    >
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_10%,transparent_70%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-emerald-glow"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-glow" />
        </span>
        Open to Software Engineering Roles
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-100 sm:text-6xl md:text-7xl"
      >
        Hi, I&apos;m <span className="gradient-text">{SITE.name}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22 }}
        className="relative z-10 mt-5 flex h-8 items-center justify-center font-mono text-base text-ink-300 sm:text-lg md:text-xl"
      >
        <span aria-live="polite">{typed}</span>
        <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-cyan-glow" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="relative z-10 mt-6 max-w-2xl text-balance text-sm text-ink-500 sm:text-base"
      >
        Building real-world AI-powered applications with LLMs, RAG &
        LangChain — based in {SITE.location}.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42 }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a href={SITE.resumePath} download className="btn-ghost">
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 mt-10 flex items-center gap-5"
      >
        {[
          { href: SITE.github, icon: Github, label: "GitHub" },
          { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
          { href: `mailto:${SITE.email}`, icon: Mail, label: "Email" },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-ink-300 transition-all hover:-translate-y-1 hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 rounded-full border border-white/10 p-2 text-ink-500 hover:text-cyan-glow"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
