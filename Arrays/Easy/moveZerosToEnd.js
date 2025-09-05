function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function moveZeroesToEnd(arr, n) {
  let insertPos = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  while (insertPos < n) {
    arr[insertPos++] = 0;
  }
}


const input = [0,1,0,0,2,3,4,0,4,0,0];
console.log("Before : " + input);
moveZeroesToEnd(input, input.length);
console.log("After : " + input);
