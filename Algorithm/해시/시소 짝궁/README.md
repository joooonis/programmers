# 문제

[시소짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/152996)

# 코드

```javascript
function solution(weights) {
  let answer = 0;
  let hash = {};

  for (let i = 0; i < weights.length; i++) {
    const w = weights[i];
    answer += hash[w] || 0;
    answer += hash[w * 2] || 0;
    answer += hash[w / 2] || 0;
    answer += hash[(w * 2) / 3] || 0;
    answer += hash[(w * 3) / 2] || 0;
    answer += hash[(w * 3) / 4] || 0;
    answer += hash[(w * 4) / 3] || 0;
    hash[w] = (hash[w] || 0) + 1;
  }

  return answer;
}
```

# 풀이

해시, 맵을 사용합니다.

한 사람의 몸무게를 w라고 했을 때, 그 사람은 w, 2w, 1/2w, 2/3w, 3/2w, 3/4w, 4/3w의 몸무게를 지닌 사람들과 짝궁을 이룰 수 있습니다.

hash[w] 대신에 hash[w] || 0을 사용하여 hash[w] 값이 undefined 일 때에 초기값=0으로 처리합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
