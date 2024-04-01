/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'gray-dark': '#5e5e5e',
      'gray': '#E5E5E5',
      'gray-light': '#a19fad',
      'yellow': '#FCA311',
      'navy': '#14213D',
      'black': '#333333',
      'purple': '#491577',
      'purple-light': '#f0eefc'
    },
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

