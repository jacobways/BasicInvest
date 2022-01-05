const createSectionEle = require('../templates/chartSection')
const createSectionExplainEle = require('../templates/chartSection_explain')
const createSectionMonthlyEle = require('../templates/chartSectionMonthly')
const createSectionMonthlyExplainEle = require('../templates/chartSectionMonthly_explain')
const KoreanExportChart = require ('../chart/KoreanExport.js')
const ExRateChart = require('../chart/exChangeRate.js')
const ExRateChartExplain = require('../chartExplain/koreanExport')
const KospiChart = require('../chart/Kospi')
const KosdaqChart = require('../chart/Kosdaq')
const KospiChart_foreignTrade = require('../chart/foreignTradeKospi')
const KospiChartExplain_foreignTrade = require('../chartExplain/foreignTradeKospi')
const KosdaqChart_foreignTrade = require('../chart/foreignTradeKosdaq')
const KosdaqChartExplain_foreignTrade = require('../chartExplain/foreignTradeKosdaq')
const CreditBalanceChart = require('../chart/creditBalance')
const CreditBalanceChartExplain = require('../chartExplain/creditBalance')

module.exports = async function createKoreanHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '주가를 예측하는 선행지표는 아니지만 현재 증시를 진단합니다.'

  const divSection = document.createElement('div')
  divSection.classList.add('divSection')

  const sectionKospi = createSectionEle('코스피', 'ChartKospi', 'KospiChart', KospiChart)

  const sectionKosdaq = createSectionEle('코스닥', 'ChartKosdaq', 'KosdaqChart', KosdaqChart)

  const sectionKoreanExport = await createSectionMonthlyExplainEle('한국 수출지표', 'ChartKoreanExport', 'KoreanExportChart', KoreanExportChart, ExRateChartExplain)

  const sectionExRate = createSectionEle('환율', 'ChartExRate', 'ExRateChart', ExRateChart)

  const sectionKospi_ForeignTrade = await createSectionExplainEle('외국인 매매동향 (코스피)', 'ChartKospiTrade', 'KospiTradeChart', KospiChart_foreignTrade, KospiChartExplain_foreignTrade)

  const sectionKosdaq_ForeignTrade = await createSectionExplainEle('외국인 보유 비중 (코스닥)', 'ChartKosdaqShare', 'KosdaqShareChart', KosdaqChart_foreignTrade, KosdaqChartExplain_foreignTrade)

  const sectionCreditBalance = await createSectionMonthlyExplainEle('국내 신용잔고', 'ChartCreditBalance', 'CreditBalanceChart', CreditBalanceChart, CreditBalanceChartExplain)
  
  divSection.append(
    sectionKospi, 
    sectionKosdaq, 
    sectionKoreanExport,
    sectionExRate,
    sectionKospi_ForeignTrade,
    sectionKosdaq_ForeignTrade,
    sectionCreditBalance
  )

  main.append(
    h1,
    document.createElement('br'),
    divSection
  )

  return main;
}

