"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "booting neural_core...",
  "loading model weights...",
  "compiling experience.tsx...",
  "ready.",
];

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setLoading(false);
      return;
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 260);

    const doneTimer = setTimeout(() => setLoading(false), 1250);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-3 bg-void"
          >
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-cyan-glow border-r-violet-glow" />
            </div>
            <p className="font-mono text-xs tracking-wider text-emerald-glow">
              {BOOT_LINES[lineIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
