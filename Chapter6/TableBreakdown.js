/*function rowHeights(rows){
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
		//uses reduce to compute max height of an array, 
		//and is wrapped in map so it does it to all the rows in the rows array.... 
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}*/



return Math.max(max, cell.minHeight());