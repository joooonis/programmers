# DFS (Depth-First Search)

현재 정점에서 한 방향으로 최대한 깊게 탐색해나가면서 해를 찾는 알고리즘입니다. 즉, 가능한 한 깊은 곳까지 탐색한 후, 더 이상 진행할 수 없게 되면 마지막으로 갈림길을 되돌아가서 다른 방향의 정점으로 탐색을 계속하는 방식입니다. 스택(Stack) 자료구조나 재귀 함수를 이용하여 구현할 수 있습니다. 그래프의 크기가 작고, 해가 깊은 단계에 있을 때 유리합니다.

# BFS (Breadth-First Search)

시작 정점으로부터 거리에 따라 차례대로 탐색하는 알고리즘입니다. 즉, 시작 정점의 인접한 정점들을 먼저 모두 방문한 후, 방문한 정점들과 인접한 정점들을 모두 차례로 방문하는 방식입니다. 큐(Queue) 자료구조를 이용하여 구현할 수 있습니다. 그래프의 크기가 크고, 해가 얕은 단계에 있을 때 유리합니다.

# 그래프 탐색

```javascript
function dfs(graph, start) {
  let visited = [];
  let stack = [];

  stack.push(start);
  while (stack.length !== 0) {
    let v = stack.pop();
    if (!visited.includes(v)) {
      visited.push(v);
      for (let i = graph[v].length - 1; i >= 0; i--) {
        stack.push(graph[v][i]);
      }
    }
  }
  return visited;
}

// 예시
const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [],
  4: [6],
  5: [7, 8],
  6: [],
  7: [],
  8: [],
};

console.log(dfs(graph, 1)); // [1, 4, 6, 2, 5, 8, 7, 3]
```

```javascript
function bfs(graph, start) {
  let visited = [];
  let queue = [];

  queue.push(start);
  while (queue.length !== 0) {
    let v = queue.shift();
    if (!visited.includes(v)) {
      visited.push(v);
      for (let i = 0; i < graph[v].length; i++) {
        queue.push(graph[v][i]);
      }
    }
  }
  return visited;
}

// 예시
const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [],
  4: [6],
  5: [7, 8],
  6: [],
  7: [],
  8: [],
};

console.log(bfs(graph, 1)); // [1, 2, 3, 4, 5, 6, 7, 8]
```

위의 코드에서 graph는 인접 리스트로 표현된 그래프입니다. 각 정점마다 연결된 정점들을 배열로 가지고 있습니다. start는 탐색을 시작할 정점을 나타냅니다. dfs()와 bfs() 함수는 각각 DFS와 BFS 알고리즘을 구현한 함수입니다. visited는 방문한 정점을 저장하는 배열, stack은 DFS에서 사용되는 스택 자료구조, queue는 BFS에서 사용되는 큐 자료구조입니다. 각 함수에서는 시작 정점을 스택 또는 큐에 넣어두고, 반복문을 이용하여 스택 또는 큐에서 정점을 하나씩 꺼내면서 해당 정점의 인접한 정점을 방문하는 과정을 반복합니다. 방문한 정점은 visited 배열에 추가하고, 방문하지 않은 인접한 정점은 스택 또는 큐에 추가합니다. 마지막으로 visited 배열을 반환하여 탐색한 경로를 확인할 수 있습니다.

# 2차원 배열 탐색

```javascript
function dfs2d(grid, visited, row, col) {
  const ROW = grid.length;
  const COL = grid[0].length;
  // 현재 위치를 방문한 것으로 표시
  visited[row][col] = true;
  // 현재 위치에서 상하좌우 방향을 확인하면서 방문하지 않은 원소를 재귀 호출로 방문
  const dr = [-1, 0, 1, 0]; // row 방향 이동을 위한 배열
  const dc = [0, 1, 0, -1]; // col 방향 이동을 위한 배열
  for (let d = 0; d < 4; d++) {
    const nextRow = row + dr[d];
    const nextCol = col + dc[d];
    // 범위를 벗어나거나 방문한 원소는 건너뜀
    if (
      nextRow < 0 ||
      nextRow >= ROW ||
      nextCol < 0 ||
      nextCol >= COL ||
      visited[nextRow][nextCol]
    )
      continue;
    // 재귀 호출로 다음 위치 방문
    dfs2d(grid, visited, nextRow, nextCol);
  }
}
```

위 코드에서 grid는 2차원 배열, visited는 방문 여부를 저장하는 2차원 배열, row와 col은 현재 위치의 행과 열을 나타냅니다. dfs2d 함수는 현재 위치를 방문한 뒤, 상하좌우의 인접한 원소를 확인하면서 재귀 호출로 방문합니다.

```javascript
function bfs2d(grid, visited, row, col) {
  const ROW = grid.length;
  const COL = grid[0].length;
  const queue = [[row, col]]; // BFS를 위한 큐
  visited[row][col] = true; // 시작 위치를 방문한 것으로 표시
  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    // 현재 위치에서 상하좌우 방향을 확인하면서 방문하지 않은 원소를 큐에 추가
    const dr = [-1, 0, 1, 0]; // row 방향 이동을 위한 배열
    const dc = [0, 1, 0, -1]; // col 방향 이동을 위한 배열
    for (let d = 0; d < 4; d++) {
      const nextRow = r + dr[d];
      const nextCol = c + dc[d];
```
