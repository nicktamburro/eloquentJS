//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        
    }
    if (typeof(a) == "object" && typeof(b) == "object"){
      var xA;
      var xB;
      var countA = 0;
      var countB = 0;
      var stringA = "";
      var stringB = "";
        for (x in a) {
            stringA += x + " " + a[x];
            countA++;
            console.log(stringA);
            console.log(countA);
    }
        for (x in b) {
            stringB += x + " " + a[x];
            countB++;
            console.log(stringB);
            console.log(countB);
    }
    if (countA != countB){
        return false;
    }
    if (stringA != stringB){
        return false;
    }

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