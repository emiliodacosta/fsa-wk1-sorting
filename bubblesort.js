function bubbleSort(array){
  var endIndex = array.length;
  while(endIndex>0){
    for(var n = 0; n < endIndex; n++){

      if(compare(array[n],array[n+1]) && array[n+1]){
        swap(array,n,n+1);
      }
    }
    endIndex--;
  }
  return array;
}

function swap(arr, left, right){
  var leftVal = arr[left];
  arr[left] = arr[right];
  arr[right] = leftVal;
}

function compare(left, right){
  return left>right;
}
