function solution(n, computers) {
  const visited = Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) dfs(i);
    }
  }

  let network = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      network++;
    }
  }
  return network;
}
