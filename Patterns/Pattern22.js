// 3 3 3 3 3 
// 3 2 2 2 3 
// 3 2 1 2 3 
// 3 2 2 2 3 
// 3 3 3 3 3

// * here n = 3
// * Number of rows and columns = 2n -1 = 2 * 3 - 1 = 5
// * Subtract whole matrix by n and the matrix becomes

// 0 0 0 0 0
// 0 1 1 1 0
// 0 1 0 1 0
// 0 1 1 1 0
// 0 0 0 0 0

// Funda is to find the min(min(top, bottom), min(left, right)) - Basically find the min distance from all extremes.

// let p(i, j) denote the position at a given point. So, 

// top = i (distance from top)
// left = j (distance from left)
// bottom = (2n - 2) - i (distance from bottom) -  (2n-2) due to 0 based indexing
// right = (2n - 2) - j (distance from right.)

// again subtract from n, which gives us the resultant matrix

function pattern(n) {
  for (let i = 0; i < (2 * n) - 1; i++) {
    for (let j = 0; j < (2 * n) - 1; j++) {
      let top = i;
      let bottom = (2 * n - 2) - i;
      let left = j;
      let right = (2 * n - 2) - j;
      process.stdout.write(`${n - Math.min(Math.min(top, bottom), Math.min(left, right))} `);
    }
    console.log("");
  }
}

pattern(4);
