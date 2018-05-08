function Vector(x, y){
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(other){
	//I think we're just increasing the dimensions???
	//let's see
	//we're not using it so far... 
	return new Vector(this.x + this.other, this.y + this.other);
}

var grid = ["top left", "top middle", "top right", 
			"bottom left", "bottom middle", "bottom right"];

function Grid(width, height){
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
}
Grid.prototype.isInside = function(vector){
	return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector){
	return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value){
	this.space[vector.x + this.width * vector.y] = value;
};

var grid = new Grid(5, 5);
//console.log(grid);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));