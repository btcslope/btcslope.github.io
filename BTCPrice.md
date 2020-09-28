---
layout: base
title: BTCSlope
subtitle: Bitcoin Price
meta-title: "Hi, I'm BTCSlope"
full-width: true
css:
  - /assets/css/index.css
---

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
					<div class="card shadow mb-4 border-dark" id="graph1">
						<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0 bg-dark">
							<h6 class="m-0 text-light">Stock to flow graph</h6>
							<div class="dropdown no-arrow">
								<a class="dropdown-toggle" href="#" role="button" onclick="$('#graph1').toggleClass('fullscreen');window.dispatchEvent(new Event('resize'));">
									<i class="fas fa-arrows-alt fa-sm fa-fw text-gray-400"></i>
								</a>
							</div>
						</div>
			
						<!-- Card Body -->
						<div class="card-header text-white border-bottom-0" style="background-color: black">
							<div class="dropdown">
								<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    								USD
  								</button>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" onclick="location.href = '/btc/sf_model/';">USD</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/AUD';">AUD</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/CAD';">CAD</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/CHF';">CHF</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/CNY';">CNY</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/DKK';">DKK</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/EUR';">EUR</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/GBP';">GBP</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/HUF';">HUF</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/JPY';">JPY</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/KRW';">KRW</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/NZD';">NZD</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/RUB';">RUB</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/SEK';">SEK</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/TRY';">TRY</a>
																		<a class="dropdown-item" onclick="location.href = '/btc/sf_model/ZAR';">ZAR</a>
																	</div>
							</div>
						</div>
						<div class="card-body pb-0 pt-0 pl-0 pr-0" style="height: 100px;">
							<div id="graph" style="height: 100%; width:100%;"></div>
						</div>
					</div>
				</div>








</div>
