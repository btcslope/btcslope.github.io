---
layout: base
title: DataTables Test
ext-js: 
  - //cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js
  - //cdn.datatables.net/fixedheader/3.1.7/js/dataTables.fixedHeader.min.js
  - //cdn.datatables.net/responsive/2.2.6/js/dataTables.responsive.min.js
css:
  - /assets/css/index.css
ext-css:
  - //cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css
  - //cdn.datatables.net/fixedheader/3.1.7/css/fixedHeader.dataTables.min.css
  - //cdn.datatables.net/responsive/2.2.6/css/responsive.dataTables.min.css
---

<div id="main-sections" style="margin-top:-30px;">

<div id="services-out" class="page-section">
  <div id="services">
	<div class="section-title">Test CHart</div>
	
    <div class="container">
      <h2>Fiat Currencies</h2>
      <div>
        <div class="table dt-responsive">
  <table id="currency-ranking" class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" class="text-left">#</th>
                    <th scope="col" class="text-left">Currency</th>
                    <th scope="col" class="text-right">Market Cap</th>
                    <th scope="col" class="text-right">Price</th>
                    <th scope="col" class="text-right">Circulating Supply</th>
                    <th scope="col" class="text-right">Max Supply</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">1</td>
                    <td class="text-left" data-search="CNY" data-order="CNY">
                        <img src="/images/currency/CNY.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CNY
                    </td>
                    <td class="text-right" data-search="2,337,028,548" data-order="2,337,028,548">2,337,028,548 BTC</td>
                    <td class="text-right" data-search="1,079" data-order="1079.9178161647303159373196833">1,079 sats</td>
                    <td class="text-right" data-search="216,408,000,000,000" data-order="216,408,000,000,000">216,408,000,000,000 CNY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">2</td>
                    <td class="text-left" data-search="USD" data-order="USD">
                        <img src="/images/currency/USD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />USD
                    </td>
                    <td class="text-right" data-search="1,363,564,611" data-order="1,363,564,611">1,363,564,611 BTC</td>
                    <td class="text-right" data-search="7,225" data-order="7225.9504111927081489210572144">7,225 sats</td>
                    <td class="text-right" data-search="18,870,384,286,000" data-order="18,870,384,286,000">18,870,384,286,000 USD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">3</td>
                    <td class="text-left" data-search="EUR" data-order="EUR">
                        <img src="/images/currency/EUR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />EUR
                    </td>
                    <td class="text-right" data-search="1,109,710,618" data-order="1,109,710,618">1,109,710,618 BTC</td>
                    <td class="text-right" data-search="8,438" data-order="8438.100411506429802978528839">8,438 sats</td>
                    <td class="text-right" data-search="13,151,190,000,000" data-order="13,151,190,000,000">13,151,190,000,000 EUR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">4</td>
                    <td class="text-left" data-search="JPY" data-order="JPY">
                        <img src="/images/currency/JPY.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JPY
                    </td>
                    <td class="text-right" data-search="1,013,661,916" data-order="1,013,661,916">1,013,661,916 BTC</td>
                    <td class="text-right" data-search="69" data-order="69.045412540023950580125498154">69 sats</td>
                    <td class="text-right" data-search="1,468,109,000,000,000" data-order="1,468,109,000,000,000">1,468,109,000,000,000 JPY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">5</td>
                    <td class="text-left" data-search="GBP" data-order="GBP">
                        <img src="/images/currency/GBP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GBP
                    </td>
                    <td class="text-right" data-search="300,427,439" data-order="300,427,439">300,427,439 BTC</td>
                    <td class="text-right" data-search="9,353" data-order="9353.993223541659146382140578">9,353 sats</td>
                    <td class="text-right" data-search="3,211,756,000,000" data-order="3,211,756,000,000">3,211,756,000,000 GBP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">6</td>
                    <td class="text-left" data-search="KRW" data-order="KRW">
                        <img src="/images/currency/KRW.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KRW
                    </td>
                    <td class="text-right" data-search="276,496,438" data-order="276,496,438">276,496,438 BTC</td>
                    <td class="text-right" data-search="6" data-order="6.3574559170952534152820631052">6 sats</td>
                    <td class="text-right" data-search="4,349,168,000,000,000" data-order="4,349,168,000,000,000">4,349,168,000,000,000 KRW</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">7</td>
                    <td class="text-left" data-search="INR" data-order="INR">
                        <img src="/images/currency/INR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />INR
                    </td>
                    <td class="text-right" data-search="172,601,102" data-order="172,601,102">172,601,102 BTC</td>
                    <td class="text-right" data-search="96" data-order="96.93042616242200976062362903">96 sats</td>
                    <td class="text-right" data-search="178,067,000,000,000" data-order="178,067,000,000,000">178,067,000,000,000 INR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">8</td>
                    <td class="text-left" data-search="CAD" data-order="CAD">
                        <img src="/images/currency/CAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CAD
                    </td>
                    <td class="text-right" data-search="159,673,560" data-order="159,673,560">159,673,560 BTC</td>
                    <td class="text-right" data-search="5,422" data-order="5422.022002779843197680097917">5,422 sats</td>
                    <td class="text-right" data-search="2,944,908,000,000" data-order="2,944,908,000,000">2,944,908,000,000 CAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">9</td>
                    <td class="text-left" data-search="HKD" data-order="HKD">
                        <img src="/images/currency/HKD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HKD
                    </td>
                    <td class="text-right" data-search="148,286,620" data-order="148,286,620">148,286,620 BTC</td>
                    <td class="text-right" data-search="931" data-order="931.9658231100617336696641127">931 sats</td>
                    <td class="text-right" data-search="15,911,165,000,000" data-order="15,911,165,000,000">15,911,165,000,000 HKD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">10</td>
                    <td class="text-left" data-search="TWD" data-order="TWD">
                        <img src="/images/currency/TWD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TWD
                    </td>
                    <td class="text-right" data-search="122,714,068" data-order="122,714,068">122,714,068 BTC</td>
                    <td class="text-right" data-search="252" data-order="252.66794180557582981746441939">252 sats</td>
                    <td class="text-right" data-search="48,567,328,000,000" data-order="48,567,328,000,000">48,567,328,000,000 TWD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">11</td>
                    <td class="text-left" data-search="AUD" data-order="AUD">
                        <img src="/images/currency/AUD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AUD
                    </td>
                    <td class="text-right" data-search="120,781,442" data-order="120,781,442">120,781,442 BTC</td>
                    <td class="text-right" data-search="5,079" data-order="5079.1186840540924572679532644">5,079 sats</td>
                    <td class="text-right" data-search="2,378,000,000,000" data-order="2,378,000,000,000">2,378,000,000,000 AUD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">12</td>
                    <td class="text-left" data-search="BRL" data-order="BRL">
                        <img src="/images/currency/BRL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BRL
                    </td>
                    <td class="text-right" data-search="97,303,031" data-order="97,303,031">97,303,031 BTC</td>
                    <td class="text-right" data-search="1,258" data-order="1258.2398053654924666895106055">1,258 sats</td>
                    <td class="text-right" data-search="7,733,266,000,000" data-order="7,733,266,000,000">7,733,266,000,000 BRL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">13</td>
                    <td class="text-left" data-search="CHF" data-order="CHF">
                        <img src="/images/currency/CHF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CHF
                    </td>
                    <td class="text-right" data-search="88,224,479" data-order="88,224,479">88,224,479 BTC</td>
                    <td class="text-right" data-search="7,871" data-order="7871.5771707365172976764822919">7,871 sats</td>
                    <td class="text-right" data-search="1,120,798,000,000" data-order="1,120,798,000,000">1,120,798,000,000 CHF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">14</td>
                    <td class="text-left" data-search="THB" data-order="THB">
                        <img src="/images/currency/THB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />THB
                    </td>
                    <td class="text-right" data-search="52,194,279" data-order="52,194,279">52,194,279 BTC</td>
                    <td class="text-right" data-search="232" data-order="232.11900183623606622475278046">232 sats</td>
                    <td class="text-right" data-search="22,486,000,000,000" data-order="22,486,000,000,000">22,486,000,000,000 THB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">15</td>
                    <td class="text-left" data-search="RUB" data-order="RUB">
                        <img src="/images/currency/RUB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RUB
                    </td>
                    <td class="text-right" data-search="51,003,685" data-order="51,003,685">51,003,685 BTC</td>
                    <td class="text-right" data-search="91" data-order="91.03899299136943099433905445">91 sats</td>
                    <td class="text-right" data-search="56,024,000,000,000" data-order="56,024,000,000,000">56,024,000,000,000 RUB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">16</td>
                    <td class="text-left" data-search="SAR" data-order="SAR">
                        <img src="/images/currency/SAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SAR
                    </td>
                    <td class="text-right" data-search="40,231,628" data-order="40,231,628">40,231,628 BTC</td>
                    <td class="text-right" data-search="1,926" data-order="1926.7901155449267419880891274">1,926 sats</td>
                    <td class="text-right" data-search="2,088,013,000,000" data-order="2,088,013,000,000">2,088,013,000,000 SAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">17</td>
                    <td class="text-left" data-search="MXN" data-order="MXN">
                        <img src="/images/currency/MXN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MXN
                    </td>
                    <td class="text-right" data-search="40,197,508" data-order="40,197,508">40,197,508 BTC</td>
                    <td class="text-right" data-search="341" data-order="341.06544986080262365057596439">341 sats</td>
                    <td class="text-right" data-search="11,785,863,401,000" data-order="11,785,863,401,000">11,785,863,401,000 MXN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">18</td>
                    <td class="text-left" data-search="SGD" data-order="SGD">
                        <img src="/images/currency/SGD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SGD
                    </td>
                    <td class="text-right" data-search="37,530,930" data-order="37,530,930">37,530,930 BTC</td>
                    <td class="text-right" data-search="5,289" data-order="5289.4584974443440242624699249">5,289 sats</td>
                    <td class="text-right" data-search="709,542,000,000" data-order="709,542,000,000">709,542,000,000 SGD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">19</td>
                    <td class="text-left" data-search="MYR" data-order="MYR">
                        <img src="/images/currency/MYR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MYR
                    </td>
                    <td class="text-right" data-search="35,471,045" data-order="35,471,045">35,471,045 BTC</td>
                    <td class="text-right" data-search="1,739" data-order="1739.9187465354185570906165857">1,739 sats</td>
                    <td class="text-right" data-search="2,038,661,000,000" data-order="2,038,661,000,000">2,038,661,000,000 MYR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">20</td>
                    <td class="text-left" data-search="AED" data-order="AED">
                        <img src="/images/currency/AED.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AED
                    </td>
                    <td class="text-right" data-search="35,354,225" data-order="35,354,225">35,354,225 BTC</td>
                    <td class="text-right" data-search="1,967" data-order="1967.2931622324787325930542625">1,967 sats</td>
                    <td class="text-right" data-search="1,797,100,000,000" data-order="1,797,100,000,000">1,797,100,000,000 AED</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">21</td>
                    <td class="text-left" data-search="SEK" data-order="SEK">
                        <img src="/images/currency/SEK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SEK
                    </td>
                    <td class="text-right" data-search="34,260,843" data-order="34,260,843">34,260,843 BTC</td>
                    <td class="text-right" data-search="816" data-order="816.7773055062774671140386755">816 sats</td>
                    <td class="text-right" data-search="4,194,637,000,000" data-order="4,194,637,000,000">4,194,637,000,000 SEK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">22</td>
                    <td class="text-left" data-search="IDR" data-order="IDR">
                        <img src="/images/currency/IDR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />IDR
                    </td>
                    <td class="text-right" data-search="33,394,590" data-order="33,394,590">33,394,590 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.4952520009919851985189326009">&lt; 1 sats</td>
                    <td class="text-right" data-search="6,742,949,000,000,000" data-order="6,742,949,000,000,000">6,742,949,000,000,000 IDR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">23</td>
                    <td class="text-left" data-search="VND" data-order="VND">
                        <img src="/images/currency/VND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />VND
                    </td>
                    <td class="text-right" data-search="32,958,142" data-order="32,958,142">32,958,142 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.31169849719368955673120057">&lt; 1 sats</td>
                    <td class="text-right" data-search="10,573,725,000,000,000" data-order="10,573,725,000,000,000">10,573,725,000,000,000 VND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">24</td>
                    <td class="text-left" data-search="PLN" data-order="PLN">
                        <img src="/images/currency/PLN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PLN
                    </td>
                    <td class="text-right" data-search="32,191,216" data-order="32,191,216">32,191,216 BTC</td>
                    <td class="text-right" data-search="1,826" data-order="1826.7877820259402988006869372">1,826 sats</td>
                    <td class="text-right" data-search="1,762,176,000,000" data-order="1,762,176,000,000">1,762,176,000,000 PLN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">25</td>
                    <td class="text-left" data-search="ILS" data-order="ILS">
                        <img src="/images/currency/ILS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ILS
                    </td>
                    <td class="text-right" data-search="29,796,019" data-order="29,796,019">29,796,019 BTC</td>
                    <td class="text-right" data-search="2,120" data-order="2120.9938774278760706810231134">2,120 sats</td>
                    <td class="text-right" data-search="1,404,814,000,000" data-order="1,404,814,000,000">1,404,814,000,000 ILS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">26</td>
                    <td class="text-left" data-search="TRY" data-order="TRY">
                        <img src="/images/currency/TRY.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TRY
                    </td>
                    <td class="text-right" data-search="29,248,925" data-order="29,248,925">29,248,925 BTC</td>
                    <td class="text-right" data-search="865" data-order="865.7146389435654831383433964">865 sats</td>
                    <td class="text-right" data-search="3,378,587,263,000" data-order="3,378,587,263,000">3,378,587,263,000 TRY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">27</td>
                    <td class="text-left" data-search="CLP" data-order="CLP">
                        <img src="/images/currency/CLP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CLP
                    </td>
                    <td class="text-right" data-search="25,326,207" data-order="25,326,207">25,326,207 BTC</td>
                    <td class="text-right" data-search="9" data-order="9.34425689442614399824872115">9 sats</td>
                    <td class="text-right" data-search="271,035,000,000,000" data-order="271,035,000,000,000">271,035,000,000,000 CLP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">28</td>
                    <td class="text-left" data-search="EGP" data-order="EGP">
                        <img src="/images/currency/EGP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />EGP
                    </td>
                    <td class="text-right" data-search="21,948,509" data-order="21,948,509">21,948,509 BTC</td>
                    <td class="text-right" data-search="461" data-order="461.37587695013946716665298456">461 sats</td>
                    <td class="text-right" data-search="4,757,186,000,000" data-order="4,757,186,000,000">4,757,186,000,000 EGP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">29</td>
                    <td class="text-left" data-search="PHP" data-order="PHP">
                        <img src="/images/currency/PHP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PHP
                    </td>
                    <td class="text-right" data-search="20,219,467" data-order="20,219,467">20,219,467 BTC</td>
                    <td class="text-right" data-search="149" data-order="149.03464161785469841369122575">149 sats</td>
                    <td class="text-right" data-search="13,566,958,000,000" data-order="13,566,958,000,000">13,566,958,000,000 PHP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">30</td>
                    <td class="text-left" data-search="NOK" data-order="NOK">
                        <img src="/images/currency/NOK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NOK
                    </td>
                    <td class="text-right" data-search="19,672,884" data-order="19,672,884">19,672,884 BTC</td>
                    <td class="text-right" data-search="759" data-order="759.43444669394751489200183863">759 sats</td>
                    <td class="text-right" data-search="2,590,465,000,000" data-order="2,590,465,000,000">2,590,465,000,000 NOK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">31</td>
                    <td class="text-left" data-search="BTC" data-order="BTC">
                        <img src="/images/currency/BTC.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BTC
                    </td>
                    <td class="text-right" data-search="18,530,593" data-order="18,530,593">18,530,593 BTC</td>
                    <td class="text-right" data-search="100,000,000" data-order="100000000">100,000,000 sats</td>
                    <td class="text-right" data-search="18,530,593" data-order="18,530,593">18,530,593 BTC</td>
                    <td class="text-right">21,000,000 BTC</td>
                </tr>
                <tr>
                    <td class="text-left">32</td>
                    <td class="text-left" data-search="ZAR" data-order="ZAR">
                        <img src="/images/currency/ZAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ZAR
                    </td>
                    <td class="text-right" data-search="18,235,740" data-order="18,235,740">18,235,740 BTC</td>
                    <td class="text-right" data-search="444" data-order="444.69973245783881886799307494">444 sats</td>
                    <td class="text-right" data-search="4,100,686,000,000" data-order="4,100,686,000,000">4,100,686,000,000 ZAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">33</td>
                    <td class="text-left" data-search="DKK" data-order="DKK">
                        <img src="/images/currency/DKK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />DKK
                    </td>
                    <td class="text-right" data-search="18,044,154" data-order="18,044,154">18,044,154 BTC</td>
                    <td class="text-right" data-search="1,130" data-order="1130.5201885432598488479843895">1,130 sats</td>
                    <td class="text-right" data-search="1,596,093,000,000" data-order="1,596,093,000,000">1,596,093,000,000 DKK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">34</td>
                    <td class="text-left" data-search="NZD" data-order="NZD">
                        <img src="/images/currency/NZD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NZD
                    </td>
                    <td class="text-right" data-search="17,083,460" data-order="17,083,460">17,083,460 BTC</td>
                    <td class="text-right" data-search="4,814" data-order="4814.8735778452380992786683607">4,814 sats</td>
                    <td class="text-right" data-search="354,806,000,000" data-order="354,806,000,000">354,806,000,000 NZD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">35</td>
                    <td class="text-left" data-search="CZK" data-order="CZK">
                        <img src="/images/currency/CZK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CZK
                    </td>
                    <td class="text-right" data-search="16,357,140" data-order="16,357,140">16,357,140 BTC</td>
                    <td class="text-right" data-search="309" data-order="309.05171075335862514760067193">309 sats</td>
                    <td class="text-right" data-search="5,292,687,000,000" data-order="5,292,687,000,000">5,292,687,000,000 CZK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">36</td>
                    <td class="text-left" data-search="QAR" data-order="QAR">
                        <img src="/images/currency/QAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />QAR
                    </td>
                    <td class="text-right" data-search="11,499,580" data-order="11,499,580">11,499,580 BTC</td>
                    <td class="text-right" data-search="1,984" data-order="1984.5852779324764391146308317">1,984 sats</td>
                    <td class="text-right" data-search="579,445,000,000" data-order="579,445,000,000">579,445,000,000 QAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">37</td>
                    <td class="text-left" data-search="MAD" data-order="MAD">
                        <img src="/images/currency/MAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MAD
                    </td>
                    <td class="text-right" data-search="11,305,399" data-order="11,305,399">11,305,399 BTC</td>
                    <td class="text-right" data-search="782" data-order="782.61885509123357422415926266">782 sats</td>
                    <td class="text-right" data-search="1,444,560,000,000" data-order="1,444,560,000,000">1,444,560,000,000 MAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">38</td>
                    <td class="text-left" data-search="PKR" data-order="PKR">
                        <img src="/images/currency/PKR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PKR
                    </td>
                    <td class="text-right" data-search="11,193,195" data-order="11,193,195">11,193,195 BTC</td>
                    <td class="text-right" data-search="45" data-order="45.035422392703713836262814682">45 sats</td>
                    <td class="text-right" data-search="24,854,203,000,000" data-order="24,854,203,000,000">24,854,203,000,000 PKR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">39</td>
                    <td class="text-left" data-search="COP" data-order="COP">
                        <img src="/images/currency/COP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />COP
                    </td>
                    <td class="text-right" data-search="11,087,269" data-order="11,087,269">11,087,269 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.8573320681641712245009785926">1 sats</td>
                    <td class="text-right" data-search="596,946,000,000,000" data-order="596,946,000,000,000">596,946,000,000,000 COP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">40</td>
                    <td class="text-left" data-search="KWD" data-order="KWD">
                        <img src="/images/currency/KWD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KWD
                    </td>
                    <td class="text-right" data-search="9,537,886" data-order="9,537,886">9,537,886 BTC</td>
                    <td class="text-right" data-search="23,646" data-order="23646.673248225368639705010846">23,646 sats</td>
                    <td class="text-right" data-search="40,335,000,000" data-order="40,335,000,000">40,335,000,000 KWD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">41</td>
                    <td class="text-left" data-search="LBP" data-order="LBP">
                        <img src="/images/currency/LBP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LBP
                    </td>
                    <td class="text-right" data-search="9,401,916" data-order="9,401,916">9,401,916 BTC</td>
                    <td class="text-right" data-search="4" data-order="4.7780519980497242184288521839">4 sats</td>
                    <td class="text-right" data-search="196,773,000,000,000" data-order="196,773,000,000,000">196,773,000,000,000 LBP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">42</td>
                    <td class="text-left" data-search="RON" data-order="RON">
                        <img src="/images/currency/RON.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RON
                    </td>
                    <td class="text-right" data-search="7,979,573" data-order="7,979,573">7,979,573 BTC</td>
                    <td class="text-right" data-search="1,730" data-order="1730.9307448545318667162339744">1,730 sats</td>
                    <td class="text-right" data-search="460,999,000,000" data-order="460,999,000,000">460,999,000,000 RON</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">43</td>
                    <td class="text-left" data-search="HUF" data-order="HUF">
                        <img src="/images/currency/HUF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HUF
                    </td>
                    <td class="text-right" data-search="6,955,609" data-order="6,955,609">6,955,609 BTC</td>
                    <td class="text-right" data-search="22" data-order="22.967933313100609217395126872">22 sats</td>
                    <td class="text-right" data-search="30,284,000,000,000" data-order="30,284,000,000,000">30,284,000,000,000 HUF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">44</td>
                    <td class="text-left" data-search="IQD" data-order="IQD">
                        <img src="/images/currency/IQD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />IQD
                    </td>
                    <td class="text-right" data-search="6,741,751" data-order="6,741,751">6,741,751 BTC</td>
                    <td class="text-right" data-search="6" data-order="6.072227236296393402454669928">6 sats</td>
                    <td class="text-right" data-search="111,026,000,000,000" data-order="111,026,000,000,000">111,026,000,000,000 IQD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">45</td>
                    <td class="text-left" data-search="ARS" data-order="ARS">
                        <img src="/images/currency/ARS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ARS
                    </td>
                    <td class="text-right" data-search="6,472,166" data-order="6,472,166">6,472,166 BTC</td>
                    <td class="text-right" data-search="92" data-order="92.47581376385759001820858472">92 sats</td>
                    <td class="text-right" data-search="6,998,766,000,000" data-order="6,998,766,000,000">6,998,766,000,000 ARS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">46</td>
                    <td class="text-left" data-search="MOP" data-order="MOP">
                        <img src="/images/currency/MOP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MOP
                    </td>
                    <td class="text-right" data-search="6,350,372" data-order="6,350,372">6,350,372 BTC</td>
                    <td class="text-right" data-search="905" data-order="905.0265906543537637354705619">905 sats</td>
                    <td class="text-right" data-search="701,678,000,000" data-order="701,678,000,000">701,678,000,000 MOP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">47</td>
                    <td class="text-left" data-search="NGN" data-order="NGN">
                        <img src="/images/currency/NGN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NGN
                    </td>
                    <td class="text-right" data-search="6,332,687" data-order="6,332,687">6,332,687 BTC</td>
                    <td class="text-right" data-search="18" data-order="18.990485239564310887606778197">18 sats</td>
                    <td class="text-right" data-search="33,346,630,000,000" data-order="33,346,630,000,000">33,346,630,000,000 NGN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">48</td>
                    <td class="text-left" data-search="LYD" data-order="LYD">
                        <img src="/images/currency/LYD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LYD
                    </td>
                    <td class="text-right" data-search="5,877,674" data-order="5,877,674">5,877,674 BTC</td>
                    <td class="text-right" data-search="5,311" data-order="5311.7107716093566059222065101">5,311 sats</td>
                    <td class="text-right" data-search="110,655,000,000" data-order="110,655,000,000">110,655,000,000 LYD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">49</td>
                    <td class="text-left" data-search="PEN" data-order="PEN">
                        <img src="/images/currency/PEN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PEN
                    </td>
                    <td class="text-right" data-search="5,422,764" data-order="5,422,764">5,422,764 BTC</td>
                    <td class="text-right" data-search="1,998" data-order="1998.6011386497451389684694622">1,998 sats</td>
                    <td class="text-right" data-search="271,328,000,000" data-order="271,328,000,000">271,328,000,000 PEN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">50</td>
                    <td class="text-left" data-search="BGN" data-order="BGN">
                        <img src="/images/currency/BGN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BGN
                    </td>
                    <td class="text-right" data-search="4,669,554" data-order="4,669,554">4,669,554 BTC</td>
                    <td class="text-right" data-search="4,306" data-order="4306.7931164699956722696628951">4,306 sats</td>
                    <td class="text-right" data-search="108,423,000,000" data-order="108,423,000,000">108,423,000,000 BGN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">51</td>
                    <td class="text-left" data-search="UAH" data-order="UAH">
                        <img src="/images/currency/UAH.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UAH
                    </td>
                    <td class="text-right" data-search="4,375,109" data-order="4,375,109">4,375,109 BTC</td>
                    <td class="text-right" data-search="253" data-order="253.89738003205707090507402654">253 sats</td>
                    <td class="text-right" data-search="1,723,180,000,000" data-order="1,723,180,000,000">1,723,180,000,000 UAH</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">52</td>
                    <td class="text-left" data-search="KZT" data-order="KZT">
                        <img src="/images/currency/KZT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KZT
                    </td>
                    <td class="text-right" data-search="4,036,318" data-order="4,036,318">4,036,318 BTC</td>
                    <td class="text-right" data-search="16" data-order="16.692753322026725556193160512">16 sats</td>
                    <td class="text-right" data-search="24,180,061,000,000" data-order="24,180,061,000,000">24,180,061,000,000 KZT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">53</td>
                    <td class="text-left" data-search="JOD" data-order="JOD">
                        <img src="/images/currency/JOD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JOD
                    </td>
                    <td class="text-right" data-search="3,665,256" data-order="3,665,256">3,665,256 BTC</td>
                    <td class="text-right" data-search="10,191" data-order="10191.174561650553070237302852">10,191 sats</td>
                    <td class="text-right" data-search="35,965,000,000" data-order="35,965,000,000">35,965,000,000 JOD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">54</td>
                    <td class="text-left" data-search="OMR" data-order="OMR">
                        <img src="/images/currency/OMR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />OMR
                    </td>
                    <td class="text-right" data-search="3,599,804" data-order="3,599,804">3,599,804 BTC</td>
                    <td class="text-right" data-search="18,789" data-order="18789.101963151442732423923154">18,789 sats</td>
                    <td class="text-right" data-search="19,159,000,000" data-order="19,159,000,000">19,159,000,000 OMR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">55</td>
                    <td class="text-left" data-search="LKR" data-order="LKR">
                        <img src="/images/currency/LKR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LKR
                    </td>
                    <td class="text-right" data-search="3,081,170" data-order="3,081,170">3,081,170 BTC</td>
                    <td class="text-right" data-search="39" data-order="39.208442268190570707108040789">39 sats</td>
                    <td class="text-right" data-search="7,858,436,000,000" data-order="7,858,436,000,000">7,858,436,000,000 LKR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">56</td>
                    <td class="text-left" data-search="GTQ" data-order="GTQ">
                        <img src="/images/currency/GTQ.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GTQ
                    </td>
                    <td class="text-right" data-search="2,913,287" data-order="2,913,287">2,913,287 BTC</td>
                    <td class="text-right" data-search="926" data-order="926.8510450865857655329176389">926 sats</td>
                    <td class="text-right" data-search="314,321,000,000" data-order="314,321,000,000">314,321,000,000 GTQ</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">57</td>
                    <td class="text-left" data-search="BHD" data-order="BHD">
                        <img src="/images/currency/BHD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BHD
                    </td>
                    <td class="text-right" data-search="2,724,565" data-order="2,724,565">2,724,565 BTC</td>
                    <td class="text-right" data-search="19,161" data-order="19161.43717384816630979652359">19,161 sats</td>
                    <td class="text-right" data-search="14,219,000,000" data-order="14,219,000,000">14,219,000,000 BHD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">58</td>
                    <td class="text-left" data-search="KES" data-order="KES">
                        <img src="/images/currency/KES.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KES
                    </td>
                    <td class="text-right" data-search="2,557,777" data-order="2,557,777">2,557,777 BTC</td>
                    <td class="text-right" data-search="66" data-order="66.48808256607398058923932975">66 sats</td>
                    <td class="text-right" data-search="3,846,971,000,000" data-order="3,846,971,000,000">3,846,971,000,000 KES</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">59</td>
                    <td class="text-left" data-search="XOF" data-order="XOF">
                        <img src="/images/currency/XOF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XOF
                    </td>
                    <td class="text-right" data-search="2,403,469" data-order="2,403,469">2,403,469 BTC</td>
                    <td class="text-right" data-search="12" data-order="12.949724214846359892346904938">12 sats</td>
                    <td class="text-right" data-search="18,560,000,000,000" data-order="18,560,000,000,000">18,560,000,000,000 XOF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">60</td>
                    <td class="text-left" data-search="RSD" data-order="RSD">
                        <img src="/images/currency/RSD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RSD
                    </td>
                    <td class="text-right" data-search="2,294,859" data-order="2,294,859">2,294,859 BTC</td>
                    <td class="text-right" data-search="71" data-order="71.572144560051379256701609198">71 sats</td>
                    <td class="text-right" data-search="3,206,358,000,000" data-order="3,206,358,000,000">3,206,358,000,000 RSD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">61</td>
                    <td class="text-left" data-search="DOP" data-order="DOP">
                        <img src="/images/currency/DOP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />DOP
                    </td>
                    <td class="text-right" data-search="2,224,191" data-order="2,224,191">2,224,191 BTC</td>
                    <td class="text-right" data-search="123" data-order="123.58306555580545095568379734">123 sats</td>
                    <td class="text-right" data-search="1,799,754,000,000" data-order="1,799,754,000,000">1,799,754,000,000 DOP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">62</td>
                    <td class="text-left" data-search="BOB" data-order="BOB">
                        <img src="/images/currency/BOB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BOB
                    </td>
                    <td class="text-right" data-search="2,183,882" data-order="2,183,882">2,183,882 BTC</td>
                    <td class="text-right" data-search="1,046" data-order="1046.64578737282690580660026">1,046 sats</td>
                    <td class="text-right" data-search="208,655,338,000" data-order="208,655,338,000">208,655,338,000 BOB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">63</td>
                    <td class="text-left" data-search="HRK" data-order="HRK">
                        <img src="/images/currency/HRK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HRK
                    </td>
                    <td class="text-right" data-search="1,724,549" data-order="1,724,549">1,724,549 BTC</td>
                    <td class="text-right" data-search="1,111" data-order="1111.3358901502771666924622448">1,111 sats</td>
                    <td class="text-right" data-search="155,178,000,000" data-order="155,178,000,000">155,178,000,000 HRK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">64</td>
                    <td class="text-left" data-search="CRC" data-order="CRC">
                        <img src="/images/currency/CRC.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CRC
                    </td>
                    <td class="text-right" data-search="1,532,957" data-order="1,532,957">1,532,957 BTC</td>
                    <td class="text-right" data-search="11" data-order="11.918208870182559248334119462">11 sats</td>
                    <td class="text-right" data-search="12,862,308,000,000" data-order="12,862,308,000,000">12,862,308,000,000 CRC</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">65</td>
                    <td class="text-left" data-search="BDT" data-order="BDT">
                        <img src="/images/currency/BDT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BDT
                    </td>
                    <td class="text-right" data-search="1,480,596" data-order="1,480,596">1,480,596 BTC</td>
                    <td class="text-right" data-search="85" data-order="85.14987141518417337633314156">85 sats</td>
                    <td class="text-right" data-search="1,738,812,000,000" data-order="1,738,812,000,000">1,738,812,000,000 BDT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">66</td>
                    <td class="text-left" data-search="BYN" data-order="BYN">
                        <img src="/images/currency/BYN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BYN
                    </td>
                    <td class="text-right" data-search="1,384,181" data-order="1,384,181">1,384,181 BTC</td>
                    <td class="text-right" data-search="2,747" data-order="2747.0991639624604190024293763">2,747 sats</td>
                    <td class="text-right" data-search="50,387,000,000" data-order="50,387,000,000">50,387,000,000 BYN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">67</td>
                    <td class="text-left" data-search="HNL" data-order="HNL">
                        <img src="/images/currency/HNL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HNL
                    </td>
                    <td class="text-right" data-search="1,237,977" data-order="1,237,977">1,237,977 BTC</td>
                    <td class="text-right" data-search="294" data-order="294.09181967744621987551996895">294 sats</td>
                    <td class="text-right" data-search="420,949,000,000" data-order="420,949,000,000">420,949,000,000 HNL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">68</td>
                    <td class="text-left" data-search="AOA" data-order="AOA">
                        <img src="/images/currency/AOA.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AOA
                    </td>
                    <td class="text-right" data-search="1,233,735" data-order="1,233,735">1,233,735 BTC</td>
                    <td class="text-right" data-search="10" data-order="10.857828428326330021880383223">10 sats</td>
                    <td class="text-right" data-search="11,362,633,000,000" data-order="11,362,633,000,000">11,362,633,000,000 AOA</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">69</td>
                    <td class="text-left" data-search="SDG" data-order="SDG">
                        <img src="/images/currency/SDG.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SDG
                    </td>
                    <td class="text-right" data-search="1,209,724" data-order="1,209,724">1,209,724 BTC</td>
                    <td class="text-right" data-search="130" data-order="130.65949087857607135860036677">130 sats</td>
                    <td class="text-right" data-search="925,860,000,000" data-order="925,860,000,000">925,860,000,000 SDG</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">70</td>
                    <td class="text-left" data-search="MUR" data-order="MUR">
                        <img src="/images/currency/MUR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MUR
                    </td>
                    <td class="text-right" data-search="1,168,418" data-order="1,168,418">1,168,418 BTC</td>
                    <td class="text-right" data-search="180" data-order="180.82787481051438848768319275">180 sats</td>
                    <td class="text-right" data-search="646,149,000,000" data-order="646,149,000,000">646,149,000,000 MUR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">71</td>
                    <td class="text-left" data-search="AZN" data-order="AZN">
                        <img src="/images/currency/AZN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AZN
                    </td>
                    <td class="text-right" data-search="1,111,646" data-order="1,111,646">1,111,646 BTC</td>
                    <td class="text-right" data-search="4,240" data-order="4240.6558866603919957047701628">4,240 sats</td>
                    <td class="text-right" data-search="26,214,000,000" data-order="26,214,000,000">26,214,000,000 AZN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">72</td>
                    <td class="text-left" data-search="ISK" data-order="ISK">
                        <img src="/images/currency/ISK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ISK
                    </td>
                    <td class="text-right" data-search="1,097,260" data-order="1,097,260">1,097,260 BTC</td>
                    <td class="text-right" data-search="51" data-order="51.2259367501851877033787304">51 sats</td>
                    <td class="text-right" data-search="2,142,000,000,000" data-order="2,142,000,000,000">2,142,000,000,000 ISK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">73</td>
                    <td class="text-left" data-search="PYG" data-order="PYG">
                        <img src="/images/currency/PYG.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PYG
                    </td>
                    <td class="text-right" data-search="1,088,099" data-order="1,088,099">1,088,099 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.0280360187784413828744962881">1 sats</td>
                    <td class="text-right" data-search="105,842,528,000,000" data-order="105,842,528,000,000">105,842,528,000,000 PYG</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">74</td>
                    <td class="text-left" data-search="TTD" data-order="TTD">
                        <img src="/images/currency/TTD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TTD
                    </td>
                    <td class="text-right" data-search="1,001,987" data-order="1,001,987">1,001,987 BTC</td>
                    <td class="text-right" data-search="1,062" data-order="1062.9018967166914765481218257">1,062 sats</td>
                    <td class="text-right" data-search="94,269,000,000" data-order="94,269,000,000">94,269,000,000 TTD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">75</td>
                    <td class="text-left" data-search="ALL" data-order="ALL">
                        <img src="/images/currency/ALL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ALL
                    </td>
                    <td class="text-right" data-search="955,631" data-order="955,631">955,631 BTC</td>
                    <td class="text-right" data-search="67" data-order="67.897088347776235753773937605">67 sats</td>
                    <td class="text-right" data-search="1,407,470,000,000" data-order="1,407,470,000,000">1,407,470,000,000 ALL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">76</td>
                    <td class="text-left" data-search="TZS" data-order="TZS">
                        <img src="/images/currency/TZS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TZS
                    </td>
                    <td class="text-right" data-search="935,043" data-order="935,043">935,043 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.1164969284506836060157862419">3 sats</td>
                    <td class="text-right" data-search="30,003,000,000,000" data-order="30,003,000,000,000">30,003,000,000,000 TZS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">77</td>
                    <td class="text-left" data-search="BND" data-order="BND">
                        <img src="/images/currency/BND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BND
                    </td>
                    <td class="text-right" data-search="806,286" data-order="806,286">806,286 BTC</td>
                    <td class="text-right" data-search="5,296" data-order="5296.8448233671980033126085083">5,296 sats</td>
                    <td class="text-right" data-search="15,222,000,000" data-order="15,222,000,000">15,222,000,000 BND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">78</td>
                    <td class="text-left" data-search="ZMK" data-order="ZMK">
                        <img src="/images/currency/ZMK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ZMK
                    </td>
                    <td class="text-right" data-search="749,530" data-order="749,530">749,530 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.802776021732487008853845532">&lt; 1 sats</td>
                    <td class="text-right" data-search="93,367,280,000,000" data-order="93,367,280,000,000">93,367,280,000,000 ZMK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">79</td>
                    <td class="text-left" data-search="GEL" data-order="GEL">
                        <img src="/images/currency/GEL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GEL
                    </td>
                    <td class="text-right" data-search="640,028" data-order="640,028">640,028 BTC</td>
                    <td class="text-right" data-search="2,229" data-order="2229.9624987208976166521438969">2,229 sats</td>
                    <td class="text-right" data-search="28,701,290,000" data-order="28,701,290,000">28,701,290,000 GEL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">80</td>
                    <td class="text-left" data-search="LAK" data-order="LAK">
                        <img src="/images/currency/LAK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LAK
                    </td>
                    <td class="text-right" data-search="632,028" data-order="632,028">632,028 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.7807617653924205323572438057">&lt; 1 sats</td>
                    <td class="text-right" data-search="80,950,200,000,000" data-order="80,950,200,000,000">80,950,200,000,000 LAK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">81</td>
                    <td class="text-left" data-search="CDF" data-order="CDF">
                        <img src="/images/currency/CDF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CDF
                    </td>
                    <td class="text-right" data-search="621,352" data-order="621,352">621,352 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.6773277760814520139620499542">3 sats</td>
                    <td class="text-right" data-search="16,896,835,000,000" data-order="16,896,835,000,000">16,896,835,000,000 CDF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">82</td>
                    <td class="text-left" data-search="UYU" data-order="UYU">
                        <img src="/images/currency/UYU.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UYU
                    </td>
                    <td class="text-right" data-search="608,674" data-order="608,674">608,674 BTC</td>
                    <td class="text-right" data-search="168" data-order="168.64090001163663216632898691">168 sats</td>
                    <td class="text-right" data-search="360,929,000,000" data-order="360,929,000,000">360,929,000,000 UYU</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">83</td>
                    <td class="text-left" data-search="BSD" data-order="BSD">
                        <img src="/images/currency/BSD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BSD
                    </td>
                    <td class="text-right" data-search="589,612" data-order="589,612">589,612 BTC</td>
                    <td class="text-right" data-search="7,227" data-order="7227.4031192196713028529306534">7,227 sats</td>
                    <td class="text-right" data-search="8,158,000,000" data-order="8,158,000,000">8,158,000,000 BSD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">84</td>
                    <td class="text-left" data-search="UGX" data-order="UGX">
                        <img src="/images/currency/UGX.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UGX
                    </td>
                    <td class="text-right" data-search="583,860" data-order="583,860">583,860 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.9323520558851399266282753674">1 sats</td>
                    <td class="text-right" data-search="30,215,000,000,000" data-order="30,215,000,000,000">30,215,000,000,000 UGX</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">85</td>
                    <td class="text-left" data-search="BAM" data-order="BAM">
                        <img src="/images/currency/BAM.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BAM
                    </td>
                    <td class="text-right" data-search="559,464" data-order="559,464">559,464 BTC</td>
                    <td class="text-right" data-search="4,313" data-order="4313.1891084319713898109055398">4,313 sats</td>
                    <td class="text-right" data-search="12,971,000,000" data-order="12,971,000,000">12,971,000,000 BAM</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">86</td>
                    <td class="text-left" data-search="BWP" data-order="BWP">
                        <img src="/images/currency/BWP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BWP
                    </td>
                    <td class="text-right" data-search="552,888" data-order="552,888">552,888 BTC</td>
                    <td class="text-right" data-search="633" data-order="633.81999434178079983448792233">633 sats</td>
                    <td class="text-right" data-search="87,231,000,000" data-order="87,231,000,000">87,231,000,000 BWP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">87</td>
                    <td class="text-left" data-search="NAD" data-order="NAD">
                        <img src="/images/currency/NAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NAD
                    </td>
                    <td class="text-right" data-search="551,242" data-order="551,242">551,242 BTC</td>
                    <td class="text-right" data-search="443" data-order="443.02779826565064369272747125">443 sats</td>
                    <td class="text-right" data-search="124,426,000,000" data-order="124,426,000,000">124,426,000,000 NAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">88</td>
                    <td class="text-left" data-search="MZN" data-order="MZN">
                        <img src="/images/currency/MZN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MZN
                    </td>
                    <td class="text-right" data-search="515,673" data-order="515,673">515,673 BTC</td>
                    <td class="text-right" data-search="98" data-order="98.68141430682895435427568996">98 sats</td>
                    <td class="text-right" data-search="522,563,000,000" data-order="522,563,000,000">522,563,000,000 MZN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">89</td>
                    <td class="text-left" data-search="MNT" data-order="MNT">
                        <img src="/images/currency/MNT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MNT
                    </td>
                    <td class="text-right" data-search="511,811" data-order="511,811">511,811 BTC</td>
                    <td class="text-right" data-search="2" data-order="2.5297330203158666171869958196">2 sats</td>
                    <td class="text-right" data-search="20,231,823,000,000" data-order="20,231,823,000,000">20,231,823,000,000 MNT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">90</td>
                    <td class="text-left" data-search="MKD" data-order="MKD">
                        <img src="/images/currency/MKD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MKD
                    </td>
                    <td class="text-right" data-search="495,061" data-order="495,061">495,061 BTC</td>
                    <td class="text-right" data-search="136" data-order="136.91249761415561686089655819">136 sats</td>
                    <td class="text-right" data-search="361,589,000,000" data-order="361,589,000,000">361,589,000,000 MKD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">91</td>
                    <td class="text-left" data-search="XPF" data-order="XPF">
                        <img src="/images/currency/XPF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XPF
                    </td>
                    <td class="text-right" data-search="438,393" data-order="438,393">438,393 BTC</td>
                    <td class="text-right" data-search="70" data-order="70.494601274420685214188157434">70 sats</td>
                    <td class="text-right" data-search="621,882,000,000" data-order="621,882,000,000">621,882,000,000 XPF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">92</td>
                    <td class="text-left" data-search="MDL" data-order="MDL">
                        <img src="/images/currency/MDL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MDL
                    </td>
                    <td class="text-right" data-search="419,582" data-order="419,582">419,582 BTC</td>
                    <td class="text-right" data-search="423" data-order="423.63662417057044000476622112">423 sats</td>
                    <td class="text-right" data-search="99,043,000,000" data-order="99,043,000,000">99,043,000,000 MDL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">93</td>
                    <td class="text-left" data-search="AMD" data-order="AMD">
                        <img src="/images/currency/AMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AMD
                    </td>
                    <td class="text-right" data-search="302,143" data-order="302,143">302,143 BTC</td>
                    <td class="text-right" data-search="14" data-order="14.639165436546349422958381893">14 sats</td>
                    <td class="text-right" data-search="2,063,935,000,000" data-order="2,063,935,000,000">2,063,935,000,000 AMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">94</td>
                    <td class="text-left" data-search="NIO" data-order="NIO">
                        <img src="/images/currency/NIO.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NIO
                    </td>
                    <td class="text-right" data-search="276,379" data-order="276,379">276,379 BTC</td>
                    <td class="text-right" data-search="208" data-order="208.11843175529770742181334075">208 sats</td>
                    <td class="text-right" data-search="132,799,000,000" data-order="132,799,000,000">132,799,000,000 NIO</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">95</td>
                    <td class="text-left" data-search="JMD" data-order="JMD">
                        <img src="/images/currency/JMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JMD
                    </td>
                    <td class="text-right" data-search="276,358" data-order="276,358">276,358 BTC</td>
                    <td class="text-right" data-search="49" data-order="49.288089915794329804390948325">49 sats</td>
                    <td class="text-right" data-search="560,699,720,000" data-order="560,699,720,000">560,699,720,000 JMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">96</td>
                    <td class="text-left" data-search="GNF" data-order="GNF">
                        <img src="/images/currency/GNF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GNF
                    </td>
                    <td class="text-right" data-search="249,208" data-order="249,208">249,208 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.7392276367024958690061405337">&lt; 1 sats</td>
                    <td class="text-right" data-search="33,712,000,000,000" data-order="33,712,000,000,000">33,712,000,000,000 GNF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">97</td>
                    <td class="text-left" data-search="MGA" data-order="MGA">
                        <img src="/images/currency/MGA.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MGA
                    </td>
                    <td class="text-right" data-search="232,316" data-order="232,316">232,316 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.8518579622239864831362756448">1 sats</td>
                    <td class="text-right" data-search="12,545,000,000,000" data-order="12,545,000,000,000">12,545,000,000,000 MGA</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">98</td>
                    <td class="text-left" data-search="RWF" data-order="RWF">
                        <img src="/images/currency/RWF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RWF
                    </td>
                    <td class="text-right" data-search="194,915" data-order="194,915">194,915 BTC</td>
                    <td class="text-right" data-search="7" data-order="7.4112311909668801527395458609">7 sats</td>
                    <td class="text-right" data-search="2,630,000,000,000" data-order="2,630,000,000,000">2,630,000,000,000 RWF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">99</td>
                    <td class="text-left" data-search="KGS" data-order="KGS">
                        <img src="/images/currency/KGS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KGS
                    </td>
                    <td class="text-right" data-search="180,566" data-order="180,566">180,566 BTC</td>
                    <td class="text-right" data-search="88" data-order="88.33269753801181132061402886">88 sats</td>
                    <td class="text-right" data-search="204,416,000,000" data-order="204,416,000,000">204,416,000,000 KGS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">100</td>
                    <td class="text-left" data-search="MVR" data-order="MVR">
                        <img src="/images/currency/MVR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MVR
                    </td>
                    <td class="text-right" data-search="173,536" data-order="173,536">173,536 BTC</td>
                    <td class="text-right" data-search="468" data-order="468.90156822841776813787807245">468 sats</td>
                    <td class="text-right" data-search="37,009,000,000" data-order="37,009,000,000">37,009,000,000 MVR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">101</td>
                    <td class="text-left" data-search="CVE" data-order="CVE">
                        <img src="/images/currency/CVE.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CVE
                    </td>
                    <td class="text-right" data-search="151,682" data-order="151,682">151,682 BTC</td>
                    <td class="text-right" data-search="76" data-order="76.343585122241626896144322594">76 sats</td>
                    <td class="text-right" data-search="198,684,000,000" data-order="198,684,000,000">198,684,000,000 CVE</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">102</td>
                    <td class="text-left" data-search="GYD" data-order="GYD">
                        <img src="/images/currency/GYD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GYD
                    </td>
                    <td class="text-right" data-search="144,010" data-order="144,010">144,010 BTC</td>
                    <td class="text-right" data-search="34" data-order="34.534848322716350630988924758">34 sats</td>
                    <td class="text-right" data-search="417,000,000,000" data-order="417,000,000,000">417,000,000,000 GYD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">103</td>
                    <td class="text-left" data-search="MWK" data-order="MWK">
                        <img src="/images/currency/MWK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MWK
                    </td>
                    <td class="text-right" data-search="139,207" data-order="139,207">139,207 BTC</td>
                    <td class="text-right" data-search="9" data-order="9.570790873205108467759782566">9 sats</td>
                    <td class="text-right" data-search="1,454,500,000,000" data-order="1,454,500,000,000">1,454,500,000,000 MWK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">104</td>
                    <td class="text-left" data-search="BTN" data-order="BTN">
                        <img src="/images/currency/BTN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BTN
                    </td>
                    <td class="text-right" data-search="136,065" data-order="136,065">136,065 BTC</td>
                    <td class="text-right" data-search="96" data-order="96.93874714586756379117159402">96 sats</td>
                    <td class="text-right" data-search="140,362,000,000" data-order="140,362,000,000">140,362,000,000 BTN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">105</td>
                    <td class="text-left" data-search="XAF" data-order="XAF">
                        <img src="/images/currency/XAF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XAF
                    </td>
                    <td class="text-right" data-search="133,285" data-order="133,285">133,285 BTC</td>
                    <td class="text-right" data-search="12" data-order="12.861602811220201374605527947">12 sats</td>
                    <td class="text-right" data-search="1,036,298,000,000" data-order="1,036,298,000,000">1,036,298,000,000 XAF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">106</td>
                    <td class="text-left" data-search="BIF" data-order="BIF">
                        <img src="/images/currency/BIF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BIF
                    </td>
                    <td class="text-right" data-search="82,189" data-order="82,189">82,189 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.7247167068003650252170398012">3 sats</td>
                    <td class="text-right" data-search="2,206,587,000,000" data-order="2,206,587,000,000">2,206,587,000,000 BIF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">107</td>
                    <td class="text-left" data-search="SZL" data-order="SZL">
                        <img src="/images/currency/SZL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SZL
                    </td>
                    <td class="text-right" data-search="81,155" data-order="81,155">81,155 BTC</td>
                    <td class="text-right" data-search="443" data-order="443.21045870957819881008627908">443 sats</td>
                    <td class="text-right" data-search="18,310,700,000" data-order="18,310,700,000">18,310,700,000 SZL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">108</td>
                    <td class="text-left" data-search="SCR" data-order="SCR">
                        <img src="/images/currency/SCR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SCR
                    </td>
                    <td class="text-right" data-search="80,984" data-order="80,984">80,984 BTC</td>
                    <td class="text-right" data-search="373" data-order="373.78372863636015478047929347">373 sats</td>
                    <td class="text-right" data-search="21,666,000,000" data-order="21,666,000,000">21,666,000,000 SCR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">109</td>
                    <td class="text-left" data-search="SLL" data-order="SLL">
                        <img src="/images/currency/SLL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SLL
                    </td>
                    <td class="text-right" data-search="73,985" data-order="73,985">73,985 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.7276888383188511539607770415">&lt; 1 sats</td>
                    <td class="text-right" data-search="10,167,135,000,000" data-order="10,167,135,000,000">10,167,135,000,000 SLL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">110</td>
                    <td class="text-left" data-search="GMD" data-order="GMD">
                        <img src="/images/currency/GMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GMD
                    </td>
                    <td class="text-right" data-search="65,550" data-order="65,550">65,550 BTC</td>
                    <td class="text-right" data-search="139" data-order="139.63083971333758352199968376">139 sats</td>
                    <td class="text-right" data-search="46,945,000,000" data-order="46,945,000,000">46,945,000,000 GMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">111</td>
                    <td class="text-left" data-search="LSL" data-order="LSL">
                        <img src="/images/currency/LSL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LSL
                    </td>
                    <td class="text-right" data-search="55,237" data-order="55,237">55,237 BTC</td>
                    <td class="text-right" data-search="443" data-order="443.0276624540558368848171192">443 sats</td>
                    <td class="text-right" data-search="12,468,000,000" data-order="12,468,000,000">12,468,000,000 LSL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">112</td>
                    <td class="text-left" data-search="LRD" data-order="LRD">
                        <img src="/images/currency/LRD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LRD
                    </td>
                    <td class="text-right" data-search="50,700" data-order="50,700">50,700 BTC</td>
                    <td class="text-right" data-search="39" data-order="39.485992732607853559497368903">39 sats</td>
                    <td class="text-right" data-search="128,400,000,000" data-order="128,400,000,000">128,400,000,000 LRD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">113</td>
                    <td class="text-left" data-search="KMF" data-order="KMF">
                        <img src="/images/currency/KMF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KMF
                    </td>
                    <td class="text-right" data-search="25,908" data-order="25,908">25,908 BTC</td>
                    <td class="text-right" data-search="17" data-order="17.137303048662012244061082639">17 sats</td>
                    <td class="text-right" data-search="151,177,000,000" data-order="151,177,000,000">151,177,000,000 KMF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">114</td>
                    <td class="text-left" data-search="TND" data-order="TND">
                        <img src="/images/currency/TND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TND
                    </td>
                    <td class="text-right" data-search="2,475" data-order="2,475">2,475 BTC</td>
                    <td class="text-right" data-search="2,603" data-order="2603.9104369715687312826192702">2,603 sats</td>
                    <td class="text-right" data-search="95,068,000" data-order="95,068,000">95,068,000 TND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">115</td>
                    <td class="text-left" data-search="TJS" data-order="TJS">
                        <img src="/images/currency/TJS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TJS
                    </td>
                    <td class="text-right" data-search="139" data-order="139">139 BTC</td>
                    <td class="text-right" data-search="698" data-order="698.61642941254406495079943251">698 sats</td>
                    <td class="text-right" data-search="19,920,000" data-order="19,920,000">19,920,000 TJS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">116</td>
                    <td class="text-left" data-search="STD" data-order="STD">
                        <img src="/images/currency/STD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />STD
                    </td>
                    <td class="text-right" data-search="11" data-order="11">11 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.3435708777747282678291451535">&lt; 1 sats</td>
                    <td class="text-right" data-search="3,124,000,000" data-order="3,124,000,000">3,124,000,000 STD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
            </tbody>
    </table>
  </div>
      </div>
    </div>
        
  <a href="/contact" class="contact-me-btn actionbtn">
    <span class="far fa-envelope" aria-hidden="true"></span>
    CONTACT
  </a>
    
</div>
</div>
</div>


    
<script>
    $(document).ready(function () {
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: true,
            responsive: true
        });
    });
</script>
