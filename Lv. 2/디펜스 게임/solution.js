function solution(n, k, enemy) {
  let answer = 0;
  for (let i = 0; i < enemy.length; i++) {
    target = enemy.slice(i, i + k);
    if (k > 0 && Math.min(target) !== enemy[i]) {
      k -= 1;
    } else if (n >= enemy[i]) {
      n -= enemy[i];
    } else if (k > 0) {
      k -= 1;
    } else {
      return answer;
    }
    answer += 1;

    if (n <= 0 && k <= 0) {
      return answer;
    }
  }
  return answer;
}
