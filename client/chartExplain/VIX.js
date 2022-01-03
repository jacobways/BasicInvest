module.exports = function () {
  
  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '공포 지수라고 불리며 주가와 반비례합니다.'
  const trend = document.createElement('div')
  trend.textContent = `단기적으로 VIX 지수의 고점이 주가의 저점입니다.` 

  div.append(explain, trend)

  return div;
}