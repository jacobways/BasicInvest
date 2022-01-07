module.exports = async function () {
  
  let response = await fetch(`${process.env.API}/trend/koreanexport`);
  let json = await response.json();
  let Data = json.data

  const div = document.createElement('div')
  div.classList.add('explainBox')
  
  const explain = document.createElement('div')
  explain.textContent = '한국 수출지표는 코스피 지수와 비례하여 움직이는 경향이 있습니다.'
  explain.classList.add('explain')
  const trend = document.createElement('div')
  trend.classList.add('trend')
  trend.textContent = `중기 수출액 추세는 현재 ${Data}중입니다.` 
  trend.classList.add('explain')

  div.append(explain, trend)

  return div;
}