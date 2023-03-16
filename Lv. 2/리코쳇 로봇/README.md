# 문제

[리코쳇 로봇](https://school.programmers.co.kr/learn/courses/30/lessons/169199)

# 코드

```javascript
function solution(board) {
  const start = findStart(board);
  const count = bfs(board, start);
  return count ? count : -1;
}

function findStart(board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'R') {
        return [i, j];
      }
    }
  }
}

function isValid(board, x, y) {
  const rows = board.length;
  const cols = board[0].length;
  return x >= 0 && x < rows && y >= 0 && y < cols;
}

function bfs(matrix, start) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [start];
  visited[start[0]][start[1]] = true;
  let count = 0;

  while (queue.length > 0) {
    const curLevelSize = queue.length; // 현재 큐의 크기를 저장합니다.

    // 큐의 노드를 전부 꺼내고 현재 레벨을 종료합니다,
    for (let i = 0; i < curLevelSize; i++) {
      const [x, y] = queue.shift();
      // 목적지에 도착하면 현재까지의 레벨을 반환합니다.
      if (matrix[x][y] === 'G') {
        return count;
      }

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (isValid(matrix, nx, ny)) {
          while (isValid(matrix, nx, ny)) {
            if (matrix[nx][ny] === 'D') {
              break;
            }
            nx += dx[j];
            ny += dy[j];
          }
          nx -= dx[j];
          ny -= dy[j];

          if (!visited[nx][ny]) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }

    count++; // 현재 레벨을 종료하고 다음 레벨로 넘어갑니다.
  }
  return -1;
}
```

# 풀이

최단경로를 찾는 문제입니다. bfs를 사용하여 풀 수 있습니다.

큐에 담겨있는 노드의 개수를 미리 저장하고 그만큼 큐에서 꺼내면 다음 카운트로 넘어갑니다.

한칸씩 이동이 아니라 벽을 만나기 전까지 이동하므로 내부에서 while문을 추가합니다.

현재 레벨이(위에서 큐에 담겨있던 노드를 전부 꺼내면) 종료되면 count를 1씩 증가시킵니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
