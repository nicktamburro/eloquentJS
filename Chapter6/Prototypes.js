//constructors...

function Rabbit(type){
	this.type = type;
}

//adding a new method
Rabbit.prototype.speak = function(line){
	console.log("The  " + this.type + " rabbit says '" + line + "'");
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.speak("Doom...");

//we can add a property, but then override it for specific cases:
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); //> small

//making an exception
killerRabbit.teeth = "long, sharp, bloody";
console.log(killerRabbit.teeth); //>"long, sharp..."
console.log(blackRabbbit.teeth); //>"small"...

//adding more new properties to show Prototype Interference
Rabbit.prototype.dance = function(){
	console.log("The " + this.type + " rabbit dances a jig.");
}

//since the new property is a function, needs(), where .teeth didn't...
killerRabbit.dance();
//> The killer rabbit dances a jig...

console.log(blackRabbit.type);  //will show "black"

