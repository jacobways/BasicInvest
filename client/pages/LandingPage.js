
module.exports = function createLandingPageElement () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = 'Landing Page' 

  const articleIntro = document.createElement('article')
  articleIntro.textContent = '투자 입문자들을 위한 각종 경제지표에 대한 해석과 투자의견을 제공합니다.'
  const divRegister = document.createElement('div')
  divRegister.textContent = '가입하여 투자 의견 참고하기'
  articleIntro.appendChild(divRegister)

  const articleKorean = document.createElement('article')
  articleKorean.textContent = '국내 지표 확인하기 (한국 주식시장 진단)'
  
  const articleUSA = document.createElement('article')
  articleUSA.textContent = '미국 지표 확인하기 (향후 주식시장 예측)'

  const articleCommodity = document.createElement('article')
  articleCommodity.textContent = '상품 원자재 지표 확인하기 (거시경제 및 특정 산업군 진단하기)'

  main.append(
    h1,
    document.createElement('br'),
    articleIntro,
    document.createElement('br'),
    articleKorean,
    document.createElement('br'),
    articleUSA,
    document.createElement('br'),
    articleCommodity
  )
  return main;
}