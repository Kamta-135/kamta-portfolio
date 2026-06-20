"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <SectionHeading eyebrow="// Milestones" title="Achievements & highlights" />

      <div className="grid gap-5 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-panel flex items-start gap-4 p-6 transition-colors hover:border-amber-glow/40"
          >
            <div className="rounded-xl border border-white/10 bg-amber-glow/10 p-2.5 text-amber-glow">
              <Trophy size={18} />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-ink-100 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
