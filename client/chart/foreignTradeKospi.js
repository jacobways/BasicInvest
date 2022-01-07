module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`${process.env.API}/foreignKospi?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let Data = json.data.map((el)=>el.value)
  let Average = json.data.map((el)=>el.average)
  let Percent = json.data.map((el)=>el.percent)


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

  let Length = Data.length

  if (Length>1200) {
      xObj = yearObj
  } else if (Length>90) {
      xObj = monthObj
  } else {
      xObj = dayObj
  }


  const ctx = canvasEle.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: json.data.map((el)=>el.date.slice(0,10)),
        datasets: [{
            label: '외국인 시가총액(억)',
            data: Data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            yAxisID: 'y',
        },
        {
            label: '60일 이동평균선(억)',
            data: Average,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            yAxisID: 'y',
        },
        {
            label: '외국인 보유비중(%)',
            data: Percent,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            yAxisID: 'y1',
        }]
    },
    options: {
        // plugins: {
        //     legend: {
        //         display: false
        //     },
        // },
        scales: {
            y: {
                // beginAtZero: true
                min : Math.round ( (Math.min(...Data) - 50000) / 100000 ) * 100000
            },
            y1: {
                position: 'right',
                // beginAtZero: true
                min : Math.round ( (Math.min(...Percent) - 2) )
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