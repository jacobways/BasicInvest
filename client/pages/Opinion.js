
module.exports = function createOpinionElement () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '투자의견을 제공하는 페이지입니다.' 

  const articleIntro = document.createElement('article')
  articleIntro.textContent = '경기사이클에서 현재 위치 표시'
  const divRegister = document.createElement('div')
  divRegister.textContent = '장세(금융장세) 표시'
  articleIntro.appendChild(divRegister)

  const articleOpinion = document.createElement('article')
  articleOpinion.textContent = `매매의견 알려주기
  ex. 실적주 매매, 성장주 매매, 주식 매도 및 채권 매매
  특정 산업군 매매
  `
  
  main.append(
    h1,
    document.createElement('br'),
    articleIntro,
    document.createElement('br'),
    articleOpinion,
  )
  return main;
}