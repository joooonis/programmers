# 문제

[여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)

# 코드

```javascript
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let n = A.length;
  let aIdx = 0,
    bIdx = 0;
  let maxPoints = 0;

  while (aIdx < n && bIdx < n) {
    if (A[aIdx] < B[bIdx]) {
      maxPoints++;
      aIdx++;
      bIdx++;
    } else {
      bIdx++;
    }
  }

  return maxPoints;
}
```

# 풀이

그리디, 투포인터로 접근합니다. 각 팀을 오름차순으로 정렬하고, B팀이 가장 작은 값으로 A팀을 이길 수 있도록 해야합니다.
