# 문제

[올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

# 코드

```javascript
function solution(s) {
  var answer = true;
  let stack = [];

  s.split('').forEach((v) => {
    if (v === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(v);
  });

  return stack.length === 0 ? true : false;
}
```

# 풀이

Stack을 사용하는 가장 기본적인 문제입니다.

# 결과

정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
