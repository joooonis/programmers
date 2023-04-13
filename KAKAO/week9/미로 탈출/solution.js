// 함정을 밟은 수에 따라 그곳에 연결된 간선의 방향이 바뀌고,
// 2번 밟으면 함정의 상태가 초기화 되므로 밟은 횟수는 0과 1만으로 구분 가능
// -> 어느 곳의 함정을 몇 번(0 or 1) 밟았는지 나타내는 문자열 state를 정의

// mincost : start부터 end까지 가는데 걸린 비용
// -> mincost 를 매우 큰 수로 초기화

// 각 노드에 어떤 state의 어떤 비용으로 있었는지 저장하는, dict()를 요소로 가지는 배열 costs 정의

// 큐에 들어가는 정보는 [현재노드,state,cost]

// state 정보를 읽고 간선의 방향 계산 (간선의 양쪽에 있는 함정을 몇 번 밟았는지에 따라 방향 결정)
// if 간선의 방향이 갈 수 있는 방향일 경우,
// __ if costs[탐색할 노드]에 state가 없거나(탐색을 하지 않음), cost+간선비용이 costs[탐색할 노드][state]보다 작다면(탐색했었으나 더 비용이 낮은 경로),
// ____ if cost+간선비용이 mincost보다 작다면(탐색할만한 가치가 있는 경로),
// ______ costs[탐색할 노드][state]에 cost+간선비용 삽입
// ______ if 탐색하려는 노드가 end라면 mincost에 cost+간선비용 삽입
// ______ else 아니라면 큐에 [탐색할 노드, new_state, cost+간선비용] 삽입
function solution(n, start, end, roads, traps) {
  let mincost = Number.MAX_VALUE;
  const costs = Array.from({ length: n + 1 }, () => ({}));

  const queue = [[start, '', 0]];
  while (queue.length) {
    const [node, state, cost] = queue.shift();

    for (const [from, to, weight] of roads) {
      if (from !== node) continue;

      const new_state = state.split('').map((v, i) => {
        if (traps[i] === from) return 1 - Number(v);
        else if (traps[i] === to) return 1 - Number(v);
        else return Number(v);
      });
      const new_state_str = new_state.join('');

      if (
        costs[to][new_state_str] === undefined ||
        costs[to][new_state_str] > cost + weight
      ) {
        if (cost + weight < mincost) {
          costs[to][new_state_str] = cost + weight;
          if (to === end) mincost = cost + weight;
          else queue.push([to, new_state_str, cost + weight]);
        }
      }
    }
  }
  return mincost;
}

solution(
  3,
  1,
  3,
  [
    [1, 2, 2],
    [3, 2, 3],
  ],
  [2]
);
