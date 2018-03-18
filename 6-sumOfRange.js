
let rangeArray = [];

function range(start, end, step){
    if(start < end){
        rangeArray.push(start);
        start = start + 1;
        range();
    }
    console.log(rangeArray);
}

range(3, 10);