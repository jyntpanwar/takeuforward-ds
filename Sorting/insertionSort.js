/**
 * Insertion Sort Algorithm
 *
 * Idea:
 * - Imagine sorting cards in your hand: you pick one card at a time and insert it
 *   into its correct position among the already sorted cards.
 * - At any point, the left part of the array (0..i-1) is sorted.
 *
 * Time Complexity:
 * - Best case (already sorted): O(n)
 * - Worst/Average case: O(n^2)
 * - Space Complexity: O(1) (in-place)
 */
function insertionSort(arr) {
  // Outer loop goes through each element one by one
  for (let i = 0; i < arr.length; i++) {
    // Start comparing from the current index backwards
    let j = i;

    // While not at the beginning AND current element is smaller than previous
    while (j > 0 && arr[j] < arr[j - 1]) {
      // Swap arr[j] and arr[j-1] (to move smaller element leftwards)
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;

      // Move one step left
      j--;
    }
  }
}

// ✅ Example Test
const tc1 = [10, 5, 3, 7, 9, 5];
insertionSort(tc1); 
console.log(tc1); // [3, 5, 5, 7, 9, 10]
