/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'white': '#edf2fb',
      'black': '#1e1b18',
      'sb': {
        100: '#00072d',
        200: '#001c55',
        300: '#0a2472',
        400: '#0e6ba8',
        500: '#a6e1fa',
        600: '#c1d3fe',
        700: '#ccdbfd',
        800: '#d7e3fc',
        900: '#e2eafc',
      },
    },
    extend: {},
  },
  plugins: [],
}
