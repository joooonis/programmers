# 문제

[합승 택시 요금](https://school.programmers.co.kr/learn/courses/30/lessons/72413)

# 코드

```javascript
function solution(n, s, a, b, fares) {
  const graph = [];

  // graph 배열 초기화, 인접 행렬로 표현
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    for (let j = 0; j < n; j++) {
      graph[i][j] = i === j ? 0 : Infinity; // 대각선 값은 0으로, 나머지는 Infinity로 초기화
    }
  }

  // graph 배열에 각 노드의 거리를 저장
  fares.forEach(([start, end, cost]) => {
    graph[start - 1][end - 1] = cost;
    graph[end - 1][start - 1] = cost;
  });

  // 플로이드-와샬 알고리즘을 이용해 모든 노드로의 최단 거리를 구함
  const distances = floydWarshall(graph);

  // 정답 초기화
  let answer = distances[s - 1][a - 1] + distances[s - 1][b - 1];

  // 합승을 고려한 최단 거리를 구함
  for (let i = 0; i < n; i++) {
    answer = Math.min(
      answer,
      distances[s - 1][i] + distances[i][a - 1] + distances[i][b - 1]
    );
  }

  return answer;
}

function floydWarshall(graph) {
  // graph: 인접 행렬
  const dist = [];
  const n = graph.length;

  // dist 배열 초기화
  for (let i = 0; i < n; i++) {
    dist[i] = [];
    for (let j = 0; j < n; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // 플로이드-와샬 알고리즘 수행
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
```

# 풀이

그래프 간 이동시 최단 거리를 구하는 알고리즘에는 다익스트라 알고리즘, 플로이드-와샬 알고리즘이 있고 본 문제에서는 후자를 사용합니다,

플로이드-와샬 알고리즘을 사용하기 위해서는 그래프를 인접행렬로 표현해야합니다.(인접리스트x)

우선, 코드의 첫 부분에서는 주어진 노드 개수 n과 출발점 s, 도착점 a, b, 그리고 각 노드들간의 요금 정보 fares가 주어집니다. 이를 이용하여 인접 행렬을 구성하고, 초기화합니다.

인접 행렬에서, 대각선에 해당하는 값은 노드 자기 자신까지의 거리이므로 0으로 초기화합니다. 나머지 요소들은 연결되어 있지 않은 노드간의 거리이므로 Infinity로 초기화합니다.

다음으로, 주어진 fares 정보를 이용하여 인접 행렬에 각 노드간의 거리 정보를 저장합니다.

이어서, floydWarshall 함수를 호출하여 플로이드-와샬 알고리즘을 수행합니다. 이 알고리즘은 각 노드들간의 최단 거리를 구하는 알고리즘이며, 이를 dist 배열에 저장합니다. 이 때, dist 배열의 초기값은 인접 행렬과 같습니다.

마지막으로, 정답을 구합니다. 먼저, 출발점에서 각각 a, b 지점으로 직접 이동하는 경우의 최소 요금을 구하고, 이를 answer 변수에 저장합니다. 이후, 합승을 고려한 최소 요금을 구하기 위해 모든 노드 i에 대해 distances[s - 1][i] + distances[i][a - 1] + distances[i][b - 1]의 값을 구하고, 이를 answer 값과 비교하여 더 작은 값을 answer에 저장합니다.

이렇게 구한 answer 값이 문제에서 원하는 합승 택시의 최소 요금입니다.

# 결과

정확성: 50.0
효율성: 50.0
합계: 100.0 / 100.0
