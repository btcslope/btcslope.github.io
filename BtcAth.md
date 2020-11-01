---
layout: page
title: BTC ATH
ext-css:
  - //cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css
  - //cdn.datatables.net/1.10.22/css/dataTables.bootstrap4.min.css
  - //cdn.datatables.net/responsive/2.2.6/css/responsive.bootstrap4.min.css
js: 
  - /assets/js/DataTable.js
ext-js:
  - //cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js
  - //cdn.datatables.net/1.10.22/js/dataTables.bootstrap4.min.js
  - //cdn.datatables.net/responsive/2.2.6/js/dataTables.responsive.min.js
  - //cdn.datatables.net/responsive/2.2.6/js/responsive.bootstrap4.min.js
  
exercises: [Burpees, Squats, Pull ups, Push ups]
reps: [50, 40, 30, 20, 10]
---

<table id="example" class="table dt-responsive table-hover" style="width:100%">
  <thead>
    <tr>
      <th scope="col">Round</th>
      {% for exercise in page.exercises %}
      <th scope="col">{{ exercise }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% assign total = 0 %}
    {% for rep in page.reps %}
    {% assign total = total | plus: rep %}
    <tr>
      <th scope="row">Round {{ forloop.index }}</th>
      {% for exercise in page.exercises %}
      <td data-title="{{ exercise }}"> {{ rep }} </td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Sum</th>
      {% for exercise in page.exercises %}
        <td>{{ total }}</td>
      {% endfor %}
    </tr>
  </tfoot>
</table>
