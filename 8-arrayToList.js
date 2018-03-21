//this is going to be a big one



function arrayToList(array) {
//starts at null, because that's what the books asked for
  let list = null;
//backwards for loop to work from the end of the array
  for (let i = array.length - 1; i >= 0; i--) {
      //creates each object
    list = {value: array[i], rest: list};
  }
  //return list;
  console.log(list);
}

function listToArray(list){
  let array = [];
//I don't fully understand this loop yet...
  for (i = list; i; i = i.rest) {
    array.push(i.value);
  }
  console.log(array);
}




function prepend(element, list){

}

function nth(list){

}

//arrayToList([1, 2, 3]);
listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });