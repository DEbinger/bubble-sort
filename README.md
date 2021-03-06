###There are many algorithms or jobs that deal with sorting collections of data or reorder items. I will be going over a few examples.

###1. Bubble Sort
This is a simple sorting job that will repeatedly go through a list of items. It will compare items in the list, then swaps the items if it is in the wrong order. It will keep going through the list until no wrong items are there. Then it will through the list one last time and this will finish the job.

####Pseudo-code example

```javascript
bubblesort(array)
  passes = 1;
    if (passes < array.length) {
      for (i = 0; i < array.length; i++)
        swap of array if they are out of order;
      passes++;
  }
```
####Javascript example
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

######A list that is already sorted

#####Worst use case
  * O(n²) or Quadratic

######When a list is large


###2. Insertion Sort
This is a simple soting job that makes a list of items one at a time. It is good for smaller lists of items. Sorting is done in-place with the items being stored and checks the item against largest item. If current item is larger it stays in place otherwise if moves down the list to move into the right space.

####Pseudo-code example

```javascript
insertionsort(values){
  for (i = 1; i < values.length; i++)
    temp = values[i];
    temp inserted in correct  position in the subarray
  }
```

####Javascript example
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

######A list that is already sorted

#####Worst use case
* O(n²) or Quadratic

######A list that is the reverse of final outcome


###3. Quick Sort
This is a comparison sorting job that uses a pivot or item to be used as a key. It sorts by putting items to the left if smaller of the pivot and to the right if larger. Keep using a pivot to sort left and right until the sort is completed.


####Pseudo-code example

```javascript
QuickSort(left, right) {
  if (left < right) {
    pivot = partition (a, left, right)
    Quicksort (a, left, pivot-1)
    Quicksort (a, pivot+1, right)
  }
}
```

####Javascript example
```javascript
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

```
#####Best use case
* O(n log n) and O(n) or Linear

######When the pivot selected is in the middle of list.

#####Worst use case
* O(n²) or Quadratic

######Dependant on pivot selection. If pivot is too large or too small on list.


###4. Selection Sort
This is a sort where take the smallest entry from the unsorted portion of a list and build a sorted list at the front, entry by entry.


####Pseudo-code example

```javascript
func selectionSort(array)
    max = length(array) - 1

    for i from 0 to max
        key = array[i]
        keyj = i

        for j from i+1 to max
            if array[j] < key
                key = array[j]
                keyj = j

        array[keyj] = array[i]
        array[i] = key

    return array

end func

```

####Javascript example
```javascript
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

```
#####Best use case
* O(n²) or Quadratic

######When memory is limited

#####Worst use case
* O(n²) or Quadratic

######Large lists


---------------------------------------------------------------------
###5. Merge Sort
This sorting job that breaks up a list into two smaller lists of close to the same size, then combines them until it can not divide anymore.


####Pseudo-code example

```javascript
func mergesort( var a as array )
     var l1 as array = a[0] ... a[n/2]
     var l2 as array = a[n/2+1] ... a[n]

     l1 = mergesort( l1 )
     l2 = mergesort( l2 )

     return merge( l1, l2 )
end func

func merge( var a as array, var b as array )
     var c as array

     while ( a and b have elements )
          if ( a[0] > b[0] )
               add b[0] to the end of c
               remove b[0] from b
          else
               add a[0] to the end of c
               remove a[0] from a
     while ( a has elements )
          add a[0] to the end of c
          remove a[0] from a
     while ( b has elements )
          add b[0] to the end of c
          remove b[0] from b
     return c
end func

```

####Javascript example
```javascript
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


```
#####Best use case
* O(n log n) and O(n) or Linear

######not completed

#####Worst use case
* O(n log n)

######Best case for insertion sort