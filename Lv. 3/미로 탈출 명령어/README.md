# 문제

[미로 탈출 명령어](https://school.programmers.co.kr/learn/courses/30/lessons/150365)

# 코드

```javascript
function solution(n, m, x, y, r, c, k) {
  let answer = [];

  function dfs(curr, path = '') {
    const [x, y] = curr;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const pt = ['d', 'u', 'r', 'l'];

    if (path.length > k) return;

    if (path.length === k && x === r && y === c) {
      answer.push(path);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx > 0 && nx <= n && ny > 0 && ny <= m) {
        dfs([nx, ny], path + pt[i]);
      }
    }
  }

  dfs([x, y]);

  answer.sort();
  return answer[0] ? answer[0] : 'impossible';
}
```

# 풀이

DFS로 풀면 시간 초과 납니다. 사전식 순서, 그리고 가능한 거리여부에 따라 그리디하게 풀어봅시다.

# 결과

정확성: 16.3
합계: 16.3 / 100.0
