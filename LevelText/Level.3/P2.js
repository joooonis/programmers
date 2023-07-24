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
