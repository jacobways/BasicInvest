module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`${process.env.API}/creditbalance?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let TotalData = json.data.map((el)=>el.all)  // DB 데이터 객체의 value
  let KospiData = json.data.map((el)=>el.kospi)
  let KosdaqData = json.data.map((el)=>el.kosdaq)


  let xObj // date 양식 설정 객체

  // 개수 90개 까지는 day
  // 그 이후에는 월
  // 1200개 부터 year

  const dayObj = {
    type: 'time',
    time: {
      unit: 'day'
    }
  }

  const monthObj = {
    type: 'time',
    time: {
      unit: 'month'
    }
  }

  const yearObj = {
    type: 'time',
    time: {
      unit: 'year'
    }
  }

  let Length = TotalData.length

  if (Length>60) {
    xObj = yearObj
  } else {
    xObj = monthObj
  }

  const ctx = canvasEle.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: json.data.map((el)=>el.date.slice(0,10)),
        datasets: [
            {
            label: '전체',
            data: TotalData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
            },
            {
            label: '코스피',
            data: KospiData,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
            },
            {
            label: '코스닥',
            data: KosdaqData,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
            },
                ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                // beginAtZero: true
                min : Math.round ( (Math.min(...KospiData, ...KosdaqData) - 5000000) / 10000000 ) * 10000000
            },
            x: xObj
        },
        elements: {
            point:{
                radius: 0
            }
        }
    }
  });
  
  return myChart

}