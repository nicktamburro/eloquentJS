//this is going to be a big one

function arrayToList(array){

for(i = array.length-1 ; i >= 0 ; i--) {
let list = {};

    let value = array[i];
    let object = {value: value, rest: list}
    console.log(object);
}

}

function listToArray(list){

}

function prepend(element, list){

}

function nth(list){

}

arrayToList([1, 2, 3]);