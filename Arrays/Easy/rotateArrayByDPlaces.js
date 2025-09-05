function reverse(arr, start, end) {
  let low = start;
  let high = end;

  while (low < high) {
    const temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
}

function leftRotateArrayByDPlaces(arr, n, d) {
  reverse(arr, 0, d-1);
  reverse(arr, d, n-1);
  reverse(arr, 0, n-1);
}

function rightRotateArrayByDPlaces(arr, n, d) {
  reverse(arr, 0, n-d-1);
  reverse(arr, n-d, n-1);
  reverse(arr, 0, n-1)
}

const input = [2,3,5,7,8,9,4];
console.log("Before : " + input);
leftRotateArrayByDPlaces(input, input.length, 3);
console.log("After : " + input);

const input2 = [1,2,3,4,5,6];
console.log("Before : " + input2);
rightRotateArrayByDPlaces(input2, input2.length, 1);
console.log("After : " + input2);
