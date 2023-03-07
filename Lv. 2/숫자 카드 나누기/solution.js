function solution(arrayA, arrayB) {
  const gcdA = findGCD(arrayA);
  const gcdB = findGCD(arrayB);

  const isPossiblegcdA = !arrayB.some((b) => b % gcdA === 0);
  const isPossiblegcdB = !arrayA.some((a) => a % gcdB === 0);

  if (isPossiblegcdA && isPossiblegcdB) {
    return Math.max(gcdA, gcdB);
  }
  if (isPossiblegcdA) {
    return gcdA;
  }
  if (isPossiblegcdB) {
    return gcdB;
  }
  return 0;
}

function findGCD(nums) {
  function getGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a % b);
  }

  let gcd = nums[0];
  for (let i = 1; i < nums.length; i++) {
    gcd = getGCD(gcd, nums[i]);
  }
  return gcd;
}
