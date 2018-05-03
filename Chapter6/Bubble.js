function    				bubbleSort(array){


console.log("original: " + array);
	do{
	var swap = false;
		for(i=0 ; i<array.length ; i++){
			if(array[i] > array[i+1]){
				let t = array[i];
				array[i] = array[i+1];
				array[i+1] = t;
				swap = true;
			}
		}
	}while(swap);
	console.log(array);
}

let first = [1, 5, 4, 7, 8, 6];
let second = [10, 12, 11, 16, 5];

bubbleSort(first);
bubbleSort(second);