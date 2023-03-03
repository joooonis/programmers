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
