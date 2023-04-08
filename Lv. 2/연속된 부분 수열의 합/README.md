# 문제

[연속된 부분 수열의 합](https://school.programmers.co.kr/learn/courses/30/lessons/178870)

# 코드

```javascript
function solution(sequence, k) {
  let answers = [];
  let sum = 0;
  const map = new Map([[0, 0]]);

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (map.has(sum - k)) {
      answers.push([map.get(sum - k), i]);
    }
    map.set(sum, i + 1);
  }

  answers.sort((a, b) =>
    a[1] - a[0] !== b[1] - b[0] ? a[1] - a[0] - (b[1] - b[0]) : a[0] - b[0]
  );
  return answers[0];
}
```

# 풀이

누적합을 계산하며 부분 수열의 합이 k가 되는 인덱스 범위를 찾습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
