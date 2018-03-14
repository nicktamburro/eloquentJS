

function fizzbuzz(){

let count = 1;

    for (let i = 0 ; i<100 ; i++){
        if (count % 3 == 0 && count % 5 == 0){
            console.log("fizzbuzz");
        }
        else if (count % 3 == 0){
            console.log("fizz");
        }else if (count % 5 == 0){
            console.log("buzz")
        }else {
            console.log(count);
        }
        count++;
    }

}

fizzbuzz();
module.exports = fizzbuzz;