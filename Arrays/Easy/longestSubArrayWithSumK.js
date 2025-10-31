// Better solution
// But is the best one when array contains 0s and -negatives too
function longestSubArrayWithSumKBetter(nums, k) {
  let sum = 0;
  let maxLen = 0;
  const preSumMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Simply preSum, keep adding array values
    sum += nums[i];
    // If sum reaches desired k, set maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    // Now check if currentSum - k, is available in preSum data.
    // This means that we have found a new subarray which adds up to K
    const rem = sum - k;
    if (preSumMap.has(rem)) {
      // If yes, find the length = currIndex - indexFromPresum
      // the index till which sum of elements => rem,
      // rest elements sums up to become k)
      const len = i - preSumMap.get(rem);
      // compare which len is greater
      maxLen = Math.max(maxLen, len);
    }
    // add calculated presum to map<sum, index>.
    // Also check key sum is not overriden
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }
  return maxLen;
}

const tc1 = [10, 5, 2, 7, 1, 9];
console.log("tc1 : " + longestSubArrayWithSumKBetter(tc1, 15));

const tc2 = [-3, 2, 1];
console.log("tc1 : " + longestSubArrayWithSumKBetter(tc2, 6));

// Optimal, But only for positives
function longestSubArrayWithSumKOptimal(nums, k) {
  let maxLen = 0, i = 0; j = 0, sum = nums[0];
  while (j < nums.length) {
    // while curr sum is > than k, reduce subarray by moving i forward
    // and actually reduce the sum too
    while (i <= j && sum > k) {
      sum -= nums[i];
      i++;
    }
    // if required condition matches
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
    // Moves to next right pointer
    j++;
    // for summing up the subarray
    if (j < nums.length) {
      sum += nums[j];
    }
  }
  return maxLen;
}

console.log('Optimal 1: ' + longestSubArrayWithSumKOptimal([10, 5, 2, 7, 1, 9], 15));
