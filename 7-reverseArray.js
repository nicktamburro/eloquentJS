
function reverseArray(array){
    let reversed = [];

    for (i=0 ; i< array.length ; i++){
        reversed.unshift(array[i]);
    }
    console.log(reversed);
}

reverseArray(["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"]);