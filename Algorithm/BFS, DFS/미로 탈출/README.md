# 문제

[미로 탈출](https://school.programmers.co.kr/learn/courses/30/lessons/159993#)

# 코드

```javascript
function solution(maps) {
  const [startRow, startCol] = findStart(maps);
  const [leverRow, leverCol] = findLever(maps);

  const countToLever = bfs(maps, [startRow, startCol], 'L');
  const countToExit = bfs(maps, [leverRow, leverCol], 'E');

  if (countToLever === -1 || countToExit === -1) {
    return -1;
  }
  return countToLever + countToExit;
}

function findStart(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === 'S') {
        return [i, j];
      }
    }
  }
}

function findLever(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === 'L') {
        return [i, j];
      }
    }
  }
}

function bfs(matrix, start, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // 방문 여부를 저장하는 2차원 배열
  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  // 상하좌우 이동을 위한 델타 배열
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // 시작 지점 큐에 삽입
  const queue = [start];
  visited[start[0]][start[1]] = true;
  let count = 0;

  while (queue.length > 0) {
    const curLevelSize = queue.length;
    for (let i = 0; i < curLevelSize; i++) {
      const [x, y] = queue.shift();
      if (matrix[x][y] === target) {
        return count;
      }

      // 상하좌우 이동
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        // 인접한 점이 배열 내부에 있는지 확인
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          matrix[nx][ny] !== 'X'
        ) {
          // 아직 방문하지 않은 점이면 큐에 삽입
          if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
    count++; // 큐에 있는 모든 노드를 처리한 후, count 값을 1 증가시킵니다.
  }

  return -1;
}
```

# 풀이

최단거리를 찾아야 하므로 dfs가 아니라 bfs로 그래프를 탐색해야 합니다. bfs는 시작점에서 가까운 노드부터 탐색하며, 이 때 큐를 이용해 탐색 대상 노드를 저장합니다. 따라서, 시작점과 같은 거리에 있는 노드들을 모두 탐색한 후에야, 그 다음으로 멀리 떨어진 노드들을 탐색하게 됩니다.

이 과정에서 bfs는 먼저 발견된 경로로 노드를 방문하기 때문에, 어떤 노드를 처음으로 발견했을 때 그 노드에 도달하기 위한 경로가 최단 경로가 됩니다. 그리고, 한 번 방문한 노드는 다시 방문하지 않으므로 bfs로 탐색할 때는 최단 거리로 방문할 수 있습니다.

단 이때 방문거리를 정확히 재기 위해서는 큐에 있는 모든 노드들을 처리한 후, count값을 1 증가시키도록 해야 합니다. 이렇게 하면, 한 레벨의 든 노드를 처리할 때마다 count 값이 1 증가하게 됩니다.

또한 방문배열인 visted는 두번의 경로탐색(S -> L, L -> E)마다 초기화되어야 하므로 bfs함수안에서 정의합니다.

1. 그래프에서 S, L 위치 찾기
2. S(시작지점) -> L(레버) 경로 탐색
3. L(레버) -> E(출구) 경로 탐색
4. 각각의 경로가 존재할 경우 방문거리 합을 반환합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
