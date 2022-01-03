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
  h1.textContent = 'commodity info'

  const span = document.createElement('span')
  span.textContent = '글로벌 상품 정보입니다'

  const sectionOil = await createSectionExplainEle('WTI 유가', 'ChartOilPrice', 'OilPriceChart', OilPriceChart, OilPriceExplain)

  const sectionBDI = await createSectionExplainEle('BDI 지수', 'ChartBDI', 'BDIChart', BDIChart, BDIExplain)

  const sectionHotRolled = await createSectionExplainEle('중국 열연', 'ChartHotRolledPrice', 'OilPriceChart', HotRolledChart, HotRolledExplain)

  main.append(
    h1,
    document.createElement('br'),
    span,
    document.createElement('br'),
    sectionOil,
    document.createElement('br'),
    sectionBDI,
    document.createElement('br'),
    sectionHotRolled,
  )

  return main;
}

