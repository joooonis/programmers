function solution(k, d) {
  let answer = 0;
  let n = 0;
  while (n < d) {
    n += k;
  }

  for (let i = 0; i <= d; i += k) {
    for (let j = n; j >= 0; j -= k) {
      if (i ** 2 + j ** 2 <= d ** 2) {
        answer += Math.floor(j / k) + 1;
        n = j;
        break;
      }
    }
  }

  return answer;
}
