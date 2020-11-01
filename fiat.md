---
layout: minimal2
title: DataTables Test
ext-css:
  - //stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
  - //cdn.datatables.net/v/dt/dt-1.10.18/fh-3.1.4/r-2.2.2/datatables.min.css
js: 
  - /assets/js/fiat.js
ext-js:
  - //cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
  - //stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js
  - //cdn.datatables.net/v/dt/dt-1.10.18/fh-3.1.4/r-2.2.2/datatables.min.js
---


<div class="container text-center">
        <small>USD/BTC: 7,251 sats</small>
        &nbsp;•&nbsp;
        <small>Currency Ranking: 31</small>
        &nbsp;•&nbsp;
        <small>Country Ranking: 42</small>
        &nbsp;•&nbsp;
        <small>Fiat Market Cap: 8,173,982,187 BTC </small>
        &nbsp;•&nbsp;
        <small>BTC Dominance: 0.23 %</small>
</div>


<div class="container text-center">
    <h1 class="jumbotron-heading">Top Fiat Currencies by Market Capitalization</h1>
    <p class="lead text-muted">Major fiat currency market cap in BTC</p>

    <ul class="nav nav-tabs mb-1">
        <li class="nav-item">
            <a class="nav-link active" href="/">Fiat Currencies</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/Country">Countries</a>
        </li>
    </ul>

    <div class="table dt-responsive">
        <table id="currency-ranking" class="table table-hover" style="width:100%">
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
                    <td class="text-right" data-search="2,345,417,744" data-order="2,345,417,744">2,345,417,744 BTC</td>
                    <td class="text-right" data-search="1,083" data-order="1083.7943811695893827670255485">1,083 sats</td>
                    <td class="text-right" data-search="216,408,000,000,000" data-order="216,408,000,000,000">216,408,000,000,000 CNY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">2</td>
                    <td class="text-left" data-search="USD" data-order="USD">
                        <img src="/images/currency/USD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />USD
                    </td>
                    <td class="text-right" data-search="1,368,459,379" data-order="1,368,459,379">1,368,459,379 BTC</td>
                    <td class="text-right" data-search="7,251" data-order="7251.889298459481156328252418">7,251 sats</td>
                    <td class="text-right" data-search="18,870,384,286,000" data-order="18,870,384,286,000">18,870,384,286,000 USD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">3</td>
                    <td class="text-left" data-search="EUR" data-order="EUR">
                        <img src="/images/currency/EUR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />EUR
                    </td>
                    <td class="text-right" data-search="1,118,436,089" data-order="1,118,436,089">1,118,436,089 BTC</td>
                    <td class="text-right" data-search="8,468" data-order="8468.390535692827164106475893">8,468 sats</td>
                    <td class="text-right" data-search="13,207,186,000,000" data-order="13,207,186,000,000">13,207,186,000,000 EUR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">4</td>
                    <td class="text-left" data-search="JPY" data-order="JPY">
                        <img src="/images/currency/JPY.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JPY
                    </td>
                    <td class="text-right" data-search="1,017,300,643" data-order="1,017,300,643">1,017,300,643 BTC</td>
                    <td class="text-right" data-search="69" data-order="69.29326383573577685631052664">69 sats</td>
                    <td class="text-right" data-search="1,468,109,000,000,000" data-order="1,468,109,000,000,000">1,468,109,000,000,000 JPY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">5</td>
                    <td class="text-left" data-search="GBP" data-order="GBP">
                        <img src="/images/currency/GBP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GBP
                    </td>
                    <td class="text-right" data-search="301,505,879" data-order="301,505,879">301,505,879 BTC</td>
                    <td class="text-right" data-search="9,387" data-order="9387.571114602712956687649328">9,387 sats</td>
                    <td class="text-right" data-search="3,211,756,000,000" data-order="3,211,756,000,000">3,211,756,000,000 GBP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">6</td>
                    <td class="text-left" data-search="KRW" data-order="KRW">
                        <img src="/images/currency/KRW.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KRW
                    </td>
                    <td class="text-right" data-search="277,488,974" data-order="277,488,974">277,488,974 BTC</td>
                    <td class="text-right" data-search="6" data-order="6.3802771825279058477511256117">6 sats</td>
                    <td class="text-right" data-search="4,349,168,000,000,000" data-order="4,349,168,000,000,000">4,349,168,000,000,000 KRW</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">7</td>
                    <td class="text-left" data-search="INR" data-order="INR">
                        <img src="/images/currency/INR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />INR
                    </td>
                    <td class="text-right" data-search="173,220,686" data-order="173,220,686">173,220,686 BTC</td>
                    <td class="text-right" data-search="97" data-order="97.27837587891229037851004193">97 sats</td>
                    <td class="text-right" data-search="178,067,000,000,000" data-order="178,067,000,000,000">178,067,000,000,000 INR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">8</td>
                    <td class="text-left" data-search="CAD" data-order="CAD">
                        <img src="/images/currency/CAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CAD
                    </td>
                    <td class="text-right" data-search="161,537,295" data-order="161,537,295">161,537,295 BTC</td>
                    <td class="text-right" data-search="5,441" data-order="5441.4853549321388367771481274">5,441 sats</td>
                    <td class="text-right" data-search="2,968,625,000,000" data-order="2,968,625,000,000">2,968,625,000,000 CAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">9</td>
                    <td class="text-left" data-search="HKD" data-order="HKD">
                        <img src="/images/currency/HKD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HKD
                    </td>
                    <td class="text-right" data-search="148,559,280" data-order="148,559,280">148,559,280 BTC</td>
                    <td class="text-right" data-search="935" data-order="935.3112870347369437254709088">935 sats</td>
                    <td class="text-right" data-search="15,883,405,000,000" data-order="15,883,405,000,000">15,883,405,000,000 HKD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">10</td>
                    <td class="text-left" data-search="TWD" data-order="TWD">
                        <img src="/images/currency/TWD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TWD
                    </td>
                    <td class="text-right" data-search="123,154,573" data-order="123,154,573">123,154,573 BTC</td>
                    <td class="text-right" data-search="253" data-order="253.57494017748143078341349871">253 sats</td>
                    <td class="text-right" data-search="48,567,328,000,000" data-order="48,567,328,000,000">48,567,328,000,000 TWD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">11</td>
                    <td class="text-left" data-search="AUD" data-order="AUD">
                        <img src="/images/currency/AUD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AUD
                    </td>
                    <td class="text-right" data-search="122,285,453" data-order="122,285,453">122,285,453 BTC</td>
                    <td class="text-right" data-search="5,097" data-order="5097.3511212371887077246238558">5,097 sats</td>
                    <td class="text-right" data-search="2,399,000,000,000" data-order="2,399,000,000,000">2,399,000,000,000 AUD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">12</td>
                    <td class="text-left" data-search="BRL" data-order="BRL">
                        <img src="/images/currency/BRL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BRL
                    </td>
                    <td class="text-right" data-search="97,652,318" data-order="97,652,318">97,652,318 BTC</td>
                    <td class="text-right" data-search="1,262" data-order="1262.7564901763082155523150688">1,262 sats</td>
                    <td class="text-right" data-search="7,733,266,000,000" data-order="7,733,266,000,000">7,733,266,000,000 BRL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">13</td>
                    <td class="text-left" data-search="CHF" data-order="CHF">
                        <img src="/images/currency/CHF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CHF
                    </td>
                    <td class="text-right" data-search="88,541,178" data-order="88,541,178">88,541,178 BTC</td>
                    <td class="text-right" data-search="7,899" data-order="7899.8336548285160421014100721">7,899 sats</td>
                    <td class="text-right" data-search="1,120,798,000,000" data-order="1,120,798,000,000">1,120,798,000,000 CHF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">14</td>
                    <td class="text-left" data-search="THB" data-order="THB">
                        <img src="/images/currency/THB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />THB
                    </td>
                    <td class="text-right" data-search="52,241,868" data-order="52,241,868">52,241,868 BTC</td>
                    <td class="text-right" data-search="232" data-order="232.9522359824017882321428373">232 sats</td>
                    <td class="text-right" data-search="22,426,000,000,000" data-order="22,426,000,000,000">22,426,000,000,000 THB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">15</td>
                    <td class="text-left" data-search="RUB" data-order="RUB">
                        <img src="/images/currency/RUB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RUB
                    </td>
                    <td class="text-right" data-search="51,186,773" data-order="51,186,773">51,186,773 BTC</td>
                    <td class="text-right" data-search="91" data-order="91.36579431738266763829665578">91 sats</td>
                    <td class="text-right" data-search="56,024,000,000,000" data-order="56,024,000,000,000">56,024,000,000,000 RUB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">16</td>
                    <td class="text-left" data-search="SAR" data-order="SAR">
                        <img src="/images/currency/SAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SAR
                    </td>
                    <td class="text-right" data-search="40,376,047" data-order="40,376,047">40,376,047 BTC</td>
                    <td class="text-right" data-search="1,933" data-order="1933.7066855114791338953005085">1,933 sats</td>
                    <td class="text-right" data-search="2,088,013,000,000" data-order="2,088,013,000,000">2,088,013,000,000 SAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">17</td>
                    <td class="text-left" data-search="MXN" data-order="MXN">
                        <img src="/images/currency/MXN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MXN
                    </td>
                    <td class="text-right" data-search="40,341,804" data-order="40,341,804">40,341,804 BTC</td>
                    <td class="text-right" data-search="342" data-order="342.2897674593329361758726218">342 sats</td>
                    <td class="text-right" data-search="11,785,863,401,000" data-order="11,785,863,401,000">11,785,863,401,000 MXN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">18</td>
                    <td class="text-left" data-search="SGD" data-order="SGD">
                        <img src="/images/currency/SGD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SGD
                    </td>
                    <td class="text-right" data-search="37,585,602" data-order="37,585,602">37,585,602 BTC</td>
                    <td class="text-right" data-search="5,308" data-order="5308.4459883431138158795028914">5,308 sats</td>
                    <td class="text-right" data-search="708,034,000,000" data-order="708,034,000,000">708,034,000,000 SGD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">19</td>
                    <td class="text-left" data-search="MYR" data-order="MYR">
                        <img src="/images/currency/MYR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MYR
                    </td>
                    <td class="text-right" data-search="35,598,375" data-order="35,598,375">35,598,375 BTC</td>
                    <td class="text-right" data-search="1,746" data-order="1746.1645071138222290540138">1,746 sats</td>
                    <td class="text-right" data-search="2,038,661,000,000" data-order="2,038,661,000,000">2,038,661,000,000 MYR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">20</td>
                    <td class="text-left" data-search="AED" data-order="AED">
                        <img src="/images/currency/AED.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AED
                    </td>
                    <td class="text-right" data-search="35,481,136" data-order="35,481,136">35,481,136 BTC</td>
                    <td class="text-right" data-search="1,974" data-order="1974.3551253863912136937863542">1,974 sats</td>
                    <td class="text-right" data-search="1,797,100,000,000" data-order="1,797,100,000,000">1,797,100,000,000 AED</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">21</td>
                    <td class="text-left" data-search="SEK" data-order="SEK">
                        <img src="/images/currency/SEK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SEK
                    </td>
                    <td class="text-right" data-search="34,383,829" data-order="34,383,829">34,383,829 BTC</td>
                    <td class="text-right" data-search="819" data-order="819.7092789137851113031465491">819 sats</td>
                    <td class="text-right" data-search="4,194,637,000,000" data-order="4,194,637,000,000">4,194,637,000,000 SEK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">22</td>
                    <td class="text-left" data-search="IDR" data-order="IDR">
                        <img src="/images/currency/IDR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />IDR
                    </td>
                    <td class="text-right" data-search="33,514,466" data-order="33,514,466">33,514,466 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.4970297997715722373133993487">&lt; 1 sats</td>
                    <td class="text-right" data-search="6,742,949,000,000,000" data-order="6,742,949,000,000,000">6,742,949,000,000,000 IDR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">23</td>
                    <td class="text-left" data-search="VND" data-order="VND">
                        <img src="/images/currency/VND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />VND
                    </td>
                    <td class="text-right" data-search="33,076,451" data-order="33,076,451">33,076,451 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.3128173966767812425893778677">&lt; 1 sats</td>
                    <td class="text-right" data-search="10,573,725,000,000,000" data-order="10,573,725,000,000,000">10,573,725,000,000,000 VND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">24</td>
                    <td class="text-left" data-search="PLN" data-order="PLN">
                        <img src="/images/currency/PLN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PLN
                    </td>
                    <td class="text-right" data-search="32,306,772" data-order="32,306,772">32,306,772 BTC</td>
                    <td class="text-right" data-search="1,833" data-order="1833.3453750956203704486739943">1,833 sats</td>
                    <td class="text-right" data-search="1,762,176,000,000" data-order="1,762,176,000,000">1,762,176,000,000 PLN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">25</td>
                    <td class="text-left" data-search="ILS" data-order="ILS">
                        <img src="/images/currency/ILS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ILS
                    </td>
                    <td class="text-right" data-search="29,902,977" data-order="29,902,977">29,902,977 BTC</td>
                    <td class="text-right" data-search="2,128" data-order="2128.6075777647756316878109285">2,128 sats</td>
                    <td class="text-right" data-search="1,404,814,000,000" data-order="1,404,814,000,000">1,404,814,000,000 ILS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">26</td>
                    <td class="text-left" data-search="TRY" data-order="TRY">
                        <img src="/images/currency/TRY.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TRY
                    </td>
                    <td class="text-right" data-search="29,353,919" data-order="29,353,919">29,353,919 BTC</td>
                    <td class="text-right" data-search="868" data-order="868.8222819727743884160035887">868 sats</td>
                    <td class="text-right" data-search="3,378,587,263,000" data-order="3,378,587,263,000">3,378,587,263,000 TRY</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">27</td>
                    <td class="text-left" data-search="CLP" data-order="CLP">
                        <img src="/images/currency/CLP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CLP
                    </td>
                    <td class="text-right" data-search="25,417,120" data-order="25,417,120">25,417,120 BTC</td>
                    <td class="text-right" data-search="9" data-order="9.377799835130642862088938221">9 sats</td>
                    <td class="text-right" data-search="271,035,000,000,000" data-order="271,035,000,000,000">271,035,000,000,000 CLP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">28</td>
                    <td class="text-left" data-search="EGP" data-order="EGP">
                        <img src="/images/currency/EGP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />EGP
                    </td>
                    <td class="text-right" data-search="22,027,297" data-order="22,027,297">22,027,297 BTC</td>
                    <td class="text-right" data-search="463" data-order="463.03207110852739419413614551">463 sats</td>
                    <td class="text-right" data-search="4,757,186,000,000" data-order="4,757,186,000,000">4,757,186,000,000 EGP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">29</td>
                    <td class="text-left" data-search="PHP" data-order="PHP">
                        <img src="/images/currency/PHP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PHP
                    </td>
                    <td class="text-right" data-search="20,292,049" data-order="20,292,049">20,292,049 BTC</td>
                    <td class="text-right" data-search="149" data-order="149.5696290655655893424825835">149 sats</td>
                    <td class="text-right" data-search="13,566,958,000,000" data-order="13,566,958,000,000">13,566,958,000,000 PHP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">30</td>
                    <td class="text-left" data-search="NOK" data-order="NOK">
                        <img src="/images/currency/NOK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NOK
                    </td>
                    <td class="text-right" data-search="19,950,948" data-order="19,950,948">19,950,948 BTC</td>
                    <td class="text-right" data-search="762" data-order="762.16057728969387585676085407">762 sats</td>
                    <td class="text-right" data-search="2,617,683,000,000" data-order="2,617,683,000,000">2,617,683,000,000 NOK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">31</td>
                    <td class="text-left" data-search="BTC" data-order="BTC">
                        <img src="/images/currency/BTC.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BTC
                    </td>
                    <td class="text-right" data-search="18,531,318" data-order="18,531,318">18,531,318 BTC</td>
                    <td class="text-right" data-search="100,000,000" data-order="100000000">100,000,000 sats</td>
                    <td class="text-right" data-search="18,531,318" data-order="18,531,318">18,531,318 BTC</td>
                    <td class="text-right">21,000,000 BTC</td>
                </tr>
                <tr>
                    <td class="text-left">32</td>
                    <td class="text-left" data-search="ZAR" data-order="ZAR">
                        <img src="/images/currency/ZAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ZAR
                    </td>
                    <td class="text-right" data-search="18,301,200" data-order="18,301,200">18,301,200 BTC</td>
                    <td class="text-right" data-search="446" data-order="446.29606450710402274644601904">446 sats</td>
                    <td class="text-right" data-search="4,100,686,000,000" data-order="4,100,686,000,000">4,100,686,000,000 ZAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">33</td>
                    <td class="text-left" data-search="DKK" data-order="DKK">
                        <img src="/images/currency/DKK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />DKK
                    </td>
                    <td class="text-right" data-search="18,108,926" data-order="18,108,926">18,108,926 BTC</td>
                    <td class="text-right" data-search="1,134" data-order="1134.5784001354695330585165424">1,134 sats</td>
                    <td class="text-right" data-search="1,596,093,000,000" data-order="1,596,093,000,000">1,596,093,000,000 DKK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">34</td>
                    <td class="text-left" data-search="NZD" data-order="NZD">
                        <img src="/images/currency/NZD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NZD
                    </td>
                    <td class="text-right" data-search="17,191,850" data-order="17,191,850">17,191,850 BTC</td>
                    <td class="text-right" data-search="4,832" data-order="4832.1574582806806411756824014">4,832 sats</td>
                    <td class="text-right" data-search="355,780,000,000" data-order="355,780,000,000">355,780,000,000 NZD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">35</td>
                    <td class="text-left" data-search="CZK" data-order="CZK">
                        <img src="/images/currency/CZK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CZK
                    </td>
                    <td class="text-right" data-search="16,415,857" data-order="16,415,857">16,415,857 BTC</td>
                    <td class="text-right" data-search="310" data-order="310.16110910633064895010027005">310 sats</td>
                    <td class="text-right" data-search="5,292,687,000,000" data-order="5,292,687,000,000">5,292,687,000,000 CZK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">36</td>
                    <td class="text-left" data-search="QAR" data-order="QAR">
                        <img src="/images/currency/QAR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />QAR
                    </td>
                    <td class="text-right" data-search="11,797,731" data-order="11,797,731">11,797,731 BTC</td>
                    <td class="text-right" data-search="1,991" data-order="1991.709314338241225806556377">1,991 sats</td>
                    <td class="text-right" data-search="592,342,000,000" data-order="592,342,000,000">592,342,000,000 QAR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">37</td>
                    <td class="text-left" data-search="MAD" data-order="MAD">
                        <img src="/images/currency/MAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MAD
                    </td>
                    <td class="text-right" data-search="11,345,982" data-order="11,345,982">11,345,982 BTC</td>
                    <td class="text-right" data-search="785" data-order="785.42821041473789467674212336">785 sats</td>
                    <td class="text-right" data-search="1,444,560,000,000" data-order="1,444,560,000,000">1,444,560,000,000 MAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">38</td>
                    <td class="text-left" data-search="PKR" data-order="PKR">
                        <img src="/images/currency/PKR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PKR
                    </td>
                    <td class="text-right" data-search="11,233,375" data-order="11,233,375">11,233,375 BTC</td>
                    <td class="text-right" data-search="45" data-order="45.197085382065832855350150587">45 sats</td>
                    <td class="text-right" data-search="24,854,203,000,000" data-order="24,854,203,000,000">24,854,203,000,000 PKR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">39</td>
                    <td class="text-left" data-search="COP" data-order="COP">
                        <img src="/images/currency/COP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />COP
                    </td>
                    <td class="text-right" data-search="11,127,069" data-order="11,127,069">11,127,069 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.8639993056058298821046786834">1 sats</td>
                    <td class="text-right" data-search="596,946,000,000,000" data-order="596,946,000,000,000">596,946,000,000,000 COP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">40</td>
                    <td class="text-left" data-search="KWD" data-order="KWD">
                        <img src="/images/currency/KWD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KWD
                    </td>
                    <td class="text-right" data-search="9,572,124" data-order="9,572,124">9,572,124 BTC</td>
                    <td class="text-right" data-search="23,731" data-order="23731.557361278490596008418149">23,731 sats</td>
                    <td class="text-right" data-search="40,335,000,000" data-order="40,335,000,000">40,335,000,000 KWD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">41</td>
                    <td class="text-left" data-search="LBP" data-order="LBP">
                        <img src="/images/currency/LBP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LBP
                    </td>
                    <td class="text-right" data-search="9,435,666" data-order="9,435,666">9,435,666 BTC</td>
                    <td class="text-right" data-search="4" data-order="4.7952037006050333881391775097">4 sats</td>
                    <td class="text-right" data-search="196,773,000,000,000" data-order="196,773,000,000,000">196,773,000,000,000 LBP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">42</td>
                    <td class="text-left" data-search="RON" data-order="RON">
                        <img src="/images/currency/RON.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RON
                    </td>
                    <td class="text-right" data-search="8,008,218" data-order="8,008,218">8,008,218 BTC</td>
                    <td class="text-right" data-search="1,737" data-order="1737.1442413362994804604825794">1,737 sats</td>
                    <td class="text-right" data-search="460,999,000,000" data-order="460,999,000,000">460,999,000,000 RON</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">43</td>
                    <td class="text-left" data-search="HUF" data-order="HUF">
                        <img src="/images/currency/HUF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HUF
                    </td>
                    <td class="text-right" data-search="6,980,577" data-order="6,980,577">6,980,577 BTC</td>
                    <td class="text-right" data-search="23" data-order="23.050380963452106852645477231">23 sats</td>
                    <td class="text-right" data-search="30,284,000,000,000" data-order="30,284,000,000,000">30,284,000,000,000 HUF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">44</td>
                    <td class="text-left" data-search="IQD" data-order="IQD">
                        <img src="/images/currency/IQD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />IQD
                    </td>
                    <td class="text-right" data-search="6,765,952" data-order="6,765,952">6,765,952 BTC</td>
                    <td class="text-right" data-search="6" data-order="6.0940246205541858456539936285">6 sats</td>
                    <td class="text-right" data-search="111,026,000,000,000" data-order="111,026,000,000,000">111,026,000,000,000 IQD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">45</td>
                    <td class="text-left" data-search="ARS" data-order="ARS">
                        <img src="/images/currency/ARS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ARS
                    </td>
                    <td class="text-right" data-search="6,495,399" data-order="6,495,399">6,495,399 BTC</td>
                    <td class="text-right" data-search="92" data-order="92.80777282413681318900300199">92 sats</td>
                    <td class="text-right" data-search="6,998,766,000,000" data-order="6,998,766,000,000">6,998,766,000,000 ARS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">46</td>
                    <td class="text-left" data-search="MOP" data-order="MOP">
                        <img src="/images/currency/MOP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MOP
                    </td>
                    <td class="text-right" data-search="6,373,168" data-order="6,373,168">6,373,168 BTC</td>
                    <td class="text-right" data-search="908" data-order="908.275351214909614618127436">908 sats</td>
                    <td class="text-right" data-search="701,678,000,000" data-order="701,678,000,000">701,678,000,000 MOP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">47</td>
                    <td class="text-left" data-search="NGN" data-order="NGN">
                        <img src="/images/currency/NGN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NGN
                    </td>
                    <td class="text-right" data-search="6,355,419" data-order="6,355,419">6,355,419 BTC</td>
                    <td class="text-right" data-search="19" data-order="19.058655103421578723007494794">19 sats</td>
                    <td class="text-right" data-search="33,346,630,000,000" data-order="33,346,630,000,000">33,346,630,000,000 NGN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">48</td>
                    <td class="text-left" data-search="LYD" data-order="LYD">
                        <img src="/images/currency/LYD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LYD
                    </td>
                    <td class="text-right" data-search="5,898,773" data-order="5,898,773">5,898,773 BTC</td>
                    <td class="text-right" data-search="5,330" data-order="5330.7781411674237998974202212">5,330 sats</td>
                    <td class="text-right" data-search="110,655,000,000" data-order="110,655,000,000">110,655,000,000 LYD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">49</td>
                    <td class="text-left" data-search="PEN" data-order="PEN">
                        <img src="/images/currency/PEN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PEN
                    </td>
                    <td class="text-right" data-search="5,442,231" data-order="5,442,231">5,442,231 BTC</td>
                    <td class="text-right" data-search="2,005" data-order="2005.7754875833303341189091252">2,005 sats</td>
                    <td class="text-right" data-search="271,328,000,000" data-order="271,328,000,000">271,328,000,000 PEN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">50</td>
                    <td class="text-left" data-search="BGN" data-order="BGN">
                        <img src="/images/currency/BGN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BGN
                    </td>
                    <td class="text-right" data-search="4,686,317" data-order="4,686,317">4,686,317 BTC</td>
                    <td class="text-right" data-search="4,322" data-order="4322.2531479914394933900180283">4,322 sats</td>
                    <td class="text-right" data-search="108,423,000,000" data-order="108,423,000,000">108,423,000,000 BGN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">51</td>
                    <td class="text-left" data-search="UAH" data-order="UAH">
                        <img src="/images/currency/UAH.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UAH
                    </td>
                    <td class="text-right" data-search="4,390,814" data-order="4,390,814">4,390,814 BTC</td>
                    <td class="text-right" data-search="254" data-order="254.80879170017195134751187707">254 sats</td>
                    <td class="text-right" data-search="1,723,180,000,000" data-order="1,723,180,000,000">1,723,180,000,000 UAH</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">52</td>
                    <td class="text-left" data-search="KZT" data-order="KZT">
                        <img src="/images/currency/KZT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KZT
                    </td>
                    <td class="text-right" data-search="4,050,807" data-order="4,050,807">4,050,807 BTC</td>
                    <td class="text-right" data-search="16" data-order="16.752675051619751190536335973">16 sats</td>
                    <td class="text-right" data-search="24,180,061,000,000" data-order="24,180,061,000,000">24,180,061,000,000 KZT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">53</td>
                    <td class="text-left" data-search="JOD" data-order="JOD">
                        <img src="/images/currency/JOD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JOD
                    </td>
                    <td class="text-right" data-search="3,678,413" data-order="3,678,413">3,678,413 BTC</td>
                    <td class="text-right" data-search="10,227" data-order="10227.757670173024309387696629">10,227 sats</td>
                    <td class="text-right" data-search="35,965,000,000" data-order="35,965,000,000">35,965,000,000 JOD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">54</td>
                    <td class="text-left" data-search="OMR" data-order="OMR">
                        <img src="/images/currency/OMR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />OMR
                    </td>
                    <td class="text-right" data-search="3,612,726" data-order="3,612,726">3,612,726 BTC</td>
                    <td class="text-right" data-search="18,856" data-order="18856.548924441292510643380132">18,856 sats</td>
                    <td class="text-right" data-search="19,159,000,000" data-order="19,159,000,000">19,159,000,000 OMR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">55</td>
                    <td class="text-left" data-search="LKR" data-order="LKR">
                        <img src="/images/currency/LKR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LKR
                    </td>
                    <td class="text-right" data-search="3,092,231" data-order="3,092,231">3,092,231 BTC</td>
                    <td class="text-right" data-search="39" data-order="39.349188233223079712141711167">39 sats</td>
                    <td class="text-right" data-search="7,858,436,000,000" data-order="7,858,436,000,000">7,858,436,000,000 LKR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">56</td>
                    <td class="text-left" data-search="GTQ" data-order="GTQ">
                        <img src="/images/currency/GTQ.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GTQ
                    </td>
                    <td class="text-right" data-search="2,923,745" data-order="2,923,745">2,923,745 BTC</td>
                    <td class="text-right" data-search="930" data-order="930.1781485682748172391696684">930 sats</td>
                    <td class="text-right" data-search="314,321,000,000" data-order="314,321,000,000">314,321,000,000 GTQ</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">57</td>
                    <td class="text-left" data-search="BHD" data-order="BHD">
                        <img src="/images/currency/BHD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BHD
                    </td>
                    <td class="text-right" data-search="2,734,345" data-order="2,734,345">2,734,345 BTC</td>
                    <td class="text-right" data-search="19,230" data-order="19230.220701334312244810525386">19,230 sats</td>
                    <td class="text-right" data-search="14,219,000,000" data-order="14,219,000,000">14,219,000,000 BHD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">58</td>
                    <td class="text-left" data-search="KES" data-order="KES">
                        <img src="/images/currency/KES.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KES
                    </td>
                    <td class="text-right" data-search="2,566,959" data-order="2,566,959">2,566,959 BTC</td>
                    <td class="text-right" data-search="66" data-order="66.726753852219801727130911599">66 sats</td>
                    <td class="text-right" data-search="3,846,971,000,000" data-order="3,846,971,000,000">3,846,971,000,000 KES</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">59</td>
                    <td class="text-left" data-search="XOF" data-order="XOF">
                        <img src="/images/currency/XOF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XOF
                    </td>
                    <td class="text-right" data-search="2,412,097" data-order="2,412,097">2,412,097 BTC</td>
                    <td class="text-right" data-search="12" data-order="12.996209648239924624862503519">12 sats</td>
                    <td class="text-right" data-search="18,560,000,000,000" data-order="18,560,000,000,000">18,560,000,000,000 XOF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">60</td>
                    <td class="text-left" data-search="RSD" data-order="RSD">
                        <img src="/images/currency/RSD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RSD
                    </td>
                    <td class="text-right" data-search="2,303,097" data-order="2,303,097">2,303,097 BTC</td>
                    <td class="text-right" data-search="71" data-order="71.829066028306780882517662826">71 sats</td>
                    <td class="text-right" data-search="3,206,358,000,000" data-order="3,206,358,000,000">3,206,358,000,000 RSD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">61</td>
                    <td class="text-left" data-search="DOP" data-order="DOP">
                        <img src="/images/currency/DOP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />DOP
                    </td>
                    <td class="text-right" data-search="2,232,175" data-order="2,232,175">2,232,175 BTC</td>
                    <td class="text-right" data-search="124" data-order="124.026689857540057176086578">124 sats</td>
                    <td class="text-right" data-search="1,799,754,000,000" data-order="1,799,754,000,000">1,799,754,000,000 DOP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">62</td>
                    <td class="text-left" data-search="BOB" data-order="BOB">
                        <img src="/images/currency/BOB.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BOB
                    </td>
                    <td class="text-right" data-search="2,191,722" data-order="2,191,722">2,191,722 BTC</td>
                    <td class="text-right" data-search="1,050" data-order="1050.4029162682666227970826421">1,050 sats</td>
                    <td class="text-right" data-search="208,655,338,000" data-order="208,655,338,000">208,655,338,000 BOB</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">63</td>
                    <td class="text-left" data-search="HRK" data-order="HRK">
                        <img src="/images/currency/HRK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HRK
                    </td>
                    <td class="text-right" data-search="1,712,961" data-order="1,712,961">1,712,961 BTC</td>
                    <td class="text-right" data-search="1,115" data-order="1115.325236150420661258351597">1,115 sats</td>
                    <td class="text-right" data-search="153,584,000,000" data-order="153,584,000,000">153,584,000,000 HRK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">64</td>
                    <td class="text-left" data-search="CRC" data-order="CRC">
                        <img src="/images/currency/CRC.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CRC
                    </td>
                    <td class="text-right" data-search="1,538,460" data-order="1,538,460">1,538,460 BTC</td>
                    <td class="text-right" data-search="11" data-order="11.960991488206987722064697192">11 sats</td>
                    <td class="text-right" data-search="12,862,308,000,000" data-order="12,862,308,000,000">12,862,308,000,000 CRC</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">65</td>
                    <td class="text-left" data-search="BDT" data-order="BDT">
                        <img src="/images/currency/BDT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BDT
                    </td>
                    <td class="text-right" data-search="1,485,911" data-order="1,485,911">1,485,911 BTC</td>
                    <td class="text-right" data-search="85" data-order="85.4555326486182559929111411">85 sats</td>
                    <td class="text-right" data-search="1,738,812,000,000" data-order="1,738,812,000,000">1,738,812,000,000 BDT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">66</td>
                    <td class="text-left" data-search="BYN" data-order="BYN">
                        <img src="/images/currency/BYN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BYN
                    </td>
                    <td class="text-right" data-search="1,389,150" data-order="1,389,150">1,389,150 BTC</td>
                    <td class="text-right" data-search="2,756" data-order="2756.9603851817888643743548656">2,756 sats</td>
                    <td class="text-right" data-search="50,387,000,000" data-order="50,387,000,000">50,387,000,000 BYN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">67</td>
                    <td class="text-left" data-search="HNL" data-order="HNL">
                        <img src="/images/currency/HNL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />HNL
                    </td>
                    <td class="text-right" data-search="1,242,421" data-order="1,242,421">1,242,421 BTC</td>
                    <td class="text-right" data-search="295" data-order="295.14751673078847698863263492">295 sats</td>
                    <td class="text-right" data-search="420,949,000,000" data-order="420,949,000,000">420,949,000,000 HNL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">68</td>
                    <td class="text-left" data-search="AOA" data-order="AOA">
                        <img src="/images/currency/AOA.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AOA
                    </td>
                    <td class="text-right" data-search="1,238,164" data-order="1,238,164">1,238,164 BTC</td>
                    <td class="text-right" data-search="10" data-order="10.89680461436935499782826527">10 sats</td>
                    <td class="text-right" data-search="11,362,633,000,000" data-order="11,362,633,000,000">11,362,633,000,000 AOA</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">69</td>
                    <td class="text-left" data-search="SDG" data-order="SDG">
                        <img src="/images/currency/SDG.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SDG
                    </td>
                    <td class="text-right" data-search="1,214,066" data-order="1,214,066">1,214,066 BTC</td>
                    <td class="text-right" data-search="131" data-order="131.12851731958010381024300803">131 sats</td>
                    <td class="text-right" data-search="925,860,000,000" data-order="925,860,000,000">925,860,000,000 SDG</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">70</td>
                    <td class="text-left" data-search="MUR" data-order="MUR">
                        <img src="/images/currency/MUR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MUR
                    </td>
                    <td class="text-right" data-search="1,190,306" data-order="1,190,306">1,190,306 BTC</td>
                    <td class="text-right" data-search="181" data-order="181.47698995696415082370095684">181 sats</td>
                    <td class="text-right" data-search="655,899,000,000" data-order="655,899,000,000">655,899,000,000 MUR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">71</td>
                    <td class="text-left" data-search="AZN" data-order="AZN">
                        <img src="/images/currency/AZN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AZN
                    </td>
                    <td class="text-right" data-search="1,115,636" data-order="1,115,636">1,115,636 BTC</td>
                    <td class="text-right" data-search="4,255" data-order="4255.8785063466382367813121228">4,255 sats</td>
                    <td class="text-right" data-search="26,214,000,000" data-order="26,214,000,000">26,214,000,000 AZN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">72</td>
                    <td class="text-left" data-search="ISK" data-order="ISK">
                        <img src="/images/currency/ISK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ISK
                    </td>
                    <td class="text-right" data-search="1,101,198" data-order="1,101,198">1,101,198 BTC</td>
                    <td class="text-right" data-search="51" data-order="51.40982173733369165974246248">51 sats</td>
                    <td class="text-right" data-search="2,142,000,000,000" data-order="2,142,000,000,000">2,142,000,000,000 ISK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">73</td>
                    <td class="text-left" data-search="PYG" data-order="PYG">
                        <img src="/images/currency/PYG.png" width="24" height="18" class="mr-1 mb-1 border border-light" />PYG
                    </td>
                    <td class="text-right" data-search="1,092,005" data-order="1,092,005">1,092,005 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.0317263444629314661662367173">1 sats</td>
                    <td class="text-right" data-search="105,842,528,000,000" data-order="105,842,528,000,000">105,842,528,000,000 PYG</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">74</td>
                    <td class="text-left" data-search="TTD" data-order="TTD">
                        <img src="/images/currency/TTD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TTD
                    </td>
                    <td class="text-right" data-search="1,005,584" data-order="1,005,584">1,005,584 BTC</td>
                    <td class="text-right" data-search="1,066" data-order="1066.717379927296946074532266">1,066 sats</td>
                    <td class="text-right" data-search="94,269,000,000" data-order="94,269,000,000">94,269,000,000 TTD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">75</td>
                    <td class="text-left" data-search="ALL" data-order="ALL">
                        <img src="/images/currency/ALL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ALL
                    </td>
                    <td class="text-right" data-search="959,062" data-order="959,062">959,062 BTC</td>
                    <td class="text-right" data-search="68" data-order="68.140817521127204981093241185">68 sats</td>
                    <td class="text-right" data-search="1,407,470,000,000" data-order="1,407,470,000,000">1,407,470,000,000 ALL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">76</td>
                    <td class="text-left" data-search="TZS" data-order="TZS">
                        <img src="/images/currency/TZS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TZS
                    </td>
                    <td class="text-right" data-search="938,399" data-order="938,399">938,399 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.1276841713591197171247220503">3 sats</td>
                    <td class="text-right" data-search="30,003,000,000,000" data-order="30,003,000,000,000">30,003,000,000,000 TZS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">77</td>
                    <td class="text-left" data-search="BND" data-order="BND">
                        <img src="/images/currency/BND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BND
                    </td>
                    <td class="text-right" data-search="809,180" data-order="809,180">809,180 BTC</td>
                    <td class="text-right" data-search="5,315" data-order="5315.8588288508356598474653756">5,315 sats</td>
                    <td class="text-right" data-search="15,222,000,000" data-order="15,222,000,000">15,222,000,000 BND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">78</td>
                    <td class="text-left" data-search="ZMK" data-order="ZMK">
                        <img src="/images/currency/ZMK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />ZMK
                    </td>
                    <td class="text-right" data-search="752,221" data-order="752,221">752,221 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.8056577349388125495683644202">&lt; 1 sats</td>
                    <td class="text-right" data-search="93,367,280,000,000" data-order="93,367,280,000,000">93,367,280,000,000 ZMK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">79</td>
                    <td class="text-left" data-search="GEL" data-order="GEL">
                        <img src="/images/currency/GEL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GEL
                    </td>
                    <td class="text-right" data-search="642,326" data-order="642,326">642,326 BTC</td>
                    <td class="text-right" data-search="2,237" data-order="2237.9673621052154373741478784">2,237 sats</td>
                    <td class="text-right" data-search="28,701,290,000" data-order="28,701,290,000">28,701,290,000 GEL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">80</td>
                    <td class="text-left" data-search="LAK" data-order="LAK">
                        <img src="/images/currency/LAK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LAK
                    </td>
                    <td class="text-right" data-search="634,297" data-order="634,297">634,297 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.783564454348512867498353502">&lt; 1 sats</td>
                    <td class="text-right" data-search="80,950,200,000,000" data-order="80,950,200,000,000">80,950,200,000,000 LAK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">81</td>
                    <td class="text-left" data-search="CDF" data-order="CDF">
                        <img src="/images/currency/CDF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CDF
                    </td>
                    <td class="text-right" data-search="623,582" data-order="623,582">623,582 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.6905282251848669920643263566">3 sats</td>
                    <td class="text-right" data-search="16,896,835,000,000" data-order="16,896,835,000,000">16,896,835,000,000 CDF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">82</td>
                    <td class="text-left" data-search="UYU" data-order="UYU">
                        <img src="/images/currency/UYU.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UYU
                    </td>
                    <td class="text-right" data-search="610,859" data-order="610,859">610,859 BTC</td>
                    <td class="text-right" data-search="169" data-order="169.24626775498472889291559404">169 sats</td>
                    <td class="text-right" data-search="360,929,000,000" data-order="360,929,000,000">360,929,000,000 UYU</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">83</td>
                    <td class="text-left" data-search="BSD" data-order="BSD">
                        <img src="/images/currency/BSD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BSD
                    </td>
                    <td class="text-right" data-search="591,728" data-order="591,728">591,728 BTC</td>
                    <td class="text-right" data-search="7,253" data-order="7253.3472212509525978004103004">7,253 sats</td>
                    <td class="text-right" data-search="8,158,000,000" data-order="8,158,000,000">8,158,000,000 BSD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">84</td>
                    <td class="text-left" data-search="UGX" data-order="UGX">
                        <img src="/images/currency/UGX.png" width="24" height="18" class="mr-1 mb-1 border border-light" />UGX
                    </td>
                    <td class="text-right" data-search="585,956" data-order="585,956">585,956 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.9392885914666300902648440076">1 sats</td>
                    <td class="text-right" data-search="30,215,000,000,000" data-order="30,215,000,000,000">30,215,000,000,000 UGX</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">85</td>
                    <td class="text-left" data-search="BAM" data-order="BAM">
                        <img src="/images/currency/BAM.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BAM
                    </td>
                    <td class="text-right" data-search="561,472" data-order="561,472">561,472 BTC</td>
                    <td class="text-right" data-search="4,328" data-order="4328.6720995511179427918047758">4,328 sats</td>
                    <td class="text-right" data-search="12,971,000,000" data-order="12,971,000,000">12,971,000,000 BAM</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">86</td>
                    <td class="text-left" data-search="BWP" data-order="BWP">
                        <img src="/images/currency/BWP.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BWP
                    </td>
                    <td class="text-right" data-search="557,232" data-order="557,232">557,232 BTC</td>
                    <td class="text-right" data-search="636" data-order="636.09520859666862032932835916">636 sats</td>
                    <td class="text-right" data-search="87,602,000,000" data-order="87,602,000,000">87,602,000,000 BWP</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">87</td>
                    <td class="text-left" data-search="NAD" data-order="NAD">
                        <img src="/images/currency/NAD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NAD
                    </td>
                    <td class="text-right" data-search="553,221" data-order="553,221">553,221 BTC</td>
                    <td class="text-right" data-search="444" data-order="444.61812859748619889829967866">444 sats</td>
                    <td class="text-right" data-search="124,426,000,000" data-order="124,426,000,000">124,426,000,000 NAD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">88</td>
                    <td class="text-left" data-search="MZN" data-order="MZN">
                        <img src="/images/currency/MZN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MZN
                    </td>
                    <td class="text-right" data-search="517,524" data-order="517,524">517,524 BTC</td>
                    <td class="text-right" data-search="99" data-order="99.03564951955138127448798515">99 sats</td>
                    <td class="text-right" data-search="522,563,000,000" data-order="522,563,000,000">522,563,000,000 MZN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">89</td>
                    <td class="text-left" data-search="MNT" data-order="MNT">
                        <img src="/images/currency/MNT.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MNT
                    </td>
                    <td class="text-right" data-search="513,664" data-order="513,664">513,664 BTC</td>
                    <td class="text-right" data-search="2" data-order="2.5388907266402286302247530497">2 sats</td>
                    <td class="text-right" data-search="20,231,823,000,000" data-order="20,231,823,000,000">20,231,823,000,000 MNT</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">90</td>
                    <td class="text-left" data-search="MKD" data-order="MKD">
                        <img src="/images/currency/MKD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MKD
                    </td>
                    <td class="text-right" data-search="496,838" data-order="496,838">496,838 BTC</td>
                    <td class="text-right" data-search="137" data-order="137.40397038091097677104669258">137 sats</td>
                    <td class="text-right" data-search="361,589,000,000" data-order="361,589,000,000">361,589,000,000 MKD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">91</td>
                    <td class="text-left" data-search="XPF" data-order="XPF">
                        <img src="/images/currency/XPF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XPF
                    </td>
                    <td class="text-right" data-search="439,967" data-order="439,967">439,967 BTC</td>
                    <td class="text-right" data-search="70" data-order="70.74765470148834925142387602">70 sats</td>
                    <td class="text-right" data-search="621,882,000,000" data-order="621,882,000,000">621,882,000,000 XPF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">92</td>
                    <td class="text-left" data-search="MDL" data-order="MDL">
                        <img src="/images/currency/MDL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MDL
                    </td>
                    <td class="text-right" data-search="421,089" data-order="421,089">421,089 BTC</td>
                    <td class="text-right" data-search="425" data-order="425.1573462916931801732157112">425 sats</td>
                    <td class="text-right" data-search="99,043,000,000" data-order="99,043,000,000">99,043,000,000 MDL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">93</td>
                    <td class="text-left" data-search="AMD" data-order="AMD">
                        <img src="/images/currency/AMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />AMD
                    </td>
                    <td class="text-right" data-search="303,227" data-order="303,227">303,227 BTC</td>
                    <td class="text-right" data-search="14" data-order="14.6917154320943452760696556">14 sats</td>
                    <td class="text-right" data-search="2,063,935,000,000" data-order="2,063,935,000,000">2,063,935,000,000 AMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">94</td>
                    <td class="text-left" data-search="NIO" data-order="NIO">
                        <img src="/images/currency/NIO.png" width="24" height="18" class="mr-1 mb-1 border border-light" />NIO
                    </td>
                    <td class="text-right" data-search="277,371" data-order="277,371">277,371 BTC</td>
                    <td class="text-right" data-search="208" data-order="208.8655114101866220037948441">208 sats</td>
                    <td class="text-right" data-search="132,799,000,000" data-order="132,799,000,000">132,799,000,000 NIO</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">95</td>
                    <td class="text-left" data-search="JMD" data-order="JMD">
                        <img src="/images/currency/JMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />JMD
                    </td>
                    <td class="text-right" data-search="277,350" data-order="277,350">277,350 BTC</td>
                    <td class="text-right" data-search="49" data-order="49.465018642836249301553454603">49 sats</td>
                    <td class="text-right" data-search="560,699,720,000" data-order="560,699,720,000">560,699,720,000 JMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">96</td>
                    <td class="text-left" data-search="GNF" data-order="GNF">
                        <img src="/images/currency/GNF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GNF
                    </td>
                    <td class="text-right" data-search="250,103" data-order="250,103">250,103 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.7418812312114213888771007025">&lt; 1 sats</td>
                    <td class="text-right" data-search="33,712,000,000,000" data-order="33,712,000,000,000">33,712,000,000,000 GNF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">97</td>
                    <td class="text-left" data-search="MGA" data-order="MGA">
                        <img src="/images/currency/MGA.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MGA
                    </td>
                    <td class="text-right" data-search="237,387" data-order="237,387">237,387 BTC</td>
                    <td class="text-right" data-search="1" data-order="1.8585055493485534424347021766">1 sats</td>
                    <td class="text-right" data-search="12,773,000,000,000" data-order="12,773,000,000,000">12,773,000,000,000 MGA</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">98</td>
                    <td class="text-left" data-search="RWF" data-order="RWF">
                        <img src="/images/currency/RWF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />RWF
                    </td>
                    <td class="text-right" data-search="195,615" data-order="195,615">195,615 BTC</td>
                    <td class="text-right" data-search="7" data-order="7.4378351779071601603366691466">7 sats</td>
                    <td class="text-right" data-search="2,630,000,000,000" data-order="2,630,000,000,000">2,630,000,000,000 RWF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">99</td>
                    <td class="text-left" data-search="KGS" data-order="KGS">
                        <img src="/images/currency/KGS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KGS
                    </td>
                    <td class="text-right" data-search="181,214" data-order="181,214">181,214 BTC</td>
                    <td class="text-right" data-search="88" data-order="88.64978411528189449691038706">88 sats</td>
                    <td class="text-right" data-search="204,416,000,000" data-order="204,416,000,000">204,416,000,000 KGS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">100</td>
                    <td class="text-left" data-search="MVR" data-order="MVR">
                        <img src="/images/currency/MVR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MVR
                    </td>
                    <td class="text-right" data-search="174,159" data-order="174,159">174,159 BTC</td>
                    <td class="text-right" data-search="470" data-order="470.58477724942770101604596707">470 sats</td>
                    <td class="text-right" data-search="37,009,000,000" data-order="37,009,000,000">37,009,000,000 MVR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">101</td>
                    <td class="text-left" data-search="CVE" data-order="CVE">
                        <img src="/images/currency/CVE.png" width="24" height="18" class="mr-1 mb-1 border border-light" />CVE
                    </td>
                    <td class="text-right" data-search="152,227" data-order="152,227">152,227 BTC</td>
                    <td class="text-right" data-search="76" data-order="76.617634560078864080885415205">76 sats</td>
                    <td class="text-right" data-search="198,684,000,000" data-order="198,684,000,000">198,684,000,000 CVE</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">102</td>
                    <td class="text-left" data-search="GYD" data-order="GYD">
                        <img src="/images/currency/GYD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GYD
                    </td>
                    <td class="text-right" data-search="144,527" data-order="144,527">144,527 BTC</td>
                    <td class="text-right" data-search="34" data-order="34.658817556719187523397280949">34 sats</td>
                    <td class="text-right" data-search="417,000,000,000" data-order="417,000,000,000">417,000,000,000 GYD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">103</td>
                    <td class="text-left" data-search="MWK" data-order="MWK">
                        <img src="/images/currency/MWK.png" width="24" height="18" class="mr-1 mb-1 border border-light" />MWK
                    </td>
                    <td class="text-right" data-search="139,707" data-order="139,707">139,707 BTC</td>
                    <td class="text-right" data-search="9" data-order="9.60514699958114741832105046">9 sats</td>
                    <td class="text-right" data-search="1,454,500,000,000" data-order="1,454,500,000,000">1,454,500,000,000 MWK</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">104</td>
                    <td class="text-left" data-search="BTN" data-order="BTN">
                        <img src="/images/currency/BTN.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BTN
                    </td>
                    <td class="text-right" data-search="136,554" data-order="136,554">136,554 BTC</td>
                    <td class="text-right" data-search="97" data-order="97.28672673206899113758658584">97 sats</td>
                    <td class="text-right" data-search="140,362,000,000" data-order="140,362,000,000">140,362,000,000 BTN</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">105</td>
                    <td class="text-left" data-search="XAF" data-order="XAF">
                        <img src="/images/currency/XAF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />XAF
                    </td>
                    <td class="text-right" data-search="133,763" data-order="133,763">133,763 BTC</td>
                    <td class="text-right" data-search="12" data-order="12.907771916515124832222439181">12 sats</td>
                    <td class="text-right" data-search="1,036,298,000,000" data-order="1,036,298,000,000">1,036,298,000,000 XAF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">106</td>
                    <td class="text-left" data-search="BIF" data-order="BIF">
                        <img src="/images/currency/BIF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />BIF
                    </td>
                    <td class="text-right" data-search="84,911" data-order="84,911">84,911 BTC</td>
                    <td class="text-right" data-search="3" data-order="3.7380872672471552352207486691">3 sats</td>
                    <td class="text-right" data-search="2,271,508,000,000" data-order="2,271,508,000,000">2,271,508,000,000 BIF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">107</td>
                    <td class="text-left" data-search="SZL" data-order="SZL">
                        <img src="/images/currency/SZL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SZL
                    </td>
                    <td class="text-right" data-search="81,446" data-order="81,446">81,446 BTC</td>
                    <td class="text-right" data-search="444" data-order="444.80144473490644621272054751">444 sats</td>
                    <td class="text-right" data-search="18,310,700,000" data-order="18,310,700,000">18,310,700,000 SZL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">108</td>
                    <td class="text-left" data-search="SCR" data-order="SCR">
                        <img src="/images/currency/SCR.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SCR
                    </td>
                    <td class="text-right" data-search="81,275" data-order="81,275">81,275 BTC</td>
                    <td class="text-right" data-search="375" data-order="375.12549455607012472586776086">375 sats</td>
                    <td class="text-right" data-search="21,666,000,000" data-order="21,666,000,000">21,666,000,000 SCR</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">109</td>
                    <td class="text-left" data-search="SLL" data-order="SLL">
                        <img src="/images/currency/SLL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />SLL
                    </td>
                    <td class="text-right" data-search="74,251" data-order="74,251">74,251 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.7303010121739615336712278453">&lt; 1 sats</td>
                    <td class="text-right" data-search="10,167,135,000,000" data-order="10,167,135,000,000">10,167,135,000,000 SLL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">110</td>
                    <td class="text-left" data-search="GMD" data-order="GMD">
                        <img src="/images/currency/GMD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />GMD
                    </td>
                    <td class="text-right" data-search="65,785" data-order="65,785">65,785 BTC</td>
                    <td class="text-right" data-search="140" data-order="140.132070472502355176999679">140 sats</td>
                    <td class="text-right" data-search="46,945,000,000" data-order="46,945,000,000">46,945,000,000 GMD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">111</td>
                    <td class="text-left" data-search="LSL" data-order="LSL">
                        <img src="/images/currency/LSL.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LSL
                    </td>
                    <td class="text-right" data-search="55,435" data-order="55,435">55,435 BTC</td>
                    <td class="text-right" data-search="444" data-order="444.61799229837051985221758865">444 sats</td>
                    <td class="text-right" data-search="12,468,000,000" data-order="12,468,000,000">12,468,000,000 LSL</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">112</td>
                    <td class="text-left" data-search="LRD" data-order="LRD">
                        <img src="/images/currency/LRD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />LRD
                    </td>
                    <td class="text-right" data-search="50,882" data-order="50,882">50,882 BTC</td>
                    <td class="text-right" data-search="39" data-order="39.627735016435494190034285716">39 sats</td>
                    <td class="text-right" data-search="128,400,000,000" data-order="128,400,000,000">128,400,000,000 LRD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">113</td>
                    <td class="text-left" data-search="KMF" data-order="KMF">
                        <img src="/images/currency/KMF.png" width="24" height="18" class="mr-1 mb-1 border border-light" />KMF
                    </td>
                    <td class="text-right" data-search="26,001" data-order="26,001">26,001 BTC</td>
                    <td class="text-right" data-search="17" data-order="17.198820571830621542439416865">17 sats</td>
                    <td class="text-right" data-search="151,177,000,000" data-order="151,177,000,000">151,177,000,000 KMF</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">114</td>
                    <td class="text-left" data-search="TND" data-order="TND">
                        <img src="/images/currency/TND.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TND
                    </td>
                    <td class="text-right" data-search="2,484" data-order="2,484">2,484 BTC</td>
                    <td class="text-right" data-search="2,613" data-order="2613.2576557364191612252705793">2,613 sats</td>
                    <td class="text-right" data-search="95,068,000" data-order="95,068,000">95,068,000 TND</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">115</td>
                    <td class="text-left" data-search="TJS" data-order="TJS">
                        <img src="/images/currency/TJS.png" width="24" height="18" class="mr-1 mb-1 border border-light" />TJS
                    </td>
                    <td class="text-right" data-search="140" data-order="140">140 BTC</td>
                    <td class="text-right" data-search="701" data-order="701.12424247159554184991075495">701 sats</td>
                    <td class="text-right" data-search="19,920,000" data-order="19,920,000">19,920,000 TJS</td>
                    <td class="text-right">Unlimited</td>
                </tr>
                <tr>
                    <td class="text-left">116</td>
                    <td class="text-left" data-search="STD" data-order="STD">
                        <img src="/images/currency/STD.png" width="24" height="18" class="mr-1 mb-1 border border-light" />STD
                    </td>
                    <td class="text-right" data-search="11" data-order="11">11 BTC</td>
                    <td class="text-right" data-search="&lt; 1" data-order="0.3448041890707677245797869591">&lt; 1 sats</td>
                    <td class="text-right" data-search="3,124,000,000" data-order="3,124,000,000">3,124,000,000 STD</td>
                    <td class="text-right">Unlimited</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="text-right"><small>2020-11-01T17:09:48.6260806Z</small></p>
</div>
