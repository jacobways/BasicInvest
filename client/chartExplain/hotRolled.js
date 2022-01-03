module.exports = function () {
  
  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '철강 회사의 주가와 비례합니다.'

  div.append(explain)

  return div;
}