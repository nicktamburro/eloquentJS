//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

//this will need to get way cleaned up, and make the loop work in a more general sense...
//but it's a start

function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        
    }
    if ((typeof(a) == "object" && typeof(a) != null) && (typeof(b) == "object" && typeof(b) != null)){
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
            stringB += x + " " + b[x];
            countB++;
            console.log(stringB);
            console.log(countB);
    }
    if (countA != countB){
        console.log("false, different value count");
    }
    if (stringA != stringB){
        console.log("false, different strings");
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
deepEqual({value: 1, head: "bang"}, {value: 1, head: "band", boy: "big"});