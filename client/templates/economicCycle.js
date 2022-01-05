module.exports = function (chartName, divChartId, canvasChartId, chartModule, chartExplain) {

  // section 생성
  const section = document.createElement('section')
  section.setAttribute('id', 'economy')

  // h3 : 차트 제목
  const h3 = document.createElement('h3')  
  h3.textContent = `${chartName}`

  // chart canvas를 감싸기 위한 div 제작
  const divChart = document.createElement('div')
  divChart.setAttribute('id', `${divChartId}`)
  divChart.classList.add('chartBox')

  // chart를 표시할 canvas 제작
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', `${canvasChartId}`)
  divChart.append(canvas)
  // 차트 생성
  chartModule(canvas)

  let explain = chartExplain()

  section.append(h3, divChart)
  section.append(explain)

  return section
}