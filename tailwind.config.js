
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
    themes: ["light", "dark",
          {
            "dracula": {
              "base-100": "#fff",
              "lightred": "#254574",
              "primary": "#f5deb3",
            },
          }],
    darkTheme: "dracula",
    base: true,
    styled: true,
  },
  theme: {
    extend: {

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
