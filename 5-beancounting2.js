//write a function that takes 2 arguments, a string and a character... 
//the function searches the string, and returns the number of times the character appears

function charCounter(string, char){
    let count = 0;

    for (i=0; i<string.length; i++){
        if(string.charAt(i) === char){
            count++;
        }
    }
    console.log(count);
}

charCounter("There's a starman waiting in the sky", "s");