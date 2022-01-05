const createSectionEle = require('../templates/chartSection')
const createSectionExplainEle = require('../templates/chartSection_explain')

const OilPriceChart = require('../chart/oilPrice')
const OilPriceExplain = require('../chartExplain/oilPrice')

const BDIChart = require('../chart/BDI')
const BDIExplain = require('../chartExplain/BDI')

const HotRolledChart = require('../chart/BDI')
const HotRolledExplain = require('../chartExplain/hotRolled')

module.exports = async function createCommodityHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '인플레이션 및 특정 산업군의 주가를 진단할 수 있습니다.'

  const divSection = document.createElement('div')
  divSection.classList.add('divSection')

  const sectionOil = await createSectionExplainEle('WTI 유가', 'ChartOilPrice', 'OilPriceChart', OilPriceChart, OilPriceExplain)

  const sectionBDI = await createSectionExplainEle('BDI 지수', 'ChartBDI', 'BDIChart', BDIChart, BDIExplain)

  const sectionHotRolled = await createSectionExplainEle('중국 열연', 'ChartHotRolledPrice', 'OilPriceChart', HotRolledChart, HotRolledExplain)

  divSection.append(
    sectionOil,
    sectionBDI,
    sectionHotRolled
  )

  main.append(
    h1,
    document.createElement('br'),
    divSection
  )

  return main;
}

