/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    letterSpacing: {
      wide: ".1em",
      wider: ".2em",
      widest: ".4em",
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "7rem",
      "9xl": "11rem",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
