###There are many algorithms or jobs that deal with sorting collections of data or reorder items. I will be going over a few examples.

###1. Bubble Sort
This is a simple sorting job that will repeatedly go through a list of items. It will compare items in the list, then swaps the items if it is in the wrong order. It will keep going through the list until no wrong items are there. Then it will through the list one last time and this will finish the job.

####Pseudo-code

```javascript
bubblesort(array)
  passes = 1;
    if (passes < array.length) {
      for (i = 0; i < array.length; i++)
        swap of array if they are out of order;
      passes++;
  }
```

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
#####Best use case
  * O(n) or Linear

#####Worst use case
  * O(n²) or Quadratic

###2. Insertion Sort
This is a simple soting job that makes a list of items one at a time. It is good for smaller lists of items. Sorting is done in-place with the items being stored and checks the item against largest item. If current item is larger it stays in place otherwise if moves down the list to move into the right space.

####Pseudo-code

```javascript
insertionsort(values){
  for (i = 1; i < values.length; i++)
    temp = values[i];
    temp inserted in correct  position in the subarray
  }
```

```javascript
function sort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(j; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
return values;
}

```
#####Best use case
  * O(n) or Linear and O(1) or Constant

#####Worst use case
  * O(n²) or Quadratic