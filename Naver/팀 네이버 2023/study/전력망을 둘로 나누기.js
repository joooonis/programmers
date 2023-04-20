function solution(n, wires) {
  const graph = Array(n + 1)
    .fill()
    .map(() => []);

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  let answer = Infinity;
  for (const [v1, v2] of wires) {
    graph[v1] = graph[v1].filter((v) => v !== v2);
    graph[v2] = graph[v2].filter((v) => v !== v1);
    let visited = Array(n + 1).fill(false);
    let count = dfs(1, graph, visited);
    answer = Math.min(answer, Math.abs(n - count - count));
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  return answer;
}

function dfs(start, graph, visited) {
  visited[start] = true;
  let count = 1;
  for (let next of graph[start]) {
    if (!visited[next]) {
      count += dfs(next, graph, visited);
    }
  }
  return count;
}
