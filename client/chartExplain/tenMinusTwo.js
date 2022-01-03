module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/tenminustwo`);
  let json = await response.json();
  let Data = json.data
  let Message = json.message

  const div = document.createElement('div')

  const explain = document.createElement('div')
  explain.textContent = '경제 성장율을 예측하는 지표입니다.'
  const caution = document.createElement('div')  
  caution.textContent = `지수가 '0'이하로 내려가면, 2년 내 경기 하락이 올 가능성이 있습니다.`
  const trend = document.createElement('div')
  trend.textContent = `현재 ${Data} 추세입니다.` 
  const opinion = document.createElement('div')
  opinion.textContent = `추천 주식 : ${Message}`

  div.append(explain, caution, trend, opinion)

  return div;
}