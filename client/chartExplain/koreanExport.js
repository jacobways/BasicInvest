module.exports = async function () {

  function getDate(date){
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  let today = getDate(new Date())
  
  let response = await fetch(`http://localhost:5000/trend/koreanexport/${today}`);
  let json = await response.json();
  let Data = json.data
  console.log('Data----', Data, typeof(Data))

  const div = document.createElement('div')
  
  const explain = document.createElement('div')
  explain.textContent = '코스피 지수와 비례하여 움직이는 경향이 있습니다.'
  const trend = document.createElement('div')
  trend.textContent = `현재 ${Data}중입니다.` 

  div.append(explain, trend)

  console.log('div-------', div, typeof(div))

  return div;
}