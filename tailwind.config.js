/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1292ee',
        white: '#FFFFFF',
        black: '#000000'
      },
    },
  },
  plugins: [],
}