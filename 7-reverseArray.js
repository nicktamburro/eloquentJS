
function reverseArray(array){
    let reversed = [];

    for (i=0 ; i< array.length ; i++){
        reversed.unshift(array.shift(array[i]));
    }
    console.log(reversed);
}

reverseArray(["a", "b", "c", "d"]);