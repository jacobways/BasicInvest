module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`${process.env.API}/kospi?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let Data = json.data.map((el)=>el.value)


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
            // label: 'exchange rate',
            data: Data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                // beginAtZero: true
                min : Math.round ( (Math.min(...Data) - 50) / 100 ) * 100
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