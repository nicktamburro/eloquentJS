//EXERCISE: write a recursive function that checks for even or odd, without using %...
//
//so there has to be a mini-function that just subtracts by 2 until the number = 0 or 1... 
//it just keeps getting called...

let number = 37;

function isEven(number){
    if (number === 0){
        console.log("true");
    }if (number === 1){
        console.log("false");
    }else{
        number = number - 2;
        console.log("number");
        isEven(number);
    }
}

isEven(number);