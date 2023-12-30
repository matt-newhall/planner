/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    './**/*.{html,ts,tsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cobeHeavy: ['CobeHeavy', 'sans-serif'],
        cobeSemiBold: ['CobeSembiBold', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        ...colors,
        'light-hover': '#61dafbaa',
        'dark-hover': '#646cffaa',
        'grey': '#888',
        'background': '#242424',
        'default': '#646cff',
      },
      spacing: {
        xxs: '2px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        '2xl': '400px',
      },
    },
  },
  plugins: [],
}
