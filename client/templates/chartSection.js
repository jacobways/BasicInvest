module.exports = function (chartName, divChartId, canvasChartId, chartModule) {

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔줌
  function getDate(date){
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔주되, 3달 전 데이터 표시
  function back3month (date) {
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    if (Number(day) === 31) day = "30"

    if (Number(month) < 4) {
      year -= 1;
      month = Number(month) + 12 - 3
    } else {
      month -= 3
    }

    if (String(month).length === 1) month = "0" + month

    if (Number(month) === 2 && Number(day)>28) day = "28"

    return year + "-" + month + "-" + day;
  }  

  // section 생성
  const section = document.createElement('section')

  // h3 : 차트 제목
  const h3 = document.createElement('h3')  
  h3.textContent = `${chartName}`

  let startDate = back3month(new Date())  // 차트 x축 시작 날짜
  let endDate = getDate(new Date())       // 차트 x축 끝 날짜

  // chart의 날짜를 선택하기 위한 form 제작
  const form = document.createElement('form')
  // input : 시작 날짜 선택
  const inputStartDate = document.createElement('input')  
  inputStartDate.setAttribute('type', 'date')
  inputStartDate.setAttribute('value', startDate)
  // input : 끝 날짜 선택
  const inputEndDate = document.createElement('input')  
  inputEndDate.setAttribute('type', 'date')
  inputEndDate.setAttribute('value', endDate)
  // button : 클릭 이벤트 등록
  const button = document.createElement('button')
  button.textContent = '조회'
  button.addEventListener('click', function (event) {   
    event.preventDefault()
    startDate = inputStartDate.value
    endDate = inputEndDate.value
    // 재렌더링 시 기존 canvas 삭제하고 재생성
    if(document.getElementById(`${canvasChartId}`)) document.getElementById(`${canvasChartId}`).remove()
    const canvas = document.createElement('canvas')
    canvas.setAttribute('id', `${canvasChartId}`)
    divChart.append(canvas)
    // 차트 생성
    chartModule(canvas, startDate, endDate)  
  })
  form.append(inputStartDate, inputEndDate, button)

  // chart canvas를 감싸기 위한 div 제작
  const divChart = document.createElement('div')
  divChart.setAttribute('id', `${divChartId}`)
  divChart.classList.add('chartBox')
  // divChart.setAttribute('style', 'position: relative; height:200px; width:40vw')

  // chart를 표시할 canvas 제작
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', `${canvasChartId}`)
  divChart.append(canvas)
  // 차트 생성
  chartModule(canvas, startDate, endDate)

  section.append(h3, form, divChart)

  return section
}