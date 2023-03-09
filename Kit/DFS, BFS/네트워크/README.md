# 문제

[네트워크](hhttps://school.programmers.co.kr/learn/courses/30/lessons/43162)

# 코드

```javascript
function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let clusters = 0;
  function dfs(node) {
    visited[node] = true;
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (computers[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      dfs(node);
      clusters++;
    }
  }
  return clusters;
}
```

# 풀이

그래프에서 클러스터(cluster)란, 서로 관련된 노드(node)들의 집합을 말합니다. 즉, 같은 클러스터에 속한 노드들은 서로 연결되어 있습니다.

[[1, 1, 0], [1, 1, 0], [0, 0, 1]]

위는 인접 행렬(adjacency matrix)로 이루어진 그래프입니다. DFS(Depth-First Search) 알고리즘을 이용하여 모든 노드를 탐색하고, 방문한 노드들로부터 이루어진 클러스터의 개수를 반환합니다.

+visited배열을 Set으로 구현한 경우

```javascript
function countClusters(graph) {
  const n = graph.length;
  const visited = new Set();
  let clusters = 0;

  function dfs(node) {
    visited.add(node);
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (graph[node][neighbor] === 1 && !visited.has(neighbor)) {
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
```

# 결과

정확성: 100.0
합계: 100.0 / 100.0
