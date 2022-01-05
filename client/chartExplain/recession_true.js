module.exports = function () {
  
  const div = document.createElement('div')
  div.classList.add('explainBox')

  const explain = document.createElement('div')
  explain.textContent = '미국 고용지표 또는 ISM 제조업 지수에서 이상 징후가 발견됩니다.'
  explain.classList.add('explain')

  const trend = document.createElement('div')
  trend.textContent = `최근에 하락 신호가 발생했습니다.`
  trend.classList.add('explain')
  trend.classList.add('trend')

  const caution = document.createElement('div')
  caution.textContent = `(장단기 금리차가 0이하 또는 PMI 지수가 50이하)`
  caution.classList.add('explain')
  caution.classList.add('trend')

  const opinion = document.createElement('div')
  opinion.textContent = `현재는 경기 하락에 대비하여 리스크 관리가 필요합니다.`
  opinion.classList.add('explain')
  opinion.classList.add('opinion')

  div.append(explain, trend, caution, opinion)

  return div;
}