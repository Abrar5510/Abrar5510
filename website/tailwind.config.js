/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04070d",
        panel: "#0a0f1a",
        line: "rgba(148, 163, 184, 0.12)",
        neon: "#22d3ee",
        mint: "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-slow": "pulse 5s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        blink: "blink 1.1s step-end infinite",
        aurora: "aurora 16s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        aurora: {
          "0%": { transform: "translate(-12%, -8%) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(10%, 6%) rotate(20deg) scale(1.15)" },
          "100%": { transform: "translate(-6%, 10%) rotate(-12deg) scale(1.05)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        "glow-violet": "0 0 40px rgba(167, 139, 250, 0.18)",
      },
    },
  },
  plugins: [],
};
