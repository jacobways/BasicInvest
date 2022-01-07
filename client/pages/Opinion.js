const createSection = require('../templates/economicCycle')
const EconomyBoomChart = require('../chart/economyBoom')
const EconomyBoomChartExplain = require('../chartExplain/economyBoom')
const RecessionChart = require('../chart/recession')
const RecessionChartExplain = require('../chartExplain/recession')
const RecessionChartExplain_true = require('../chartExplain/recession_true')

module.exports = async function createOpinionElement () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '투자의견을 제공하는 페이지입니다.' 

  const articleIntro = document.createElement('article')
  articleIntro.textContent = '경기사이클에서 현재 위치 표시'
  const divRegister = document.createElement('div')
  divRegister.textContent = '장세(금융장세) 표시'
  articleIntro.appendChild(divRegister)

  const PMIRes = await fetch(`${process.env.API}/trend/pmi`);
  const PMIJson = await PMIRes.json();
  let PMILong = PMIJson.long;
  let PMIShort = PMIJson.short;
  let PMITrend;
  if (PMILong !== PMIShort) {
    PMITrend = '횡보'
  } else {
    PMITrend = PMILong
  }

  const EmployRes = await fetch(`${process.env.API}/trend/employmentrate`);
  const EmployJson = await EmployRes.json();
  let EmployLong = EmployJson.long
  let EmployShort = EmployJson.short
  let EmployTrend;
  if (EmployLong !== EmployShort) {
    EmployTrend = '횡보'
  } else {
    EmployTrend = EmployLong
  }

  const SpreadRes = await fetch(`${process.env.API}/trend/tenminustwo`);
  const SpreadJson = await SpreadRes.json();
  const SpreadTrend = SpreadJson.data

  let USAOpinion     // 투자의견, 밑에서 값 할당 예정
  let KoreanOpinion  // 투자의견, 밑에서 값 할당 예정

  let SpreadOpinion = SpreadJson.message  // 주식 카테고리 추천

  const zero = SpreadJson.zero  // 최근 장단기 금리차 0이하로 된 적이 있으면 true
  const crisis = PMIJson.crisis  // 최근 PMI 지수 50이하로 된 적이 있으면 true

  // 실업률 하락, PMI 상승 --> 미국 매수, 한국 매수
  // 실업률 하락, PMI 횡보 -> 미국 매수, 한국 중립
  // 실업률 하락, PMI 하락 -> 미국 매수, 한국 매도

  // 실업률 횡보, PMI 상승 -> 미국 매수, 한국 매수
  // 실업률 횡보, PMI 횡보 -> 마국 중립, 한국 중립
  // 실업률 횡보, PMI 하락 -> 미국 중립, 한국 매도 (but zero true면 미국도 매도)

  // 실업률 상승, PMI 상승 -> 미국 매수, 한국 매수
  // 실업률 상승, PMI 횡보 --> 미국 중립, 한국 중립 (but zero true면 미국 한국 매도)
  // 실업률 상승, PMI 하락 -> 마국 매도, 한국 매도 

  // 위 수도코드대로 조건에 따라 투자의견 값 할당
  if (EmployTrend === '하락') {
    if (PMITrend === '상승') {
      USAOpinion = '매수'
      KoreanOpinion = '매수'
    } else if (PMITrend === '횡보') {
      USAOpinion = '매수'
      KoreanOpinion = '신중'
    } else if (PMITrend === '하락') {
      USAOpinion = '매수'
      KoreanOpinion = '매도'
    }
  } else if (EmployTrend === '횡보') {
    if (PMITrend === '상승') {
      USAOpinion = '매수'
      KoreanOpinion = '매수'
    } else if (PMITrend === '횡보') {
      USAOpinion = '신중'
      KoreanOpinion = '신중'
    } else if (PMITrend === '하락') {
      zero || crisis ? USAOpinion = '매도' : USAOpinion = '신중'
      KoreanOpinion = '매도'
    }

  } else if (EmployTrend === '상승') {
    if (PMITrend === '상승') {
      USAOpinion = '매수'
      KoreanOpinion = '매수'
    } else if (PMITrend === '횡보') {
      zero || crisis ? USAOpinion = '매도' : USAOpinion = '신중'
      zero || crisis ? KoreanOpinion = '매도' : USAOpinion = '신중'
    } else if (PMITrend === '하락') {
      USAOpinion = '매도'
      KoreanOpinion = '매도'
    }
  }

  let economicCycle
  
  if (USAOpinion === '매도') {
    if (zero || crisis) {
      economicCycle = createSection('미국 경기사이클', 'ChartCycle', 'CycleChart', RecessionChart, RecessionChartExplain_true)
    } else {
      economicCycle = createSection('미국 경기사이클', 'ChartCycle', 'CycleChart', RecessionChart, RecessionChartExplain)
    }
  } else {
    economicCycle = createSection('미국 경기사이클', 'ChartCycle', 'CycleChart', EconomyBoomChart, EconomyBoomChartExplain)
  }
  
  const articleExplain = document.createElement('article')
  articleExplain.classList.add('interpret')
  const h3Explain = document.createElement('h3')
  h3Explain.textContent = `지표 해석`
  h3Explain.classList.add('interpretTitle')
  const employExplain = document.createElement('div')
  employExplain.textContent = `미국 실업률 : ${EmployTrend}`
  employExplain.classList.add('interpret1')
  const PMIExplain = document.createElement('div')
  PMIExplain.textContent = `ISM 제조업지수 : ${PMITrend}`
  PMIExplain.classList.add('interpret2')
  const spreadExplain = document.createElement('div')
  spreadExplain.textContent = `미국 장단기금리차 : ${SpreadTrend}`
  spreadExplain.classList.add('interpret3')
  articleExplain.append(h3Explain, employExplain, PMIExplain, spreadExplain)

  const articleOpinion = document.createElement('article')
  articleOpinion.classList.add('guide')
  const h3Opinion = document.createElement('h3')
  h3Opinion.textContent = `투자 가이드`
  h3Opinion.classList.add('guideTitle')
  const KoreanDiv = document.createElement('div')
  KoreanDiv.textContent = `미국 주식 : ${USAOpinion}`
  KoreanDiv.classList.add('guide1')
  const USADiv = document.createElement('div')
  USADiv.textContent = `한국 주식 : ${KoreanOpinion}`
  USADiv.classList.add('guide2')
  const CategoryOpinion = document.createElement('div')
  CategoryOpinion.textContent = `추천 종목 : ${SpreadOpinion}`
  CategoryOpinion.classList.add('guide3')
  articleOpinion.append(h3Opinion, KoreanDiv, USADiv, CategoryOpinion)

  main.append(
    h1,
    document.createElement('br'),
    economicCycle,
    document.createElement('br'),
    articleExplain,
    document.createElement('br'),
    articleOpinion,
  )
  return main;
}