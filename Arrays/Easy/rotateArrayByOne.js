// function to left rotate an array by one position
function leftRotate(arr, n) {
  const temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i-1] = arr[i];
  }
  arr[n-1] = temp;
}

const input = [2,3,5,7,8,9,4];
console.log("Before : " + input);
leftRotate(input, input.length);
console.log("After : " + input);