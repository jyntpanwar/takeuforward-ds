function lcmAndGcd(a, b) {
  let gcd;
  let product = a * b;
  while (true) {
    if (a === b) {
      gcd = a;
      break;
    }
    if (a === 0) {
      gcd = b;
      break;
    }
    if (b === 0) {
      gcd = a;
      break;
    } else if (a > b) a = a - b;
    else b = b - a;
  }
  return [product / gcd, gcd];
}

console.log(lcmAndGcd(5, 10));
