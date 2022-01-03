module.exports = async function (canvasEle, startDate, endDate) {
  
  let response = await fetch(`http://localhost:5000/dow?startDate=${startDate}&endDate=${endDate}`);
  let json = await response.json();
  let Data = json.data.map((el)=>el.value)  // DB 데이터 객체의 value

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
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
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
                min : Math.round ( (Math.min(...Data) - 1000) / 1000 ) * 1000
            }
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