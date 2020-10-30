---
layout: page
title: BTC ATH
exercises: [Burpees, Squats, Pull ups, Push ups]
reps: [50, 40, 30, 20, 10]
---

<table class="responsive-table table">
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
