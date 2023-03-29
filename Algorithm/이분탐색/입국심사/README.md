# 문제

[입국심사](https://school.programmers.co.kr/learn/courses/30/lessons/43238)

# 코드

```javascript
function solution(n, times) {
  let left = 1;
  let right = times[0] * n;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i]);
    }
    if (cnt < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
```

# 풀이

이분탐색으로 범위를 좁혀가며 찾습니다.

정답과 1만큼 차이로 틀리거나, 무한 루프에 빠져 시간 초과를 받는 경우를 조심합니다.

left, right의 범위는 임의로 잡아도 크게 상관 없습니다. 단 left와 right 사이에 반드시 목표지점이 포함되어야 합니다.

중간값을 구할 때는 `mid = Math.floor((left + right) / 2)`와 같이 작성합니다.

이후 조건문에 따라 left, right을 `left = mid + 1` 또는 `right = mid`로 갱신합니다.

마지막으로 left를 return 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
