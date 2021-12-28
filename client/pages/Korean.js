const createSectionEle = require('../function/chartSection')
const createSectionMonthlyEle = require('../function/chartSectionMonthly')
const ExRateChart = require('../chart/exChangeRate.js')
const KospiChart = require('../chart/Kospi')
const KosdaqChart = require('../chart/Kosdaq')
const KospiChart_foreignTrade = require('../chart/foreignTradeKospi')
const KospiChart_foreignShare = require('../chart/foreignShareKospi')
const KosdaqChart_foreignTrade = require('../chart/foreignTradeKosdaq')
const KosdaqChart_foreignShare = require('../chart/foreignShareKosdaq')
const CreditBalanceChart = require('../chart/creditBalance')


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

  const sectionExRate = createSectionEle('환율', 'ChartExRate', 'ExRateChart', ExRateChart)
  
  const sectionKospi = createSectionEle('코스피', 'ChartKospi', 'KospiChart', KospiChart)

  const sectionKosdaq = createSectionEle('코스닥', 'ChartKosdaq', 'KosdaqChart', KosdaqChart)

  const sectionKospi_ForeignTrade = createSectionEle('외국인 매매동향 (코스피)', 'ChartKospiTrade', 'KospiTradeChart', KospiChart_foreignTrade)

  const sectionKospi_ForeignShare = createSectionEle('외국인 보유 비중 (코스피)', 'ChartKospiShare', 'KospiShareChart', KospiChart_foreignShare)

  const sectionKosdaq_ForeignShare = createSectionEle('외국인 매매동향 (코스닥)', 'ChartKosdaqTrade', 'KosdaqTradeChart', KosdaqChart_foreignTrade)

  const sectionKosdaq_ForeignTrade = createSectionEle('외국인 보유 비중 (코스닥)', 'ChartKosdaqShare', 'KosdaqShareChart', KosdaqChart_foreignShare)

  const sectionCreditBalance = createSectionMonthlyEle('국내 신용잔고', 'ChartCreditBalance', 'CreditBalanceChart', CreditBalanceChart)
  // const sectionCreditBal = document.createElement('section')
  // const h3CreditBal = document.createElement('h3')
  // h3CreditBal.textContent = '신용잔고'
  // sectionCreditBal.append(h3CreditBal)

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
    sectionKospi_ForeignTrade,
    document.createElement('br'),
    sectionKospi_ForeignShare,
    document.createElement('br'),
    sectionKosdaq_ForeignShare,
    document.createElement('br'),
    sectionKosdaq_ForeignTrade,
    document.createElement('br'),
    sectionCreditBalance,
  )

  return main;
}

