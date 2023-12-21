/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1292ee',
        white: '#FFFFFF',
        black: '#000000',
        paragraph: '#030f27',
        paragraphlight: '#8c89a2',
        footerbg: '#030e22',
        footercontent: '#748494',
        
      },
    },
    screens: {
      'xs': '379px',
      ...defaultTheme.screens,

    },
  },
  plugins: [],
}