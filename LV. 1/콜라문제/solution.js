function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    m = Math.floor(n / a);
    r = n % a;
    answer += m * b;
    n = m * b + r;
  }
  return answer;
}
