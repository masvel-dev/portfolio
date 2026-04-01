/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      backgroundImage: {
        "hero-light": "url('/hero-bg-light.jpg')",
        "hero-dark": "url('/hero-bg-dark.jpg')",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(1.02) translateY(-2px)" },
        },
        float: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-4px) rotate(0.3deg)" },
          "50%": { transform: "translateY(2px) rotate(-0.3deg)" },
          "75%": { transform: "translateY(-3px) rotate(0.2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
      animation: { breathe: "breathe 4s ease-in-out infinite", },
    },
  },
  plugins: [],
}