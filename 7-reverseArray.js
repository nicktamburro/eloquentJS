//write a function that takes an array, and returns a new reversed array, without using the built-in "reverse" method
//THEN write a function to reverse the array without using a new array : reverseArrayInPlace();


function reverseArray(array){
    let reversed = [];

    for (i=0 ; i< array.length ; i++){
        reversed.unshift(array[i]);
    }
    console.log(reversed);
}

reverseArray(["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"]);