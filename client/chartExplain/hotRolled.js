module.exports = function () {
  
  const div = document.createElement('div')
  div.classList.add('explainBox')
  
  const explain = document.createElement('div')
  explain.textContent = '철강 회사의 주가와 비례하는 경향이 있습니다.'
  explain.classList.add('explain')

  div.append(explain)

  return div;
}