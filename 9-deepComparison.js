//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

//this is maybe working, but the code looks dumb to have so many repetitions... let's see if we can fix it tomorrow

function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        
    }
    if ((typeof(a) == "object" && typeof(a) != null) && (typeof(b) == "object" && typeof(b) != null)){
   
      var countA = 0;
      var countB = 0;
      var stringA = "";
      var stringB = "";
        for (x in a) {
            stringA += x + " " + a[x] + " ";
            countA++;
    }
        for (x in b) {
            stringB += x + " " + b[x] + " ";
            countB++;
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
deepEqual({value: 1, head: "band"}, {value: 1, head: "bang", boy: "band"});