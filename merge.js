// jshint esversion:6

function mergeSort(array){
   var len = array.length;
   if(len <2)
      return array;
   var mid = Math.floor(len/2),
       left = array.slice(0,mid),
       right =array.slice(mid);
   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

let result = mergeSort([6633, 108308, 1, 58038, 9920, 888, 5]);
console.log(result);