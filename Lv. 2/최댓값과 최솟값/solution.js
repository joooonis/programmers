function solution(s) {
  const arr = s.split(' ');
  const x = [Math.min(...arr), Math.max(...arr)];
  return x.join(' ');
}
