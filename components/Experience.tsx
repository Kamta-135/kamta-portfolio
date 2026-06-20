"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <SectionHeading eyebrow="// Experience" title="Where I've applied what I learn" />

      <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-6">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full border border-cyan-glow/40 bg-void-200 text-cyan-glow shadow-glowCyan sm:-left-[3.05rem]">
              <Briefcase size={15} />
            </span>

            <div className="glass-panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-ink-100">
                  {exp.title}
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-emerald-glow">
                  {exp.duration}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink-500"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
