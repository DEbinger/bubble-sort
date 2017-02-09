###There are many algorithms or jobs that deal with sorting collections of data or reorder items. I will be going over a few examples.

####1. Bubble Sort
  *This is a simple sorting job that will repeatedly go through a list of items. It will compare items in the list, then swaps the items if it is in the wrong order. It will keep going through the list until no wrong items are there. Then it will through the list one last time and this will finish the job.



```javascript
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
```
  * Best use case
  - O(n) or Linear

  * Worst use case
  - O(n²)

####2. Insertion Sort