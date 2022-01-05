module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/employmentrate`);
  let json = await response.json();
  let Long = json.long
  let Short = json.short
  let Message = json.message



  const div = document.createElement('div')
  div.classList.add('explainBox')

  const explain = document.createElement('div')
  explain.textContent = '미국 실업률은 경제 및 주가와 반비례합니다.'
  explain.classList.add('explain')
  const caution = document.createElement('div')  
  caution.textContent = `미국 실업률 상승 시 글로벌 경제위기가 발생합니다.`
  caution.classList.add('explain')
  const trend = document.createElement('div')
  trend.textContent = `6개월간 ${Long} 추세이며 3개월간은 ${Short} 추세입니다.`
  trend.classList.add('explain')
  trend.classList.add('trend')
  const opinion = document.createElement('div')
  opinion.textContent = `주식 매수 의견 : ${Message}`
  opinion.classList.add('explain')
  opinion.classList.add('opinion')

  div.append(explain, caution, trend, opinion)

  return div;
}