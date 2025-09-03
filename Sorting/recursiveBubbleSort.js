const recursiveBubbleSort = (arr, n) => {
  if (n == 0)
    return;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i+1]) {
      const temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  recursiveBubbleSort(arr, n - 1);
}

const input = [5, 3, 2, 7, 10];
recursiveBubbleSort(input, 5);
console.log(input);