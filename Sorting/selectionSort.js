/**
 * Selection Sort Algorithm
 *
 * Idea:
 * - Divide the array into two parts: sorted (left) and unsorted (right).
 * - Repeatedly find the minimum element from the unsorted part
 *   and place it at the beginning of the unsorted part (i.e., grow the sorted part).
 *
 * Time Complexity:
 * - Best case: O(n^2)
 * - Worst case: O(n^2)
 * - Average case: O(n^2)
 * - Space Complexity: O(1) (in-place)
 *
 * Note: Unlike insertion sort, selection sort always performs O(n^2) comparisons,
 *       but does at most (n - 1) swaps, which can be useful in scenarios where swaps are costly.
 */
function selectionSort(arr) {
  // Outer loop: move boundary of unsorted subarray
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index is the minimum
    let min = i;

    // Inner loop: find the index of the smallest element in the unsorted part
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; // Update min if smaller element found
      }
    }

    // Swap only if a new minimum was found
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

// ✅ Example Test
const tc1 = [5, 4, 3, 2, 1];
selectionSort(tc1);
console.log(tc1); // [1, 2, 3, 4, 5]
