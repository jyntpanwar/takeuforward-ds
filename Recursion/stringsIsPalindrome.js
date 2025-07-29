function checkPalindrome(str, i, n) {
  if (i >= n / 2) {
    return true;
  }
  if (str[i] !== str[n - i - 1]) {
    return false;
  } else {
    return checkPalindrome(str, i + 1, n);
  }
}

const str = "racecar";
console.log(checkPalindrome(str, 0, str.length));
const str2 = "hello";
console.log(checkPalindrome(str2, 0, str.length));
