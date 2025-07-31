function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function partition(a, low, high) {
  const pivot = a[low];
  let i = low;
  let j = high;

  while (i < j) {
    // find the index of the value from the left which is greater than the pivot
    while (a[i] <= pivot && i <= high - 1) {
      i++;
    }
    // find the index of the value from the right which is smaller than the pivot
    while (a[j] > pivot && j >= low + 1) {
      j--;      
    }
    // if i and j havent crossed yet, that means we found some values that can be swapped
    if (i < j) {
      swap(a, i, j);
    }
   }
  // Now we have fount the correct position for the pivot as j stands exactly
  // from where all the values in the left and less than pivot and all values 
  // on the right are greater than the pivot value, so we swap the values at pivot 
  // position and j position
  swap(a, low, j);
  // return the partition index, the partition value sits in its correct index in the array
  return j;
}

function quickSort(a, low, high) {
  if (low < high) {
    const partitionIndex = partition(a, low, high);
    quickSort(a, low, partitionIndex - 1);
    quickSort(a, partitionIndex + 1, high);
  }  
}

const tc1 = [8, 4, 2, 1, 55, 34];
quickSort(tc1, 0, tc1.length - 1);
console.log(tc1);