var numArr = [1000000, 2435, 8,10,99,108,66,500, 1, 1 ,888,30,85];

//var numArr = [5,1,4,2,8];

function bubbleSort(numArr) {
  var sortNum;
    do {
      sortNum = false;
        for (var i=0; i < numArr.length; i++) {
          if (numArr[i] > numArr[i+1]) {
            var temp = numArr[i];
            numArr[i] = numArr[i+1];
            numArr[i+1] = temp;
            sortNum = true;
          }
        }
    } while (sortNum);
    return numArr;
}

bubbleSort(numArr);
// console.log(numArr);

module.exports = bubbleSort;