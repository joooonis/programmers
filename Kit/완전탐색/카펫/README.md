# 문제

[카펫](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

# 코드

```javascript
function solution(brown, yellow) {
  var answer = [];
  let target = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      target.push([i, yellow / i]);
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (target[i][0] * 2 + target[i][1] * 2 + 4 === brown) {
      answer = [target[i][1] + 2, target[i][0] + 2];
      break;
    }
  }

  return answer;
}
```

# 풀이

노란 카펫을 기준으로 가능한 가로X세로 쌍을 전부 찾고 이후 갈색 카펫과 비교하여 답을 찾습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
