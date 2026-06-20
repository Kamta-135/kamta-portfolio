"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-2xl md:mb-16"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
