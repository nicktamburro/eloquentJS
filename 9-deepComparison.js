//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

//okay cool, his idea is way better of course, and it doesn't use this string trick...
//fix it tomorrow night
function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        console.log("types don't match!");
        return false;
        
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
        return false;
    }
    if (stringA != stringB){
        console.log("false, different strings");
        return false;
    }
   deepEqual(stringA, stringB);

}

    if (a === b){
        console.log("a match! non-objects");
        return true;
      
    }
    else {
        console.log("something else!");
        return false; 
    
}
}
    
deepEqual(2, 2);
deepEqual(2, 3);
deepEqual(2, "fox");
deepEqual({value: 1, head: "band"}, {value: 1, head: "bang", boy: "band"});
deepEqual({value: 10, dudes: "bro", bros: "dudes", noWorries: "bro"}, {value: 10, dudes: "bro", bros: "dudes", noWorries: "bro"});
deepEqual({value: null}, {value: null});