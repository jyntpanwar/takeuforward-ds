function findTheUnion(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);      
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j++]);
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
    while (i < arr1.length && result.at(-1) === arr1[i]) {
      i++;
    }
    while (j < arr2.length && result.at(-1) === arr2[j]) {
      j++;
    }
  }

  while (i < arr1.length) {
    if (result.at(-1) !== arr1[i]) {
      result.push(arr1[i]);    
    } 
    i++;
  }

  while (j < arr2.length) {
    if (result.at(-1) !== arr2[j]) {
      result.push(arr2[j])
    }
    j++;
  }

  return result;
}

const arr1 = [1, 1, 4, 7, 9];
const arr2 = [2, 4, 4, 7, 10, 10, 10];
console.log(`Union for ${arr1} and ${arr2} is ${findTheUnion(arr1, arr2)}`);