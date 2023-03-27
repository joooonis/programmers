# 문제

[다음 큰 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/12911)

# 코드

```javascript
function solution(n) {
  const count = countOne(n);
  let nextNum = n + 1;
  while (countOne(nextNum) !== count) {
    nextNum++;
  }
  return nextNum;
}

function countOne(num) {
  return num
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;
}
```

# 풀이

정수를 2진수로 바꾸기 => `num.toString(2)`

# 결과

정확성: 100.0
합계: 100.0 / 100.0
