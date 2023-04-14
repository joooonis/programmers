# 문제

[요격 시스템](https://school.programmers.co.kr/learn/courses/30/lessons/181188)

# 코드

```javascript
function solution(targets) {
  targets.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let tail = -1;
  let answer = 0;
  targets.forEach(([s, e]) => {
    if (tail <= s) {
      tail = e;
      answer++;
    } else if (e < tail) {
      tail = e;
    }
  });

  return answer;
}
```

# 풀이

오름차순으로 정렬 후 미사일 범위를 순차적으로 계산해나갑니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
