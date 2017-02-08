// jshint esversion:6

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

let result = sort([9999999999, 3984,3984,2626,848883,423,6643,2456,123,432,1,10000000,9000,888]);
console.log(result);
return result;