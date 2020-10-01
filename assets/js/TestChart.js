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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'LineWithLine',
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
      drag: true,
      mode: "xy",
      limits: {
        max: 10,
        min: 0.5
      }
    }
  }
});
