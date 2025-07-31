function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j-1]) {
      if (arr[j] < arr[j-1]) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      j--;
    }
  }
}

const tc1 = [10, 5, 3, 7, 9, 5];
insertionSort(tc1);
console.log(tc1);