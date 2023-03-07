function getGCD(a, b) {
  return b ? gcd(b, a % b) : a;
}

function getLCM(a, b) {
  return (a * b) / gcd(a, b);
}

function findGCD(nums) {
  return nums.reduce(gcd);
}

function findLCM(nums) {
  return nums.reduce(lcm);
}
