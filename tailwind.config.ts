import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background scale — deep pure black → charcoal
        void: "#000000",
        carbon: "#070709",
        charcoal: "#0E0F12",
        steel: "#16181D",
        // Brand navy (extracted from Logo-01.jpg → #15598C family)
        navy: {
          DEFAULT: "#15598C",
          light: "#2B7DB8",
          deep: "#0B2E6B",
          glow: "#3FA9F5",
        },
        // Illumination accents — the four spectrum signals
        signal: {
          amber: "#FFB732",
          blue: "#4E78F0",
          green: "#18C9A6",
          red: "#FF4D4D",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "var(--font-grotesk)", "sans-serif"],
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        thai: ["var(--font-prompt)", "var(--font-grotesk)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.85" },
          "50%": { opacity: "0.4" },
          "55%": { opacity: "0.9" },
        },
        gridpan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        sweep: "sweep 4s linear infinite",
        flicker: "flicker 6s ease-in-out infinite",
        gridpan: "gridpan 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
