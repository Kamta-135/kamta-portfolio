"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/lib/data";

const GROUPS = ["Core", "AI/ML", "Framework", "Cloud", "DevOps"];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <SectionHeading
        eyebrow="// Tech Stack"
        title="Skills & tools I build with"
        description="A practical toolkit spanning core programming, generative AI, and cloud-native deployment."
      />

      <div className="flex flex-wrap gap-3">
        {GROUPS.map((group) =>
          SKILLS.filter((s) => s.group === group).map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass-panel group relative overflow-hidden px-5 py-3 transition-colors hover:border-cyan-glow/40"
            >
              <span className="absolute -right-1 -top-1 font-mono text-[10px] uppercase tracking-wider text-ink-700">
                {skill.group}
              </span>
              <span className="font-display text-sm font-medium text-ink-100 transition-colors group-hover:text-cyan-glow">
                {skill.name}
              </span>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
