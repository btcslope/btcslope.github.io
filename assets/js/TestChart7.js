var chart = new CanvasJS.Chart("chartContainer",
    {	  
      title:{
        text: "Vertical Marker (crosshair) using Striplines",
				verticalAlign: "top",
				horizontalAlign: "center",
      },
	  	toolTip:{
        shared: "true",
        contentFormatter: function ( e ) {
          var content = " ";
          for (var i = 0; i < e.entries.length; i++) {
            content += e.entries[i].dataSeries.name +" "+"<strong>"+ e.entries[i].dataPoint.y +"</strong>";
            content += "<br/>";
          }
          content += "<p id='xData' style='display:none;'>"+ e.entries[0].dataPoint.x+ "</p>";
          return content;
        }
     },
     axisX:{
     	valueFormatString: "DD-HH:mm:ss"
     },
      axisY :{
        gridThickness : 0,
				lineDashType: "dot",
				includeZero: true,
				stripLines:[
				{                
					startValue:10,
					endValue:-10,                
					color: "rgba(83, 223, 128, .4)"                     
				}
				]
      },
	  data: getData(),
      
   });
chart.render();
	
//-------------using striplines as vertical marker-------------
function stripLineHandler(position){
  if(!chart.options.axisX){
    chart.options.axisX ={};
  }
  if(!chart.options.axisX.stripLines){
    chart.options.axisX.stripLines = [];
  }
  chart.options.axisX.stripLines[0] = {
    value : position,
    thickness: 2,
    //color:"red",
    showOnTop: true,
    label: (new Date(position).getDate()+"-"+new Date(position).getHours()+":"+new Date(position).getMinutes()+":"+new Date(position).getSeconds()),
    labelPlacement: "outside"
  }
  chart.render();
 }

var prevXData = null;

document.getElementById("chartContainer").onmousemove = function (){
	if( document.getElementById("xData") ){	
    var currentXData = new Date( document.getElementById("xData").innerHTML ).getTime();
    if(prevXData !== currentXData){
      stripLineHandler(currentXData);
      prevXData = currentXData;
    }
  }
}
//----------------------------------------------------------------
	
//---------------- generating random data-------------------------

function getData(){    
  var data = [];
  var numberOfDataSeries = 4;
  for(var j=0 ; j < numberOfDataSeries; j++){
      data.push({
        type: "spline" ,
        markerSize: 0,
        dataPoints : getDataPoints()
      }); 
  }
  return data;
}

function getDataPoints(){
  var limit = 100; 
  var y = 0;
  var dataPoints = [];
  for (var i = -limit/2; i <= limit/2; i++) {
       y += (Math.random() * 10 - 5);
       dateTime = new Date(2015, 10, 30);
       dateTime.setSeconds(dateTime.getSeconds() + i);
       dataPoints.push({
         x: dateTime,
         y: y
         });
  }
  return dataPoints;
}

//-------------------------------------------------------------
 
