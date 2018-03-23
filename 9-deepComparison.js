//write deepEqual() takes 2 values, and returns true only if they're same value, or are object with same properties, whose
//values are also equal when compared with a recursive call to deepEqual...

function deepEqual(a, b){
    if (typeof(a) != typeof(b)){
        console.log("false and weird");
    }
    if (typeof(a) == "object" && typeof(b) == "object"){
        console.log("objects!");

    }
    if (a == b){
        console.log("true");
    }
    else {
        console.log("false");
}
}
    

deepEqual(2, 2);
deepEqual(2, 3);
deepEqual(2, "fox");
deepEqual({}, {});