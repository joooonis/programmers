function dfs(x, y, maps, visited) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  visited[x][y] = true;
  let days = +maps[x][y];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) {
      continue;
    }
    if (maps[nx][ny] === 'X' || visited[nx][ny]) {
      continue;
    }
    days += dfs(nx, ny, maps, visited);
  }
  return days;
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        const days = dfs(i, j, maps, visited);
        result.push(days);
      }
    }
  }
  if (result.length === 0) {
    return [-1];
  } else {
    return result.sort((a, b) => a - b);
  }
}
