// 재귀로 풀수도 있습니다...

function solution(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split(''); // destructuring assignment
  let countSame = 1;
  let countInSame = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countInSame++;
    if (countSame === countInSame) break;
  }
  return solution(rest.slice(i + 1).join(''), count + 1);
}
