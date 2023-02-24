# 문제

[피보나치 수](https://school.programmers.co.kr/learn/courses/30/lessons/12945)

# 코드

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
  }
  return memo[n];
}

function solution(n) {
  return fibonacci(n) % 1234567;
}
```

# 풀이

n이 매우 큰 경우 n번째 피보나치 수는 정수 자료형의 범위를 벗어나 overflow가 납니다. 따라서 모든 연산에서 % 연산을 사용하여, 모든 연산에서 overflow가 일어나지 않게 해줍니다.

# 결과

정확성 : 100.0
합계 : 100.0 / 100.0
