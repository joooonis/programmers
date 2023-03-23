# 문제

[게임 맵 최단거리](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

# 코드

```javascript
function solution(maps) {
  function bfs(maps, start) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [start];
    visited[start[0]][start[1]] = true;
    let count = 0;

    while (queue.length > 0) {
      // 다음 레벨로 넘어가기 까지 큐에서 꺼내야 되는 노드의 개수를 확인하고 카운트 + 1
      const curLevelSize = queue.length;
      count++;

      for (let i = 0; i < curLevelSize; i++) {
        const [x, y] = queue.shift();

        // target을 만났으므로 탐색 종료
        if (x === rows - 1 && y === cols - 1) {
          return count;
        }

        // 현재 위치에서 상하좌우로 이동
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
            if (!visited[nx][ny] && maps[nx][ny] === 1) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  const answer = bfs(maps, [0, 0]);

  return answer ? answer : -1;
}
```

# 풀이

최단경로에 관한 문제이므로 BFS로 탐색하며 경로를 탐색합니다. 미로탈출 문제와 거의 유사합니다. BFS 경우 큐를 사용하여 구현합니다.

# 결과

정확성: 69.9
효율성: 30.1
합계: 100.0 / 100.0
