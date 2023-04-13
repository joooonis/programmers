function solution(n, costs) {
  var answer = 0;
  const visited = new Array(n).fill(false);
  const edges = costs.sort((a, b) => a[2] - b[2]);

  const dfs = (node) => {
    visited[node] = true;
    for (let i = 0; i < edges.length; i++) {
      if (!visited[edges[i][1]] && edges[i][0] === node) {
        visited[edges[i][1]] = true;
        answer += edges[i][2];
        dfs(edges[i][1]);
      }
    }
  };

  dfs(0);
  return answer;
}
