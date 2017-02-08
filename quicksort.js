// jshint esversion:6

function quickSort(arr)
{
//check array length
if (arr.length === 0) {
return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  //this is to loop through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  //returns concatenated array
  return quickSort(left).concat(pivot, quickSort(right));
}

// let result = quickSort([77,99,3,576,9980,5,1,96,888,467,937]);
let result = quickSort([3984,2626,848883,423,6643,2456,123,432,1,10000000,9000,888]);
console.log(result);
//efficient
// let pivot = arr.length /2;

module.exports = quickSort;