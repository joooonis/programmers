function solution(n, edge) {
  var distances = [];
  let graph = {};
  for (let [a, b] of edge) {
    graph[a] = graph[a] ? [...graph[a], b] : [b];
    graph[b] = graph[b] ? [...graph[b], a] : [a];
  }

  function bfs(start) {
    const visited = Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let count = 0;
    while (queue.length > 0) {
      const curLevelSize = queue.length;
      count++;
      for (let i = 0; i < curLevelSize; i++) {
        const node = queue.shift();

        for (let neighbor of graph[node]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
            distances.push([neighbor, count]);
          }
        }
      }
    }
  }

  bfs(1);

  distances.sort((a, b) => b[1] - a[1]);
  const MAX_COUNT = distances[0][1];

  return distances.filter((v) => v[1] === MAX_COUNT).length;
}

function solution(n, edge) {
  const graph = {};

  for (let [x, y] of edge) {
    graph[x] = graph[x] ? [...graph[x], y] : [y];
    graph[y] = graph[y] ? [...graph[y], x] : [x];
  }

  const bfs = (start) => {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    let currLevelSize = queue.length;

    while (queue.length > 0) {
      currLevelSize = queue.length;
      for (let i = 0; i < currLevelSize; i++) {
        node = queue.shift();
        for (let neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
    return currLevelSize;
  };

  return bfs(1);
}
