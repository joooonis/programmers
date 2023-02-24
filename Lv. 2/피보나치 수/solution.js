function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
  }
  return memo[n];
}

function solution(n) {
  return fibonacci(n) % 1234567;
}
