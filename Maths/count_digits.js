function countDigits(n) {
  let count = 0;
  let number = n;
  while (number != 0) {
    let digit = number % 10;
    if (digit !== 0 && n % digit === 0)
      count++
    number = Math.floor(number / 10);
  }
  return count;
}

console.log(countDigits(660));
