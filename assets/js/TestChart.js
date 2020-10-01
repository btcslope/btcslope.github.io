var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.6)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.6)"
    }]
  },
    options: {
    responsive: true,
    title: {
      display: true,
      text: "Test Chart"
    },
    zoom: {
      enabled: true,
      drag: false,
      mode: "x",
      limits: {
        max: 10,
        min: 0.5
      }
    }
  }
});
