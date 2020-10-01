Chart.defaults.MyLine = Chart.defaults.line;
Chart.controllers.MyLine = Chart.controllers.line.extend({
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
      ctx.strokeStyle = '#000000';
      ctx.stroke();

      var value = this.chart.data.datasets[activePoint._datasetIndex].data[activePoint._index];
      ctx.font = this.chart.options.tooltips.titleFontStyle + " " + this.chart.options.tooltips.titleFontSize + "px Arial";
      var xPad = this.chart.options.tooltips.xPadding;
      var yPad = this.chart.options.tooltips.yPadding;
      var width = ctx.measureText(value).width + xPad * 2;
      var height = this.chart.options.tooltips.titleFontSize + yPad * 2;
      var radius = this.chart.options.tooltips.cornerRadius;
      console.log(activePoint, topY, xPad, yPad, ctx.font);
      ctx.fillStyle = this.chart.options.tooltips.backgroundColor;
      ctx.lineWidth = this.chart.options.tooltips.borderWidth;
      var y = topY;
      x = x - width / 2;

      // draw rect upper tooltip
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();

      // draw text
      ctx.textBaseline = 'top';
      ctx.fillStyle = this.chart.options.tooltips.titleFontColor;
      ctx.fillText(value, x + xPad, topY + yPad);
    }
  }
});

Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
  var tooltip = this;
  return {
    x: eventPosition.x,
    y: elements[0]._chart.height
  };
}

var ctx = document.getElementById('myChart6').getContext('2d');
var chart = new Chart(ctx, {
  type: 'MyLine',
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
    responsive: false,
    legend: {
      display: false
    },
    animation: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      // bottom tooltip
      position: 'custom',
      caretSize: 0,
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return "";
        },
        afterLabel: function(tooltipItem, data) {
          var dataset = data['datasets'][0];
          return "";
        }
      },
      backgroundColor: '#FF0000',
      titleFontSize: 12,
      titleFontColor: '#FFFFFF',
      bodyFontColor: '#000',
      titleMarginBottom: 2,
      displayColors: false
    }
  }
});
