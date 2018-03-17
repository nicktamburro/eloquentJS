

//CHESS BOARD   // to fix, make it so the strings are just "#" or " ";  
//a y and x axis. do that tomorrow. 

//TODO, forgot they wanted a /n character to be part of this... throw that in!

let y = 1;
let string = "";
let size = 8;

let boardMaker = function(size){

    for (let i = 0 ; i < size ; i++){
        if (y % 2 != 0){
            string = "# ";
            y++;
        }else{
            string = " #";
            y++;
        }

	console.log(string.repeat(size / 2));
		//count++;
}
}


boardMaker(size);


