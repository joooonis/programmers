function solution(a, b) {
  let sum = [...a, ...b].reduce((a, b) => a + b);
  if (sum % 2) return -1;
  let targetSum = sum / 2;
  sum = a.reduce((a, b) => a + b);
  let c = a.concat(b);
  // a pointer
  let i = 0;
  // b pointer
  let j = a.length;

  let count = 0;
  while (sum != targetSum) {
    if (sum < targetSum) {
      sum += c[j];
      j++;
      j %= c.length;
    } else {
      sum -= c[i];
      i++;
      i %= c.length;
    }
    count++;
    if (i === j || (j === 0 && i === a.length)) return -1;
  }
  return count;
}
