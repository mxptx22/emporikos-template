/** @type {import('tailwindcss').Config} */

const getPalette = require('tailwindcss-palette-generator')

const palette = getPalette([
  {
    color: '#F577A1',
    name: 'primary',
  },
  {
    color: '#E096AE',
    name: 'secondary',
  },
  {
    color: '#FA896E',
    name: 'accent',
  },
  {
    color: '#4e4e4e',
    name: 'neutral',
  },
])

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Asap', 'Saira', 'Assistant', 'sans-serif'],
      serif: ['Bitter', 'serif'],
      sansax: ['Sarabun', 'Bellota', 'monospace'],
      handwritten: ['La Belle Aurore', 'serif'],
    },
    extend: {
      colors: {
        ...palette,
        base: '#F8F8F8',
      },
    },
  },
  plugins: [],
}
