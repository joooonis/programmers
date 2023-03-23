# 문제

[전력망을 둘로 나누기](https://school.programmers.co.kr/learn/courses/30/lessons/86971)

# 코드

```javascript
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
```

# 풀이

먼저 edge(wires)들을 가지고 graph를 만들어줍니다. 아래와 같이 만들어집니다.

```javascript
const graph = [
  [],
  [3],
  [3],
  [1, 2, 4],
  [3, 5, 6, 7],
  [4],
  [4],
  [4, 8, 9],
  [7],
  [7],
];
```

이후 wires를 한개씩 없애면서 모든 경우를 탐색합니다. 방문정보를 저장하는 visited 배열을 매번 초기화 해주어야 하며, 재귀로 구현한 dfs 함수를 가지고 노드들을 방문하며 이어진 노드의 개수를 확인합니다. 이후 끊어진 두 그래프의 노드 개수 차이가 최소일 때를 찾아줍니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
