// Given a sorted array, it removes the duplicates
function removeDuplicates(arr, n) {
  let uniquePointer = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[uniquePointer]) {
      arr[++uniquePointer] = arr[i];
    }
  }
  // fill the rest of the array with underscores
  for (let i = uniquePointer + 1; i < n; i++) {
    arr[i] = "_";
  }
}

const input = [1, 1, 2, 2, 3, 3, 3, 4];
console.log("Before : " + input);
removeDuplicates(input, input.length);
console.log("After : " + input);

// If array does not contain duplicates
const input2 = [1,2,3,4,5,6];
console.log("Before : " + input2);
removeDuplicates(input2, input2.length);
console.log("After : " + input2);
