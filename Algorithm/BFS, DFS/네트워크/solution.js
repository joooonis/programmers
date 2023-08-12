function solution(n, computers) {
  const visited = new Set();
  let clusters = 0;
  function dfs(node) {
    visited.add(node);
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (computers[node][neighbor] === 1 && !visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      dfs(node);
      clusters++;
    }
  }
  return clusters;
}

// calculate the size of each cluster
function solution(n, computers) {
  const visited = new Set();
  const clusters = [];
  function dfs(node) {
    visited.add(node);
    clusters[clusters.length - 1]++;
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (computers[node][neighbor] === 1 && !visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      clusters.push(0);
      dfs(node);
    }
  }
  return clusters;
}
