/** @type {import('tailwindcss').Config} */

export default {
  content: ["./apps/frontend/**/*.{html,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        grey: "#888",
        background: "#242424",
        button: "#1a1a1a",
        selected: "#2590eb",
      },
      spacing: {
        // amend as required
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      dropShadow: {
        "logo-selected": "0 0 2em #646cffaa",
        "logo-unselected": "0 0 0 #646cffaa",
      },
    },
  },
  plugins: [],
}
