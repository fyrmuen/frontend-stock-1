import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        grove: {
          bg: "var(--bg)",
          bg2: "var(--bg2)",
          bg3: "var(--bg3)",
          bg4: "var(--bg4)",
          border: "var(--border)",
          border2: "var(--border2)",
          text: "var(--text)",
          muted: "var(--muted)",
          muted2: "var(--muted2)",
          primary: "var(--grove)",
          primary2: "var(--grove2)",
          gold: "var(--gold)",
          amber: "var(--amber)",
          red: "var(--red)",
          blue: "var(--blue)",
          green: "var(--green)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".3" }
        }
      },
      animation: {
        fadeUp: "fadeUp .3s ease",
        blink: "blink 2s infinite"
      },
      borderRadius: {
        grove: "8px",
        "grove-2": "12px",
        "grove-3": "16px"
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
