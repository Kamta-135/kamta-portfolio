/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05060f",
          100: "#0a0d1e",
          200: "#0d1128",
          300: "#10152f",
        },
        cyan: {
          glow: "#22d3ee",
        },
        violet: {
          glow: "#a78bfa",
        },
        emerald: {
          glow: "#34d399",
        },
        amber: {
          glow: "#f5b942",
        },
        ink: {
          100: "#eef2fb",
          300: "#c7cee0",
          500: "#8d96b3",
          700: "#5b6485",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.12), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glowCyan: "0 0 40px -5px rgba(34,211,238,0.45)",
        glowViolet: "0 0 40px -5px rgba(167,139,250,0.45)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", filter: "blur(28px)" },
          "50%": { opacity: "0.9", filter: "blur(36px)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
