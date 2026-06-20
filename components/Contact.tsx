"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/data";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: `+91 ${SITE.phone}`, href: `tel:+91${SITE.phone}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <SectionHeading
        eyebrow="// Get In Touch"
        title="Let's build something intelligent together"
        description="Open to fresher Software Engineer, Python Developer and AI/GenAI Engineer opportunities. Reach out — I reply fast."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.label}
              className="glass-panel flex items-center gap-4 p-5"
            >
              <div className="rounded-xl border border-white/10 bg-cyan-glow/10 p-2.5 text-cyan-glow">
                <item.icon size={18} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-700">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-ink-100 hover:text-cyan-glow break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-ink-100">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all hover:border-cyan-glow/40"
            >
              <Github className="mx-auto mb-1.5 text-ink-300" size={20} />
              <span className="font-mono text-xs text-ink-500">GitHub</span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all hover:border-cyan-glow/40"
            >
              <Linkedin className="mx-auto mb-1.5 text-ink-300" size={20} />
              <span className="font-mono text-xs text-ink-500">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          action={`mailto:${SITE.email}`}
          method="post"
          encType="text/plain"
          className="glass-panel space-y-4 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-cyan-glow/50 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-cyan-glow/50 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about the opportunity or project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-cyan-glow/50 focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message <Send size={15} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
