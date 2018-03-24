//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        
    }
    if (typeof(a) == "object" && typeof(b) == "object"){
      let aString = toString(a);
      let bString = toString(b);
      console.log(aString, bString);

    }
    if (a == b){
      
    }
    else {
    
}
}
    

deepEqual(2, 2);
deepEqual(2, 3);
deepEqual(2, "fox");
deepEqual({value: 1}, {value: 1});