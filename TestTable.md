---
layout: page
title: Test Table
css:
  - /assets/css/table.css
---

<table id="content-table3" class="table-responsive-full sort-table">
	<thead>
		<tr>
			<th class="title">Title
				<div class="sort-table-arrows">
					<a href="javascript:sort(true, 'title', 'content-table3');"><button class="button" title="Αύξουσα ταξινόμηση"><i class="fa fa-chevron-down"></i></button></a>
					<a href="javascript:sort(false, 'title', 'content-table3');"><button class="button" title="Φθίνουσα ταξινόμηση"><i class="fa fa-chevron-up"></i></button></a>
				</div>
			</th>
			<th class="composer">Composer
				<div class="sort-table-arrows">
					<a href="javascript:sort(true, 'composer', 'content-table3');"><button class="button" title="Αύξουσα ταξινόμηση"><i class="fa fa-chevron-down"></i></button></a>
					<a href="javascript:sort(false, 'composer', 'content-table3');"><button class="button" title="Φθίνουσα ταξινόμηση"><i class="fa fa-chevron-up"></i></button></a>
				</div>
			</th>
			<th class="lyrics">Lyrics
				<div class="sort-table-arrows">
					<a href="javascript:sort(true, 'lyrics', 'content-table3');"><button class="button" title="Αύξουσα ταξινόμηση"><i class="fa fa-chevron-down"></i></button></a>
					<a href="javascript:sort(false, 'lyrics', 'content-table3');"><button class="button" title="Φθίνουσα ταξινόμηση"><i class="fa fa-chevron-up"></i></button></a>
				</div>
			</th>
			<th class="set">Set
				<div class="sort-table-arrows">
					<a href="javascript:sort(true, 'set', 'content-table3');"><button class="button" title="Αύξουσα ταξινόμηση"><i class="fa fa-chevron-down"></i></button></a>
					<a href="javascript:sort(false, 'set', 'content-table3');"><button class="button" title="Φθίνουσα ταξινόμηση"><i class="fa fa-chevron-up"></i></button></a>
				</div>
			</th>
			<th class="arranger">Arranger / Editing</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="Title" class="title" class="title">Come in and stay a while</td>
			<td data-label="Composer" class="composer">Polay, Rhonda</td>
			<td data-label="Lyrics" class="lyrics">Polay, Rhonda</td>
			<td data-label="Set" class="set">SSAATTB a-cappella</td>
			<td data-label="Arranger">Sarandakos, S. &amp; Legakis, M. / Legakis, M. (Ed.)</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">Eleanor Rigby</td>
			<td data-label="Composer" class="composer">Lennon, J. | McCartney, P.</td>
			<td data-label="Lyrics" class="lyrics">Lennon, J. | McCartney, P.</td>
			<td data-label="Set" class="set"><span>SSATTBB a-cappella</span></td>
			<td data-label="Arranger">Hare, N. &amp; Legakis, M., / Legakis, M. (Ed.)</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">In memoriam<br><small>(from "Les Choristes")</small></td>
			<td data-label="Composer" class="composer">Coulais, B.</td>
			<td data-label="Lyrics" class="lyrics">Barratier, C.</td>
			<td data-label="Set" class="set"><span>SSAATTBB, Pno.</span></td>
			<td data-label="Arranger">Legakis, M.</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">Lover Man</td>
			<td data-label="Composer" class="composer">Davies, J. | Ramirez, R. | Sherman, J.</td>
			<td data-label="Lyrics" class="lyrics">Davies, J. | Ramirez, R. | Sherman, J.</td>
			<td data-label="Set" class="set"><span>SATB, Pno.</span></td>
			<td data-label="Arranger">Legakis, M.</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">Lueur d'été<br><small>(from "Les Choristes")</small></td>
			<td data-label="Composer" class="composer">Coulais, B. </td>
			<td data-label="Lyrics" class="lyrics">Barratier, C.</td>
			<td data-label="Set" class="set"><span>SSAATTBB, Pno.</span></td>
			<td data-label="Arranger">Legakis, M.</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">Stairway to Paradise<br><small>(from "George White's Scandals of 1922")</small></td>
			<td data-label="Composer" class="composer">Gershwin, G. | Francis, A. | De Sylva B.G.</td>
			<td data-label="Lyrics" class="lyrics">Gershwin, I.</td>
			<td data-label="Set" class="set"><span>SATTBB, Pno.</span></td>
			<td data-label="Arranger">Legakis, M.</td>
		</tr>
		<tr>
			<td data-label="Title" class="title">Who will buy?<br><small>(from "Oliver")</small></td>
			<td data-label="Composer" class="composer">Burt, Lionel</td>
			<td data-label="Lyrics" class="lyrics">Burt, Lionel</td>
			<td data-label="Set" class="set"><span>SSAATTBB, Pno.</span></td>
			<td data-label="Arranger">Legakis, M.</td>
		</tr>
	</tbody>
</table>

<script>
function sort(ascending, columnClassName, tableId) {
		var tbody = document.getElementById(tableId).getElementsByTagName(
				"tbody")[0];
		var rows = tbody.getElementsByTagName("tr");
		var unsorted = true;
		while (unsorted) {
			unsorted = false
			for (var r = 0; r < rows.length - 1; r++) {
				var row = rows[r];
				var nextRow = rows[r + 1];
				var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
				var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;
				value = value.replace(',', ''); // in case a comma is used in float number
				nextValue = nextValue.replace(',', '');
				if (!isNaN(value)) {
					value = parseFloat(value);
					nextValue = parseFloat(nextValue);
				}
				if (ascending ? value > nextValue : value < nextValue) {
					tbody.insertBefore(nextRow, row);
					unsorted = true;
				}
			}
		}
	};
</script>
