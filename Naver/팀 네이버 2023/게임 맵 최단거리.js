function solution(maps) {
  function bfs([x, y]) {
    row = maps.length;
    col = maps[0].length;
    visited = Array(row)
      .fill()
      .map(() => Array(col).fill(false));
    dx = [1, -1, 0, 0];
    dy = [0, 0, 1, -1];

    queue = [[x, y]];
    visited[x][y] = true;
    distance = 0;

    while (queue.length > 0) {
      currLevelSize = queue.length;
      distance++;
      for (let k = 0; k < currLevelSize; k++) {
        const [x, y] = queue.shift();
        if (x === row - 1 && y === col - 1) return distance;
        for (let i = 0; i < 4; i++) {
          nx = x + dx[i];
          ny = y + dy[i];
          if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
            if (maps[nx][ny] === 1 && !visited[nx][ny]) {
              queue.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }
      }
    }
    return -1;
  }

  answer = bfs([0, 0]);
  return answer ? answer : -1;
}
