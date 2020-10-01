var ctx = document.getElementById('myChart6').getContext('2d');
var myChart6 = new Chart(ctx, {
   type: 'LineWithLine',
   data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
         label: 'Statistics',
         data: [3, 1, 2, 5, 4, 7, 6],
         backgroundColor: 'rgba(0, 119, 204, 0.8)',
         borderColor: 'rgba(0, 119, 204, 0.3)',
         fill: false
      }]
   },
   options: {
      responsive: true,
      tooltips: {
         intersect: false
      },
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      }
   }
});
