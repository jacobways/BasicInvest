module.exports = function () {
  
  const div = document.createElement('div')
  div.classList.add('explainBox')

  const explain = document.createElement('div')
  explain.textContent = '미국 고용지표와 ISM 제조업 지수 모두 양호합니다.'
  explain.classList.add('explain')

  const opinion = document.createElement('div')
  opinion.textContent = `현재는 경제 회복기 또는 호황기입니다.`
  opinion.classList.add('explain')
  opinion.classList.add('opinion')

  div.append(explain, opinion)

  return div;
}