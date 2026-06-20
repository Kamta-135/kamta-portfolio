"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <SectionHeading
        eyebrow="// Selected Work"
        title="Projects that put AI into production"
        description="From idea to deployed product — applications built with modern AI APIs and cloud infrastructure."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-panel group relative flex flex-col overflow-hidden p-7 transition-all duration-300 hover:border-cyan-glow/40 hover:shadow-glowCyan"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-glow/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-glow/25"
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-bold text-ink-100 sm:text-2xl">
                {project.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="rounded-full border border-white/10 p-2.5 text-ink-300 transition-all hover:border-cyan-glow/50 hover:text-cyan-glow"
                >
                  <Github size={16} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="rounded-full border border-white/10 p-2.5 text-ink-300 transition-all hover:border-cyan-glow/50 hover:text-cyan-glow"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
              {project.description}
            </p>

            <div className="relative z-10 mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-cyan-glow"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="relative z-10 mt-6 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-xs text-ink-300 sm:text-sm"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-glow" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
