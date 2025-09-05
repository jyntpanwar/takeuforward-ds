function linearSearch(arr, n, searchTerm) {
  let result = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == searchTerm) {
      result = i;
      break;
    }
  }
  return result
}

const ip = [1, 4, 8, 3, 9];
const searchterm = 8;
const result = linearSearch(ip, ip.length, searchterm);
console.log(`${searchterm} is available at pos : ${result}`);