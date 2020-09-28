---
layout: base
title: BTCSlope
subtitle: Bitcoin Price
meta-title: "Hi, I'm BTCSlope"
full-width: true
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

  </div>
</div>

<div id="aboutme-section-out" class="page-section">
  <div id="aboutme-section">
    <div class="section-title">About Silvia</div>
	<div id="aboutme-list" markdown="1">
{% for info in site.data.main_info %}
{% if info.icon %}<span class="about-icon fa-fw {{ info.icon }}" aria-hidden="true"></span>{% endif info.icon %}
<span class="about-content">{{ info.content }}</span>
{: .about-text }
{% endfor %}
</div>
  </div>
</div>


<div id="qualifications-out" class="page-section">
  <div id="qualifications">
    <div class="section-title">Silvia's Credentials</div>
    <div id="qualifications-list" markdown="1">
{% for info in site.data.qualifications %}
{% if info.icon %}<span class="about-icon fa-fw {{ info.icon }}" aria-hidden="true"></span>{% endif info.icon %}
<span class="about-content">{{ info.content }}</span>
{: .about-text }
{% endfor %}
</div>
  </div>
  <a href="/contact" class="contact-me-btn actionbtn">
    <span class="far fa-envelope" aria-hidden="true"></span>
    CONTACT
  </a>
</div>

</div>
