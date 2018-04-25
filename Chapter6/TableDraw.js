//takes 
function rowHeights(rows){
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
		//uses reduce to compute max height of an array, 
		//and is wrapped in map so it does it to all the rows in the rows array.... 
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}