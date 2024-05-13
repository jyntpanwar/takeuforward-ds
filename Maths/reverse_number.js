function reverseNumber(n) {
  let number = 0;
  while (n != 0) {
    let digit = n % 10;
    number = number * 10 + digit;
    n = Math.floor(n / 10);
  }
  return number;
}

console.log(reverseNumber(665));
