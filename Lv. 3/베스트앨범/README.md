# 문제

[베스트앨범](https://school.programmers.co.kr/learn/courses/30/lessons/42579)

# 코드

```javascript
function solution(genres, plays) {
  let hash = {};
  let playsSum = {};
  let answer = [];

  for (let i = 0; i < genres.length; i++) {
    hash[genres[i]] ||= [];
    hash[genres[i]].push([plays[i], i]);
    playsSum[genres[i]] = (playsSum[genres[i]] || 0) + plays[i];
  }

  const orders = Object.entries(playsSum).sort((a, b) => b[1] - a[1]);

  for (let [genre, _] of orders) {
    hash[genre].sort((a, b) => b[0] - a[0]);
    if (hash[genre].length === 1) {
      answer.push(hash[genre][0][1]);
    } else {
      answer.push(hash[genre][0][1]);
      answer.push(hash[genre][1][1]);
    }
  }
  return answer;
}
```

# 풀이

구냥 해시 잘 쓰고 정렬하구 요구사항대로 넣어주면 됩니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
