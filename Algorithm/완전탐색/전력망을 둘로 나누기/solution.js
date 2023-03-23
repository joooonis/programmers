function solution(n, wires) {
  let answer = n;
  const graph = Array.from(Array(n + 1), () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i < wires.length; i++) {
    const [a, b] = wires[i];
    graph[a] = graph[a].filter((v) => v !== b);
    graph[b] = graph[b].filter((v) => v !== a);
    const visited = Array(n + 1).fill(false);
    const count = dfs(1, graph, visited);
    answer = Math.min(answer, Math.abs(n - count - count));
    graph[a].push(b);
    graph[b].push(a);
  }
  return answer;
}

function dfs(start, graph, visited) {
  visited[start] = true;
  let count = 1;
  for (const next of graph[start]) {
    if (!visited[next]) {
      count += dfs(next, graph, visited);
    }
  }
  return count;
}
