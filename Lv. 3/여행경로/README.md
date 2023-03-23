# 문제

[여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)

# 코드

```javascript
function solution(tickets) {
  let answers = [];
  let usedTickets = Array(tickets.length).fill(false);

  const dfs = (current, count, path) => {
    if (count === tickets.length) {
      answers.push(path); // 경로를 복사하여 answer 배열에 할당
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!usedTickets[i] && tickets[i][0] === current) {
        usedTickets[i] = true;
        dfs(tickets[i][1], count + 1, [...path, tickets[i][1]]);
        usedTickets[i] = false;
      }
    }
  };

  tickets.sort();
  dfs('ICN', 0, ['ICN']);
  answers.sort();
  return answers[0];
}
```

# 풀이

DFS로 탐색하며 경로를 탐색합니다. dfs의 경우 재귀로 구현합니다.

DFS함수에 인자로 현재위치, 티켓사용횟수, 경로를 전달합니다. 매번 현재위치에서 사용할 수 있는 티켓이 있는지 확인하고 있는경우 표시하고 현재위치와, 티켓사용횟수, 경로를 갱신하여 재귀적으로 DFS함수를 호출합니다. 이때 인자들은 모두 깊은 복사를 해주어야 합니다. 또한 모든 경로 탐색을 위해 다음 루프로 넘어가기전에 다시 티켓을 사용하지 않은것으로 되돌립니다. 티켓을 전부 사용한 경우 탐색을 종료하고 가능한 경로에 추가합니다. 이후 가능한 경로 중 알파벳순으로 가장 빠른 경로를 답으로 반환합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
