//write a function that counts the number of capitol B's in a given string...


function bCount(string){
    let count = 0;

    for (i=0 ; i<string.length; i++){
        if (string.charAt(i) === "B"){
            count++;
        }
    }
    console.log(count);
}

bCount("BodyCount");
bCount("I want my Baby Back Baby Back Baby Back");