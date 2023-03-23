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
      const curLevelSize = queue.length;
      count++;

      for (let i = 0; i < curLevelSize; i++) {
        const [x, y] = queue.shift();
        if (x === rows - 1 && y === cols - 1) {
          return count;
        }
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
