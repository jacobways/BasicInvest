const createSectionEle = require('../templates/chartSection')
const createSectionMonthlyEle = require('../templates/chartSectionMonthly')
const KoreanExportChart = require ('../chart/KoreanExport.js')
const ExRateChart = require('../chart/exChangeRate.js')
const KospiChart = require('../chart/Kospi')
const KosdaqChart = require('../chart/Kosdaq')
const KospiChart_foreignTrade = require('../chart/foreignTradeKospi')
const KosdaqChart_foreignTrade = require('../chart/foreignTradeKosdaq')
const CreditBalanceChart = require('../chart/creditBalance')

module.exports = function createKoreanHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '한국 지표'

  const span = document.createElement('span')
  span.textContent = '아래 지표들은 주가를 예측하는 선행지표가 아닌 현재 증시를 진단하는 지표입니다.'

  const sectionKospi = createSectionEle('코스피', 'ChartKospi', 'KospiChart', KospiChart)

  const sectionKosdaq = createSectionEle('코스닥', 'ChartKosdaq', 'KosdaqChart', KosdaqChart)

  const sectionKoreanExport = createSectionMonthlyEle('한국 수출지표', 'ChartKoreanExport', 'KoreanExportChart', KoreanExportChart)

  const sectionKospi_ForeignTrade = createSectionEle('외국인 매매동향 (코스피)', 'ChartKospiTrade', 'KospiTradeChart', KospiChart_foreignTrade)

  const sectionKosdaq_ForeignTrade = createSectionEle('외국인 보유 비중 (코스닥)', 'ChartKosdaqShare', 'KosdaqShareChart', KosdaqChart_foreignTrade)

  const sectionExRate = createSectionEle('환율', 'ChartExRate', 'ExRateChart', ExRateChart)
  
  const sectionCreditBalance = createSectionMonthlyEle('국내 신용잔고', 'ChartCreditBalance', 'CreditBalanceChart', CreditBalanceChart)
  
  main.append(
    h1,
    document.createElement('br'),
    span,
    document.createElement('br'),
    sectionKospi,
    document.createElement('br'),
    sectionKosdaq,
    document.createElement('br'),
    sectionKoreanExport,
    document.createElement('br'),
    sectionKospi_ForeignTrade,
    document.createElement('br'),
    sectionKosdaq_ForeignTrade,
    document.createElement('br'),
    sectionExRate,
    document.createElement('br'),
    sectionCreditBalance,
  )

  return main;
}

