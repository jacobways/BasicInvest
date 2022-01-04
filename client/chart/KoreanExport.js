module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`http://localhost:5000/koreanexport?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let Data = json.data.map((el)=>el.value)
  let average = json.data.map((el)=>el.average)


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
        datasets: [{
            label: '수출액(달러)',
            data: Data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
        {
            label: '60일 이동평균선',
            data: average,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                align: 'center'
            },
        },
        scales: {
            y: {
                // beginAtZero: true
                min : Math.round ( (Math.min(...Data) - 5000000) / 10000000 ) * 10000000
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