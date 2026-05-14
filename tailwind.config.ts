import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        grove: {
          bg: "#0A0E0B",
          bg2: "#12191A",
          bg3: "#1A2324",
          border: "rgba(255,255,255,0.08)",
          text: "#E8EFE8",
          muted: "#94A89A",
          primary: "#5FB88A",
          primarySoft: "rgba(95,184,138,0.12)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
