function findSecondLargest(arr, size) {
  let largest = arr[0];
  let sLargest = -200; // Max min value

  for (let i = 1; i < size; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}

const input = [2, 4, 6, 8, 9, 1, 14, 99, 11, 12, 13];
console.log(findSecondLargest(input, input.length));