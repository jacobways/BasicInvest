module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/foreignkospi`);
  let json = await response.json();
  let Data = json.data
  let netValue = json.netValue

  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '한국 증시는 외국인의 영향을 받기 때문에 이들과 스탠스를 맞추어 매매하는 것을 추천드립니다'
  const trend = document.createElement('div')
  trend.textContent = `외국인 중기 매수 추세는 현재 ${Data}중입니다.`
  const net = document.createElement('div')
  net.textContent = `외국인은 최근 2달간 ${netValue.value.toLocaleString()}억원을 ${netValue.message}했습니다.`

  div.append(explain, trend, net)

  return div;
}