"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ABOUT } from "@/lib/data";

const PILLARS = [
  {
    icon: Code2,
    title: "Full Stack Foundations",
    text: "Python, JavaScript and Next.js as the backbone for shipping real products end to end.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Focus",
    text: "LLMs, RAG pipelines, LangChain and prompt engineering applied to practical problems.",
  },
  {
    icon: Cpu,
    title: "Cloud-Native Mindset",
    text: "Docker, Supabase and Vercel for building and deploying scalable AI applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <SectionHeading eyebrow="// About Me" title="The engineer behind the code" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-base leading-relaxed text-ink-300 sm:text-lg"
        >
          {ABOUT}
        </motion.p>

        <div className="grid gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel group flex items-start gap-4 p-5 transition-colors hover:border-cyan-glow/30"
            >
              <div className="rounded-xl border border-white/10 bg-cyan-glow/10 p-2.5 text-cyan-glow transition-transform group-hover:scale-110">
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink-100">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
