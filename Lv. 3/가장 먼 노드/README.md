# 문제

[가장 먼 노드](https://school.programmers.co.kr/learn/courses/30/lessons/49189)

# 코드

```javascript
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
    let distance = 0;
    while (queue.length > 0) {
      const curLevelSize = queue.length;
      distance++;
      for (let i = 0; i < curLevelSize; i++) {
        const node = queue.shift();

        for (let neighbor of graph[node]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
            distances.push([neighbor, distance]);
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
```

# 풀이

우선 edge들을 가지고 그래프를 만들어 줍니다.

이후에는 BFS를 통해 그래프를 탐색합니다. queue를 이용해 구현하고 queue에 담을 때 distance배열에 [노드, 거리]와 같이 담습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
