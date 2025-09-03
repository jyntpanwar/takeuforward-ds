function recursiveInsertionSort(arr, begin, size) {
  if (begin >= size) {
    return;
  }
  let temp = arr[begin];
  let i = begin;

  while(i > 0 && arr[i - 1] > temp) {
    arr[i] = arr[i-1];
    i--;
  }
  arr[i] = temp;
  recursiveInsertionSort(arr, begin + 1, size);  
}

const input = [10, 8, 4, 2, 11, 13, 1];
recursiveInsertionSort(input, 0, input.length);
console.log("output => " + input);