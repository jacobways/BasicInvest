
module.exports = function createLandingPageElement () {

  const main = document.createElement('main')

  const articleIntro = document.createElement('article')
  articleIntro.classList.add('IntroBox')

  const serviceImage = document.createElement('div')
  serviceImage.classList.add('homeImageBox')
  // const Image = document.createElement('div')
  // Image.classList.add('homeImage')
  // serviceImage.append(Image)

  const divService = document.createElement('div')
  divService.classList.add('serviceBox')
  const divTitle = document.createElement('div')
  divTitle.textContent = '주식 입문자들을 위한 쉽고 안전한 투자'
  divTitle.classList.add('explain1')
  const divSubTitle1 = document.createElement('div')
  divSubTitle1.textContent = '베이직 인베스트에서,'
  divSubTitle1.classList.add('explain2')
  const divSubTitle2 = document.createElement('div')
  divSubTitle2.textContent = '경제지표에 따른 객관적인 투자 가이드를 확인하세요!'
  divSubTitle2.classList.add('explain3')
  divService.append(divTitle, divSubTitle1, divSubTitle2)

  articleIntro.append(serviceImage, divService)
  

  const articleKorean = document.createElement('article')
  articleKorean.textContent = '국내 지표 확인하기 (한국 주식시장 진단)'
  
  const articleUSA = document.createElement('article')
  articleUSA.textContent = '미국 지표 확인하기 (향후 주식시장 예측)'

  const articleGuide = document.createElement('article')
  articleGuide.textContent = '상품 원자재 지표 확인하기 (거시경제 및 특정 산업군 진단하기)'

  main.append(
    articleIntro,
    // document.createElement('br'),
    // articleKorean,
    // document.createElement('br'),
    // articleUSA,
    // document.createElement('br'),
    // articleGuide
  )
  return main;
}
