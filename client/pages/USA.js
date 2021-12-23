module.exports = function createUSAHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '미국 지표'

  const span = document.createElement('span')
  span.textContent = '아래 지표들은 주로 미래를 예측하는 선행지표입니다.'

  const sectionEmploy = document.createElement('section')
  const h3Employ = document.createElement('h3')
  h3Employ.textContent = '고용 지표'
  sectionEmploy.append(h3Employ)

  const sectionPMI = document.createElement('section')
  const h3PMI = document.createElement('h3')
  h3PMI.textContent = 'PMI Index'
  sectionPMI.append(h3PMI)

  const sectionSpread = document.createElement('section')
  const h3Spread = document.createElement('h3')
  h3Spread.textContent = '장단기 금리차'
  sectionSpread.append(h3Spread)

  const sectionConsumerSales = document.createElement('section')
  const h3ConsumerSales = document.createElement('h3')
  h3ConsumerSales.textContent = '소비판매지수'
  sectionConsumerSales.append(h3ConsumerSales)

  const sectionDOW = document.createElement('section')
  const h3DOW = document.createElement('h3')
  h3DOW.textContent = '다우 지수'
  sectionDOW.append(h3DOW)

  const sectionNasdaq = document.createElement('section')
  const h3Nasdaq = document.createElement('h3')
  h3Nasdaq.textContent = '나스닥 지수'
  sectionNasdaq.append(h3Nasdaq)

  const sectionVix = document.createElement('section')
  const h3Vix = document.createElement('h3')
  h3Vix.textContent = 'vix 지수'
  sectionVix.append(h3Vix)  

  main.append(
    h1,
    document.createElement('br'),
    span,
    document.createElement('br'),
    sectionEmploy,
    document.createElement('br'),
    sectionPMI,
    document.createElement('br'),
    sectionSpread,
    document.createElement('br'),
    sectionConsumerSales,
    document.createElement('br'),
    sectionDOW,
    document.createElement('br'),
    sectionNasdaq,
    document.createElement('br'),
    sectionVix,
  )

  return main;
}

