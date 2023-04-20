function solution(A, B) {
  let s = A.split('');
  if (A === B) return 0;
  for (let i = 1; i < A.length; i++) {
    s.unshift(s.pop());
    if (s.join('') === B) return i;
  }
  return -1;
}

let solution = (a, b) => (b + b).indexOf(a);
