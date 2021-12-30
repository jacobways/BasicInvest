const createSectionEle = require('../templates/chartSection')
const OilPriceChart = require('../chart/oilPrice')
const BDIChart = require('../chart/BDI')
const HotRolledChart = require('../chart/BDI')

module.exports = function createCommodityHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = 'commodity info'

  const span = document.createElement('span')
  span.textContent = '글로벌 상품 정보입니다'

  const sectionOil = createSectionEle('WTI 유가', 'ChartOilPrice', 'OilPriceChart', OilPriceChart)

  const sectionBDI = createSectionEle('BDI 지수', 'ChartBDI', 'BDIChart', BDIChart)

  const sectionHotRolled = createSectionEle('중국 열연', 'ChartHotRolledPrice', 'OilPriceChart', HotRolledChart)

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

