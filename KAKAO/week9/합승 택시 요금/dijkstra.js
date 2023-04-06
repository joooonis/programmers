function solution(n, s, a, b, fares) {
  const graph = {};
  fares.forEach(([start, end, cost]) => {
    if (!graph[start]) graph[start] = {};
    if (!graph[end]) graph[end] = {};
    graph[start][end] = cost;
    graph[end][start] = cost;
  });

  // 다익스트라 알고리즘을 이용해 모든 노드로의 최단 거리를 구함
  const distances = {};
  for (let i = 1; i <= n; i++) {
    distances[i] = dijkstra(graph, i);
  }

  // 불가능한 경우를 Infinity로 처리
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (distances[i][j] === undefined) distances[i][j] = Infinity;
    }
  }

  // 정답 초기화
  let answer = distances[s][a] + distances[s][b];

  // 합승을 고려한 최단 거리를 구함
  for (let i = 1; i <= n; i++) {
    answer = Math.min(
      answer,
      distances[s][i] + distances[i][a] + distances[i][b]
    );
  }

  return answer;
}

function dijkstra(graph, start) {
  // graph: 인접 리스트
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  const queue = [start];
  while (queue.length) {
    const current = queue.shift();
    for (const neighbor in graph[current]) {
      const newDistance = distances[current] + graph[current][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.push(neighbor);
      }
    }
  }

  return distances;
}
