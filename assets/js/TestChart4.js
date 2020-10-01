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

//based on:
//https://github.com/chartjs/chartjs-plugin-zoom/blob/master/samples/zoom-time.html
var timeFormat = "MM/DD/YYYY HH:mm";
function randomScalingFactor() {
  return Math.round(Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1));
}
function randomColorFactor() {
  return Math.round(Math.random() * 255);
}
function randomColor(opacity) {
  return (
    "rgba(" +
    randomColorFactor() +
    "," +
    randomColorFactor() +
    "," +
    randomColorFactor() +
    "," +
    (opacity || ".3") +
    ")"
  );
}
function newDate(days) {
  return moment()
    .add(days, "d")
    .toDate();
}
function newDateString(days) {
  return moment()
    .add(days, "d")
    .format(timeFormat);
}
function newTimestamp(days) {
  return moment()
    .add(days, "d")
    .unix();
}
function resetZoom() {
  window.myLine.resetZoom();
}
var config = {
  type: "line",
  data: {
    labels: [
      newDate(0),
      newDate(1),
      newDate(2),
      newDate(3),
      newDate(4),
      newDate(5),
      newDate(6)
    ], // Date Objects
    datasets: [
      {
        label: "My First dataset",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: false,
        borderDash: [5, 5]
      },
      {
        label: "My Second dataset",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      },
      {
        label: "Dataset with point data",
        data: [
          {
            x: newDateString(0),
            y: randomScalingFactor()
          },
          {
            x: newDateString(5),
            y: randomScalingFactor()
          },
          {
            x: newDateString(7),
            y: randomScalingFactor()
          },
          {
            x: newDateString(15),
            y: randomScalingFactor()
          }
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Time Scale"
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: timeFormat,
            // round: 'day'
            tooltipFormat: "ll HH:mm"
          },
          scaleLabel: {
            display: true,
            labelString: "Date"
          },
          ticks: {
            maxRotation: 0
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "value"
          }
        }
      ]
    },
    pan: {
      enabled: true,
      mode: "x",
      speed: 100,
      threshold: 100
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
};
config.data.datasets.forEach(function(dataset) {
  dataset.borderColor = randomColor(0.4);
  dataset.backgroundColor = randomColor(0.5);
  dataset.pointBorderColor = randomColor(0.7);
  dataset.pointBackgroundColor = randomColor(0.5);
  dataset.pointBorderWidth = 1;
});

var ctx = document.getElementById("myChart4").getContext("2d");
var myChart4 = new Chart(ctx, config);
