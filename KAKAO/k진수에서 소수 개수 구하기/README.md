# 문제

[k진수에서 소수 개수 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

# 코드

```javascript
function solution(n, k) {
  let num = n.toString(k);
  return num.split('0').map(Number).filter(isPrime).length;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

# 결과

정확성: 100.0
합계: 100.0 / 100.0
