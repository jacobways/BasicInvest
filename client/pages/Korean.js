const ExRateChart = require('../chart/exChangeRate.js')

module.exports = function createKoreanHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '한국 지표'

  const span = document.createElement('span')
  span.textContent = '아래 지표들은 주가를 예측하는 선행지표가 아닌 현재 증시를 진단하는 지표입니다.'

  const sectionExport = document.createElement('section')
  const h3Export = document.createElement('h3')
  h3Export.textContent = '수출지표'
  sectionExport.append(h3Export)

  const sectionExRate = document.createElement('section')
  const h3ExRate = document.createElement('h3')
  h3ExRate.textContent = '환율'
  const canvasExRate = document.createElement('canvas')
  canvasExRate.setAttribute('id', 'ExRateChart')
  canvasExRate.setAttribute('width', '200')
  canvasExRate.setAttribute('height', '200')
  ExRateChart(canvasExRate)
  sectionExRate.append(h3ExRate, canvasExRate)

  const sectionKospi = document.createElement('section')
  const h3Kospi = document.createElement('h3')
  h3Kospi.textContent = '코스피'
  sectionKospi.append(h3Kospi)

  const sectionKosdaq = document.createElement('section')
  const h3Kosdaq = document.createElement('h3')
  h3Kosdaq.textContent = '코스닥'
  sectionKosdaq.append(h3Kosdaq)

  const sectionFKospiTrend = document.createElement('section')
  const h3FKospiTrend = document.createElement('h3')
  h3FKospiTrend.textContent = '외국인 매매동향 (코스피)'
  sectionFKospiTrend.append(h3FKospiTrend)

  const sectionFKosdaqTrend = document.createElement('section')
  const h3FKosdaqTrend = document.createElement('h3')
  h3FKosdaqTrend.textContent = '외국인 매매동향 (코스닥)'
  sectionFKosdaqTrend.append(h3FKosdaqTrend)

  const sectionCreditBal = document.createElement('section')
  const h3CreditBal = document.createElement('h3')
  h3CreditBal.textContent = '신용잔고'
  sectionCreditBal.append(h3CreditBal)  

  main.append(
    h1,
    document.createElement('br'),
    span,
    document.createElement('br'),
    sectionExport,
    document.createElement('br'),
    sectionExRate,
    document.createElement('br'),
    sectionKospi,
    document.createElement('br'),
    sectionKosdaq,
    document.createElement('br'),
    sectionFKospiTrend,
    document.createElement('br'),
    sectionFKosdaqTrend,
    document.createElement('br'),
    sectionCreditBal,
  )

  return main;
}

