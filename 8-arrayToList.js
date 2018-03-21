//this is going to be a big one



function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  //return list;
  console.log(list);
}

function listToArray(list){

}

function prepend(element, list){

}

function nth(list){

}

arrayToList([1, 2, 3]);