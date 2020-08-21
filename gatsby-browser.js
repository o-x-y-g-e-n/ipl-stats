/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('typeface-roboto')

exports.onRouteUpdateDelayed = () => {
  document.getElementById('___loader').style.display = 'flex'
}
exports.onRouteUpdate = () => {
  document.getElementById('___loader').style.display = 'none'
}
