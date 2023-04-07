# 문제

[양궁 대회](https://school.programmers.co.kr/learn/courses/30/lessons/92342)

# 코드

```javascript
function solution(n, info) {
  // 0라운드부터 10라운드까지
  function dfs(arrow, lion, round) {
    if (round > 10) {
      const scoreDiff = getScoreDiff(lion, info);
      if (scoreDiff > maxDiff) {
        maxDiff = scoreDiff;
        answer = [lion];
      } else if (scoreDiff === maxDiff) {
        answer.push(lion);
      }
      return;
    }

    // 마지막 라운드
    if (round === 10 && arrow > 0) {
      const lionCopy = [...lion];
      lionCopy[round] = arrow;
      dfs(0, lionCopy, round + 1);
    }

    if (arrow > info[round]) {
      // 라이언이 이기는 경우
      const lionCopy = [...lion];
      lionCopy[round] = info[round] + 1;
      dfs(arrow - info[round] - 1, lionCopy, round + 1);
    }
    // 라이언이 지는 경우
    dfs(arrow, lion, round + 1);
  }

  let maxDiff = 0;
  let answer = [];

  dfs(n, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);

  if (answer.length === 0 || maxDiff === 0) return [-1];
  answer.sort((a, b) => {
    for (let i = 10; i > -1; i--) {
      if (a[i] !== b[i]) return b[i] - a[i];
    }
  });

  return answer[0];
}

function getScoreDiff(lion, apeach) {
  let lionScore = 0;
  let apeachScore = 0;
  for (let i = 0; i < 10; i++) {
    if (lion[i] > apeach[i]) {
      lionScore += 10 - i;
    } else if (lion[i] < apeach[i]) {
      apeachScore += 10 - i;
    }
  }
  return lionScore - apeachScore;
}
```

# 풀이

dfs를 사용하여 완전탐색으로 풉니다. 마지막 라운드에서 화살이 남은 경우 전부 쏴줍니다. 각 라운드마다 라이온이 이기는 경우 지는 경우 2개의 분기가 일어납니다.
23번 케이스의 경우 라이온과 어피치가 비기는 경우이므로 예외처리를 해주어야 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
