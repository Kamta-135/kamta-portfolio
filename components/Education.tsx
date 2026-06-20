"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <SectionHeading eyebrow="// Education" title="Academic foundation" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-white/10 bg-violet-glow/10 p-3 text-violet-glow">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-ink-100 sm:text-xl">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-500">{EDUCATION.college}</p>
            <p className="text-sm text-ink-700">{EDUCATION.university}</p>
          </div>
        </div>

        <div className="flex gap-6 sm:flex-col sm:items-end sm:gap-2">
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-700">
              Graduation Year
            </p>
            <p className="font-display text-lg font-bold text-cyan-glow">
              {EDUCATION.year}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-700">
              CGPA
            </p>
            <p className="font-display text-lg font-bold text-emerald-glow">
              {EDUCATION.cgpa}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
