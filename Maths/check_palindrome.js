var isPalindrome = function(x) {
  if (x < 0)
    return false;
  let number = x;
  let reverse = 0;
  while (number != 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  return x === reverse;
}

console.log(isPalindrome(121));