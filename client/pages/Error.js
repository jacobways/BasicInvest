
module.exports = function () {

  const main = document.createElement('main')

  const div = document.createElement('div')
  div.textContent = '404 ERROR'
 
  main.append(
    div
  )
  return main;
}
