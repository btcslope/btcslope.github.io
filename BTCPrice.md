---
layout: base
title: BTCSlope
subtitle: Bitcoin Price
meta-title: "Hi, I'm BTCSlope"
full-width: true
css:
  - /assets/css/index.css
---
<script type = "text/javascript">
	function AutoRefresh(t) {
		setTimeout("location.reload(true);", t);
        }
</script>
	
<style>
	html,body {
		height:100%;
		margin:0;
	}
	.btn:focus,.btn:active {
   		outline: none !important;
   		box-shadow: none;
	}
	#graph1.fullscreen{
	    z-index: 9999; 
	    width: 100%; 
	    height: 100%;
	    position: fixed;
	    top: 0px; 
	    left: 0px;
	    padding: 0px;
	    bottom: 0px;
	    float: left;
		min-height: 100%;
	}
	#graph1 {
		height: 650px;
	}
	#link_graph { color: #FF0000; }
	#link_graph:hover { color: #00FF00; }
  </style>


<div id="header" markdown="1">

# BTCSlope {#title}

## Bitcoin Analysis {#subtitle}

</div>

<div id="main-sections" style="margin-top:-30px;">

<div id="services-out" class="page-section">
  <div id="services">
	<div class="section-title">Bitcoin Price</div>
	
  {% raw %}
  <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="/plots/BTCPrice.html" height="525" width="100%"></iframe>
  {% endraw %}

  <a href="/contact" class="contact-me-btn actionbtn">
    <span class="far fa-envelope" aria-hidden="true"></span>
    CONTACT
  </a>
  
  </div>
</div>


<!-- Chart -->
<div class="col-xl-12 col-lg-12">
	<div class="card shadow mb-4" id="graph1">
		<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0">
			<h6 class="m-0 text-primary">Bitcoin Price graph</h6>
			<div class="dropdown no-arrow">
				<a class="btn dropdown" data-toggle="dropdown" href="#" role="button" onclick="$('#graph1').toggleClass('fullscreen');window.dispatchEvent(new Event('resize'));">
					<i class="fas fa-arrows-alt fa-sm fa-fw text-gray-400"></i></a>
			</div>
		</div>

<!-- Card Body -->
<div class="card-header text-primary border-bottom-0" style="background-color: white">
	<div class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item" onclick="location.href = '/plots/BTCPrice.html';">USD</a>
			<a class="dropdown-item" onclick="location.href = '/btc/sf_model/AUD';">AUD</a>
			<a class="dropdown-item" onclick="location.href = '/btc/sf_model/CAD';">CAD</a>
		</div>
	</div>
</div>
<div class="card-body" style="height: 450px;">
	<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="/plots/BTCPrice.html" height="100%" width="100%"></iframe>
</div>
</div>
</div>
</div>

<script>
function findBootstrapEnvironment() {
	let envs = ['xs', 'sm', 'md', 'lg', 'xl'];
	let el = document.createElement('div');
	document.body.appendChild(el);
	let curEnv = envs.shift();
	for (let env of envs.reverse()) {
		el.classList.add(`d-${env}-none`);
		if (window.getComputedStyle(el).display === 'none') {
			curEnv = env;
			break;
		}
	}
	document.body.removeChild(el);
	return curEnv;
}

env_size = findBootstrapEnvironment();
if (env_size == "xs") {
	document.getElementById("graph1").style.height="350px";
	Plotly.newPlot('graph', data_mobile, layout_mobile, {responsive: true, modeBarButtonsToRemove: ['toImage', 'hoverCompareCartesian', 'hoverClosest2d', 'toggleSpikelines', 'lasso2d', 'select2d', 'hoverClosestCartesian'], displaylogo: false});
}
else {
	document.getElementById("graph1").style.height="650px";
	Plotly.newPlot('graph', data, layout, {responsive: true, modeBarButtonsToRemove: ['toImage', 'hoverCompareCartesian', 'hoverClosest2d', 'toggleSpikelines', 'lasso2d', 'select2d', 'hoverClosestCartesian'], displaylogo: false});
		}
</script>
