module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/koreanexport`);
  let json = await response.json();
  let Data = json.data

  console.log(Data, 'Data')

  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '한국 수출지표는 코스피 지수와 비례하여 움직이는 경향이 있습니다.'
  const trend = document.createElement('div')
  trend.textContent = `중기 수출액 추세는 현재 ${Data}중입니다.` 

  div.append(explain, trend)

  return div;
}