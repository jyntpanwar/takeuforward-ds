function findMissingNumberInArray(nums, n) {
  let xor1 = 0, xor2 = 0;
  for (let i = 0; i < nums.length; i++) {
    xor1 = xor1 ^ nums[i];
    xor2 = xor2 ^ (i + 1);
  }
  xor2 = xor2 ^ n;
  return xor1 ^ xor2;
}


const tc1 = [1, 2, 3, 5];
console.log('tc1 : ' + findMissingNumberInArray(tc1, 5));

const tc2 = [1, 3, 4, 5, 6];
console.log('tc2 : ' + findMissingNumberInArray(tc2, 6));
