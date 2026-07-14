/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          warm: "#EAA899",   // Rosa salmão suave
          light: "#F7D6CD",  // Rosa pastel
          gold: "#D4AF37",   // Dourado Kintsugi
          "gold-light": "#F0DC82",
        },
        feedback: {
          dor: "#A31D1D",       // Vermelho fechado (urgência/dor)
          "dor-dark": "#7A1212",
        },
        neutral: {
          bg: "#FDF8F6",    // Off-white rosado
          text: "#3D3A3A",  // Grafite escuro
          muted: "#756F6F", // Cinza intermediário
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-cta": "pulse-cta 2.8s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2.8s ease-in-out infinite",
        "pulse-play": "pulse-play 2.5s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease forwards",
        "slide-up": "slide-up 0.5s cubic-bezier(0.4,0,0.2,1) forwards",
        wave: "wave 1.2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-cta": {
          "0%, 100%": { boxShadow: "0 8px 40px rgba(163,29,29,0.35)" },
          "50%": { boxShadow: "0 8px 56px rgba(163,29,29,0.55)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(212,175,55,0.35)" },
          "50%": { boxShadow: "0 8px 40px rgba(212,175,55,0.55)" },
        },
        "pulse-play": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 16px rgba(163,29,29,0.15), 0 0 0 32px rgba(163,29,29,0.07)",
          },
          "50%": {
            boxShadow:
              "0 0 0 22px rgba(163,29,29,0.18), 0 0 0 40px rgba(163,29,29,0.05)",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)", opacity: "0.7" },
          "50%": { transform: "scaleY(0.4)", opacity: "1" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(61,58,58,0.08)",
        card: "0 8px 32px rgba(61,58,58,0.12)",
        cta: "0 8px 40px rgba(163,29,29,0.35)",
        gold: "0 4px 20px rgba(212,175,55,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
