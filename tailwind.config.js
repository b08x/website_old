
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  daisyui: {
    themes: ["coffee", "dark"],
    base: false,
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'current': 'currentColor',
        'black': colors.black,
        'white': colors.white,
        'pink': colors.pink,
        'emerald': colors.emerald,
        'indigo': colors.indigo,
        'yellow': colors.yellow,
        'stone': colors.stone,
        'lightred': '#ff6347',
        'wheat': '#f5deb3',
        'antiquewhite': '#faebd7',
        'cadetblue': '#5f9ea0',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}
