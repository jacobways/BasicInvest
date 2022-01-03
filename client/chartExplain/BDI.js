module.exports = function () {
  
  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '인플레이션 및 벌크 해운사의 주가와 비례합니다.'

  div.append(explain)

  return div;
}