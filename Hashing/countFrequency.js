// For an array of numbers
function countFrequencies(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max)
      max = nums[i];
  }
  const frequencyArray = new Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    frequencyArray[nums[i]]++;
  }

  const result = [];
  for (let i = 0; i < frequencyArray.length; i++) {
    if (frequencyArray[i] > 0) {
      result.push([i, frequencyArray[i]]);
    }
  }
  return result;
}

console.log(countFrequencies([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(countFrequencies([1, 2, 2, 1, 3]));

// For a string
function countCharacterFrequencies(str) {
  const frequencyArray = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    frequencyArray[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let result = [];
  for (let i = 0; i < frequencyArray.length; i++) {
    if (frequencyArray[i] > 0) {
      result.push([String.fromCharCode(i + 'a'.charCodeAt(0)), frequencyArray[i]]);
    }
  }
  return result;
}

console.log(countCharacterFrequencies("hello"));