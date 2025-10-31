function findMaximumConsecutiveOnes(nums) {
  let count = 0, max = 0;
  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 1 ? count + 1 : 0;
    max = Math.max(max, count);
  }
  return max;
}


const tc1 = [1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1];
console.log('tc1 : ' + findMaximumConsecutiveOnes(tc1));
