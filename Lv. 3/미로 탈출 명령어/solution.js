function solution(n, m, x, y, r, c, k) {
  let answer = '';
  let count = k;
  let over = [0, 0, 0, 0];

  const distance = Math.abs(x - r) + Math.abs(y - c);
  if (distance > k || distance % 2 !== k % 2) return 'impossible';

  if (x < r) {
    answer += 'd'.repeat(r - x);
    count -= r - x;
  }

  if (count >= 2) {
    
  }

  if (y > c) {
    answer += 'l'.repeat(y - c);
    count -= y - c;
  }

  return answer;
}
