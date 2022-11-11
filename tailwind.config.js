/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      Amiri: ["Amiri", "sans-serif"],
      Estedad: ["Estedad", "sans-serif"],
      Vazirmatn: ["Vazirmatn", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}