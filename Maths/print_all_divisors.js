let printAllDivisors = function(n) {
  let divisors = [];
  for (let i = 1; i*i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

console.log(printAllDivisors(10));