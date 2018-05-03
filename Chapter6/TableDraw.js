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


//outer array is an array of rows
function colWidths(rows) {
	//the map passes a second argument to the function, the index of the current element:
	//we're not using the first argument, which is why __.
	//by mapping over the elements of the first row, and only using the second argument,
	//colwidths builds up an array with one element for every column index
	return rows[0].map(function(_, i) {
		//the call to reduce runs over the out rows" arrayfor each index and picks out
		//the width of the widest cell at that index... 
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

function UnderlinedCell(inner){
	this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function(){
	return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function(){
return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height){
	return this.inner.draw(width, height - 1)
	.concat([repeat("-", width)]);
};

//the draw table function uses the internal helper fucntion drawRow to draw all rows, the joins them together
//with newline characters... 


function drawTable(rows){
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo){
		return blocks.map(function(block){
			return block[lineNo];
		}).join(" ");
	}

	//the draw row function converest the cell objects in the row to blocks
	//which are arrays of strings represents content of cells, split by line
	function drawRow(row, rowNum){
		var blocks = row.map(function(cell, colNum){
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo){
			return drawLine(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}

//okay I understand this one at least
function repeat(string, times){
	var result = "";
	for (var i=0; i<times; i++)
	result	 += string;
		return result;
}
///5. so TextCell then activated minHeight, minWidth, and draw...
function TextCell(text){
	//here we split the text into new lines for each cell
	this.text = text.split("\n");
}

TextCell.pototype.minWidth = function(){
	return this.text.reduce(function(width, line){
		return Math.max(width, line.length);
	}, 0);
};

TextCell.pototype.minHeight = function(){
	return this.text.length;
};

Text.Cell.prototype.draw = function(width, height){
	var result = [];
	for (var i = 0; i<height; i++){
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};

function UnderlinesCell(inner){
	this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function(){
	return thisinner.minWidth();
};

UnderlinedCell.prototype.minHeight = function(){
	return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height){
	return this.inner.draw(width, height - 1)
	.concat([repeat("-", width)]);
};

function dateTable(data){
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name){
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row){
			return keys.map(function(name) {
				return new TextCell(new TextCell(name));
			});
		});
			return [headers].concat(body);
}

///////////////////////////////////////////////////////
//now we try it
//okay, for tomorrow, now that we actually CALL it, I can start to trace it.
//do that. 

//1. we make a rows array...
var rows = [];
//2. we loop something 5 times
for (var i = 0 ; i < 5 ; i++){
	//3. a new arrray called row
	var row = [];
	//4. we loop 5 times
	for (var j = 0; j < 5; j++){
		//it's making a grid or chessboard, if the i and j index add up to even, push a ##
		//into row... but first, jump up to TextCell
		if ((j + i) % 2 == 0)
			row.push(new TextCell("##"));
		else
		//if not, push an empty space into row, but first jump up to TextCell...
			row.push(new TextCell(" "));
	}
	rows.push(row);
}






