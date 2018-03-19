
   let rangeArray = [];


function range(start, end, step){
    
 

    for (i=start ; i<end + 1 ; i+=step){
        rangeArray.push(i);
    }
    console.log(rangeArray);
}

function sum(array){

    let count = 0;

    for (i = 0 ; i<array.length ; i++){
        count += array[i];
         console.log(count);
    }
   
}

range(1, 10, 1);
sum(rangeArray);

