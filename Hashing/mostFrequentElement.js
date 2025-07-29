function mostFrequentElement(arr) {

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let max = 0;
  let maxElement = null;
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      maxElement = key;
    }
  }
  return maxElement;  
}

const tc1 = [1, 2, 2, 3, 3, 3];
console.log(mostFrequentElement(tc1));
const tc2 = [4, 4, 5, 5, 6];
console.log(mostFrequentElement(tc2));