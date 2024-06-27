import { add } from 'three/examples/jsm/nodes/Nodes.js'

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-6': {
      transform: 'rotateY(10deg)',
    },
    '.perspective-1000': {
      perspective: '1000px',
    },
  })
})

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
      }
    },
  },
  plugins: [rotateY],
}

