function mergeSort(array){
  if(array.length < 2) return array;
  debugger;
  var mid = Math.floor(array.length/2);
  left = mergeSort(array.slice(0,mid));
  right = mergeSort(array.slice(mid));
  debugger;
  return merge(left, right);
}

function merge(left, right){
  debugger;
  var result = [];
  var leftIdx = 0;
  var rightIdx = 0;
  while(left.length>leftIdx || right.length>rightIdx){
    if(right[rightIdx] === undefined) {
      result = result.concat(left.slice(leftIdx));
      leftIdx = left.length;
    } else if (left[leftIdx] === undefined) {
      result = result.concat(right.slice(rightIdx));
      rightIdx = right.length;
    } else if (left[leftIdx] > right[rightIdx]) {
      result.push(right[rightIdx]);
      rightIdx++;
    } else {
      result.push(left[leftIdx]);
      leftIdx++;
    }
  }
  return result;
}
