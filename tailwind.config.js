
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
  theme: {

    theme: {
      extend: {
          colors: {
              transparent: 'transparent',
              current: 'currentColor',
              black: colors.black,
              white: colors.white,
              emerald: colors.emerald,
              indigo: colors.indigo,
              yellow: colors.yellow,
              stone: colors.stone,
          },
      },
  },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}
