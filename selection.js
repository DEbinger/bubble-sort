// jshint esversion:6

function selectionSort(array){
  let min;
  let temp;
  let len = array.length;
  for(var i = 0; i < len; i++){
    min = i;
    for(var  j = i+1; j<len; j++){
       if(array[j]<array[min]){
          min = j;
       }
    }
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

let result = selectionSort([6633, 108308, 1, 58038, 9920, 888, 5]);
console.log(result);