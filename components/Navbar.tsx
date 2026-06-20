"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-void-200/80 py-2.5 shadow-glass backdrop-blur-xl"
            : "border-white/5 bg-transparent py-3"
        } mx-4 sm:mx-6 lg:mx-auto`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-display text-sm font-bold tracking-wide text-ink-100"
        >
          <span className="gradient-text">KPR</span>
          <span className="text-ink-500">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-mono text-xs uppercase tracking-wider text-ink-300 transition-colors hover:text-cyan-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={SITE.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-100 transition-all hover:border-cyan-glow/60 hover:text-cyan-glow"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full border border-white/10 p-2 text-ink-100 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-panel mx-4 mt-3 flex flex-col gap-1 p-4 lg:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-lg px-3 py-2.5 font-mono text-sm uppercase tracking-wider text-ink-300 transition-colors hover:bg-white/5 hover:text-cyan-glow"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.resumePath}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow px-4 py-2.5 font-display text-sm font-semibold text-void"
            >
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
