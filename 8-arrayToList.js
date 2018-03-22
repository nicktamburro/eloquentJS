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
//I don't fully understand this loop yet... it's in the hints of the book, I changed "node" to "i"
  for (i = list; i; i = i.rest) {
    array.push(i.value);
  }
  console.log(array);
}

//I need to comment these, and teach them to myself again.  this whole page. 
function prepend(value, list){
    return {value, rest: list};
}

function nth(list){
    if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

//arrayToList([1, 2, 3]);
listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });