// Checks if a array is sorted
function checkArraySorted(arr, n) {
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i-1]) {
      return false;
    }
  }
  return true;  
}

const input = [1, 3, 5, 7, 9];
console.log(checkArraySorted(input, input.length));

const input2 = [1, 2, 3, 10, 4];
console.log(checkArraySorted(input2, input2.length));