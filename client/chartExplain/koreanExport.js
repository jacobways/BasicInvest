module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`http://localhost:5000/koreanexport?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let Data = json.data.map((el)=>el.value)
  let average = json.data.map((el)=>el.average)

}