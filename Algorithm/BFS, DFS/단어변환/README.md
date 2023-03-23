# 문제

[단어변환](https://school.programmers.co.kr/learn/courses/30/lessons/43163#qna)

# 코드

```javascript
function solution(begin, target, words) {
  let answer = Infinity;

  const visited = Array(words.length).fill(false);

  function dfs(current, count) {
    if (current === target) {
      answer = Math.min(count, answer);
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (isConnect(current, words[i]) && !visited[i]) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  }

  if (!words.includes(target)) return 0;

  dfs(begin, 0);

  return answer !== Infinity ? answer : 0;
}

const isConnect = (a, b) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count === 1;
};
```

# 풀이

DFS로 탐색하며 경로를 탐색합니다.

여행경로 문제와 거의 유사합니다.

두 단어가 연결되었는지 isConncet 함수를 만들어 확인하고, dfs로 방문하는 모든 경로의 탐색을 위해 dfs() 호출 전후로 방문 마커를 표시하고 다시 방문하지 않은 것으로 바꿔줍니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
