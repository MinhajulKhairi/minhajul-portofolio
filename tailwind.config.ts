import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          bg: "#0A0D10",
          surface: "#12161B",
          surfaceAlt: "#171C22",
          border: "#262C33",
          borderSoft: "#1D2229",
        },
        paper: {
          DEFAULT: "#E7EAEC",
          muted: "#8B95A0",
          dim: "#5C6570",
        },
        signal: {
          amber: "#E8A33D",
          amberDim: "#8A6428",
          cyan: "#4FB8B0",
          cyanDim: "#2E6E69",
          green: "#5FBF77",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "clamp-hero": "clamp(2.75rem, 6vw, 5.5rem)",
        "clamp-h2": "clamp(1.75rem, 3.2vw, 2.75rem)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1D2229 1px, transparent 1px), linear-gradient(to bottom, #1D2229 1px, transparent 1px)",
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
