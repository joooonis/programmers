# 문제

[멀리 뛰기](https://school.programmers.co.kr/learn/courses/30/lessons/12914)

# 코드

```javascript
function solution(n) {
  if (n <= 1) return n;
  const memo = [1, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
  }
  return memo[n] % 1234567;
}
```

# 풀이

조금만 생각해보면 An = An-1 + An-2 인 피보나치 수열의 점화식을 떠올릴 수 있습니다.

피보나치 수열의 경우 재귀로 풀면 필요없는 호출이 너무 많아지므로 DP 알고리즘으로 풀어주면 효울적입니다. 또한 % 1234567 해준 값으로 대체 해주어야 모든 테케를 통과할 수 있습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
