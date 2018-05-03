function rowHeights(rows){
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
		//uses reduce to compute max height of an array, 
		//and is wrapped in map so it does it to all the rows in the rows array.... 
			console.log(Math.max(max, cell.minHeight()));
		}, 0);
	});
}



words = [["hello", "hi", "greetings"], ["nice to see you", "what's up", "yo"], ["later", "peace", "bye"]];

rowHeights(words);