const SolidCss = require('solid-css').default
const Css = new SolidCss([
  { name: 'black', hex: '#000' },
  { name: 'white', hex: '#fff' },
])

Css.minify('./src', './src/solid.css')
