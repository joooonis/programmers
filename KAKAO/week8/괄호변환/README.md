# 문제

[괄호 변환](https://school.programmers.co.kr/learn/courses/30/lessons/60058)

# 코드

```javascript
function solution(p) {
  if (!p.length) return '';

  const a = p[0];
  const b = a === '(' ? ')' : '(';

  let aCount = 1;
  let bCount = 0;
  let idx = 1;

  while (aCount !== bCount) {
    if (p[idx] === a) aCount++;
    if (p[idx] === b) bCount++;
    idx++;
  }

  let u = p.slice(0, idx);
  let v = p.slice(idx);

  if (isRightString(u)) {
    return u + solution(v);
  } else {
    let answer = '(' + solution(v) + ')';
    u = u.slice(1, -1);
    u = u
      .split('')
      .map((v) => (v === '(' ? ')' : '('))
      .join('');
    return answer + u;
  }
}

function isRightString(str) {
  let stack = [];

  for (const s of str) {
    if (stack[stack.length - 1] === '(' && s === ')') stack.pop();
    else stack.push(s);
  }

  return !stack.length;
}
```

# 풀이

주어진 차례대로 구현 하며 됩니다. 문자열 관련 기본 매서드들을 잘 기억해둡니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
