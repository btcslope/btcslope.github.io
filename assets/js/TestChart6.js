let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#000000';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
         var activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;

         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 2;
         ctx.strokeStyle = '#07C';
         ctx.stroke();
         ctx.restore();
      }
   }
});

var ctx = document.getElementById('myChart6').getContext('2d');
var chart = new Chart(ctx, {
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
