// ssss*ssss
// sss***sss
// ss*****ss
// s*******s
// *********

// i = 0 -> spaces = 4 | * = 1 | Spaces = 4
// i = 1 -> spaces = 3 | * = 3 | Spaces = 3
// i = 2 -> spaces = 2 | * = 5 | Spaces = 2
// i = 3 -> spaces = 1 | * = 7 | Spaces = 1
// i = 4 -> spaces = 0 | * = 9 | Spaces = 0

// How spaces fare to i === > n - i + 1
// How * fares to i ==== > i + 1 , i + i + 1, i + i + 1 .... (2*i) +1

function pattern11(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    start = i % 2 === 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${start}`);
      start = 1 - start;
    }
    console.log("");
  }
}

pattern11(5);
