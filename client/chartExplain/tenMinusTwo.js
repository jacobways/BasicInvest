module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/tenminustwo`);
  let json = await response.json();
  let Data = json.data
  let Message = json.message

  const div = document.createElement('div')
  div.classList.add('explainBox')

  const explain = document.createElement('div')
  explain.textContent = '해당 지표는 성장률과 반비례하는 경향이 있습니다.'
  explain.classList.add('explain')
  const caution = document.createElement('div')  
  caution.textContent = `지수가 '0'이하로 내려가면, 2년 내 경기 하락이 올 가능성이 있습니다.`
  caution.classList.add('explain')
  const trend = document.createElement('div')
  trend.textContent = `현재 ${Data} 추세입니다.` 
  trend.classList.add('explain')
  trend.classList.add('trend')
  const opinion = document.createElement('div')
  opinion.textContent = `추천 주식 : ${Message}`
  opinion.classList.add('explain')
  opinion.classList.add('opinion')

  div.append(explain, caution, trend, opinion)

  return div;
}