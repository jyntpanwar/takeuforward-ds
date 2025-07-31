function merge(arr, low, mid, high) {
  // for (let i = low; i <= high; i++) {
  //   process.stdout.write(arr[i] + " ");
  // }
  // console.log();
  let left = low;
  let right = mid + 1;
  const result = [];

  // compare both the arrays and merge
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
      result.push(arr[right]);
      right++;
    }
  }
  
  // deal with the leftovers
  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }
  while (right <= high) {
    result.push(arr[right]);
    right++;
  }

  // copy to original array
  for (let i = low; i <= high; i++) {
    arr[i] = result[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  const mid = Math.trunc((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

const tc1 = [5, 8, 3, 1, 5, 7];
mergeSort(tc1, 0, tc1.length - 1);
console.log(tc1);
