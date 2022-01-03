module.exports = async function () {
  
  let response = await fetch(`http://localhost:5000/trend/creditbalance`);
  let json = await response.json();
  let Data = json.data
  let Current = json.value

  let Caution;

  if (Current > 12500000) {
    Caution = '(위험)'
  } else if (Current > 10000000) {
    Caution = '(주의)'
  } else {
    Caution = '(양호)'
  }
  

  const div = document.createElement('div')

  const explain = document.createElement('div')
  explain.textContent = '신용잔고 하락 시 주가도 하락하는 경향이 있습니다.'
  const caution = document.createElement('div')  
  caution.textContent = `10,000,000백만원 이상이 되면 주의가 필요합니다.`
  const trend = document.createElement('div')
  trend.textContent = `급락 시 주의가 필요하며 현재 ${Data} 추세입니다.` 
  const current = document.createElement('div')
  current.textContent = `현재 신용잔고는 ${Current.toLocaleString()}백만원입니다. ${Caution}`

  div.append(explain, caution, trend, current)

  return div;
}