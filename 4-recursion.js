//EXERCISE: write a recursive function that checks for even or odd, without using %...
//



function isEven(number){
    if (number < 0){
        number = Math.abs(number);
    }
    if (number === 0){
        console.log("true");
        return true;
    }if (number === 1){
        console.log("false");
        return "false";
    }else{
        number = number - 2;
        isEven(number);
    }
}

isEven(-20);