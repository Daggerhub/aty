/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-900': '#191920',
        'base-800': '#131319',
        'base-400': '#27292D',
        'base-300': '#35373B'
      },
      textColor: {
        'base' : '#6B6C70',
        'primary': '#C5C7CA',
      }
    },
  },
  plugins: [],
}