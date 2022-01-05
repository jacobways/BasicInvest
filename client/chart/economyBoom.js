module.exports = function (canvasEle) {

  const Data = [0.5, 0, 0.3, 1.1, 2.2, 3.9]

  const ctx = canvasEle.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0.5, 0, 0.3, 1.1, 2.2, 3.9],
        datasets: [{
            // label: 'exchange rate',
            data: Data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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