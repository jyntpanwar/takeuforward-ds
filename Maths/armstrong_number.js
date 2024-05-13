let armstrongNumber = function (n) {
  let number = n;
  let count = 0;
  let sum = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  number = n;
  while (number > 0) {
    let digit = number % 10;
    sum = sum + Math.pow(digit, count);
    number = Math.floor(number / 10);
  }
  return n === sum;
};

console.log(armstrongNumber(371));
