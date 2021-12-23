module.exports = function createCommodityHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = 'commodity info'

  const span = document.createElement('span')
  span.textContent = '글로벌 상품 정보입니다'

  const sectionOil = document.createElement('section')
  const h3Oil = document.createElement('h3')
  h3Oil.textContent = '고용 지표'
  sectionOil.append(h3Oil)

  const sectionBDI = document.createElement('section')
  const h3BDI = document.createElement('h3')
  h3BDI.textContent = 'BDI Index'
  sectionBDI.append(h3BDI)

  const sectionHotRolled = document.createElement('section')
  const h3HotRolled = document.createElement('h3')
  h3HotRolled.textContent = '중국 열연'
  sectionHotRolled.append(h3HotRolled)

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

