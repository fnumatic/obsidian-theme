module.exports = {
  purge: {
    preserveHtmlElements: false,
    enabled: true,
    layers: ['components','utilities','base' ],
    content: ['./dummy/*'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {},
  },
  variants: {
  },
  plugins: [
  ],
}
