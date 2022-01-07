module.exports = async function () {
  
  let response = await fetch(`${process.env.API}/trend/pmi`);
  let json = await response.json();
  let Long = json.long
  let Short = json.short
  let Message = json.message

  const div = document.createElement('div')
  div.classList.add('explainBox')

  const explain = document.createElement('div')
  explain.textContent = 'ISM 제조업 지수는 미국 제조업 수요 및 코스피 지수와 비례합니다.'
  explain.classList.add('explain')
  const caution = document.createElement('div')  
  caution.textContent = `지수가 50밑으로 떨어지면 하락장에 대비해야합니다.`
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