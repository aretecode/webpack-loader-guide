const cssTemplate = require('./index.scss')

// Handlebars Loader returns a precompiled template as a function
const rawCss = cssTemplate({
  featureFlag: true
})

console.log(rawCss)
