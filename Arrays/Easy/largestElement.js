function findLargestElement(arr, size) {
  let largest = 0;
  for (let i = 1; i < size; i++) {
    if (arr[i] > arr[largest]) {
      largest = i;
    }
  }
  return largest;  
}

const input = [1, 5, 7, 99, 2, 4];
const largestIndex = findLargestElement(input, input.length)
console.log(`Largest element is ${input[largestIndex]} at index : ${largestIndex}`);