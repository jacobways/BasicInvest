module.exports = function (canvasEle) {

  const Data = [2.5, 3, 2.7, 1.9, 0.7, -1]

  const ctx = canvasEle.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2.5, 3, 2.7, 1.9, 0.7, -1],
        datasets: [{
            // label: 'exchange rate',
            data: Data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            cubicInterpolationMode: 'monotone',
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
            // ticks: {
            display:false
            // }
          },
          x: {
            ticks: {
              display:false
            }
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