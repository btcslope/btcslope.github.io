---
layout: base
title: BTCSlope
subtitle: Bitcoin Price
meta-title: "Hi, I'm BTCSlope"
full-width: true
js: 
  - /assets/js/TestChart.js
  - /assets/js/TestChart2.js
  - /assets/js/TestChart3.js
  - /assets/js/TestChart4.js
ext-js: 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js
  - //cdn.jsdelivr.net/npm/chart.js@2.9.1
  - //cdn.jsdelivr.net/npm/hammerjs@2.0.8
  - //cdn.jsdelivr.net/npm/chartjs-plugin-zoom@0.7.7
css:
  - /assets/css/index.css
---


<!-- Info from here: https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/ --!>

<div id="main-sections" style="margin-top:-30px;">

<div id="services-out" class="page-section">
  <div id="services">
	<div class="section-title">Test CHart</div>
	
    <div class="container">
      <h2>Chart.js — Line Chart Demo</h2>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </div>
    
     <div class="container">
      <h2>Chart.js — Line Chart Demo 2</h2>
      <div>
    	<canvas id="myChart2"></canvas>
      </div>
    </div>
    
      <div class="container">
      <h2>Chart.js — Line Chart Demo 3</h2>
      <div>
    	<canvas id="myChart3"></canvas>
      </div>
    </div>
        
    <div class="container">
      <h2>Chart.js — Line Chart Demo 4</h2>	
	        <button onclick="resetZoom()">Reset Zoom</button>
        	<canvas id="myChart4"></canvas>
    </div>

    
  <a href="/contact" class="contact-me-btn actionbtn">
    <span class="far fa-envelope" aria-hidden="true"></span>
    CONTACT
  </a>
    
</div>
</div>
</div>
