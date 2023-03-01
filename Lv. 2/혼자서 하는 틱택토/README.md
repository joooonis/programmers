# 문제

[혼자서 하는 틱택토](https://school.programmers.co.kr/learn/courses/30/lessons/160585)

# 코드

```javascript
function solution(board) {
  winner = null;
  countO = 0;
  countX = 0;
  for (let row of board) {
    for (let cell of row) {
      if (cell === 'O') countO++;
      if (cell === 'X') countX++;
    }
  }

  if (
    board.includes('OOO') ||
    board.map((row) => row[0]).join('') === 'OOO' ||
    board.map((row) => row[1]).join('') === 'OOO' ||
    board.map((row) => row[2]).join('') === 'OOO' ||
    (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
    (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')
  ) {
    winner = 'O';
  }

  if (
    board.includes('XXX') ||
    board.map((row) => row[0]).join('') === 'XXX' ||
    board.map((row) => row[1]).join('') === 'XXX' ||
    board.map((row) => row[2]).join('') === 'XXX' ||
    (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
    (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')
  ) {
    if (winner === 'O') return 0;
    winner = 'X';
  }

  if (winner === 'O') {
    return countO - countX === 1 ? 1 : 0;
  }
  if (winner === 'X') {
    return countO === countX ? 1 : 0;
  }
  return countO === countX || countO - countX === 1 ? 1 : 0;
}
```

# 풀이

게임이 올바르게 진행된 것인지 파악하기 위해 필요한 값들은 다음과 같습니다.

- 승자가 정해졌는지 여부
- O의 개수, X의 경우

(1) 승자가 정해진 경우

만약 승자가 두명이라면 이는 잘못된 경우입니다.
승자가 한명으로 정해진 경우, O가 승자인경우 X가 승자인경우로 나누어서 O의 개수와 X의 개수를 비교하여 게임이 올바르게 진행되었는지 판단할 수 있습니다.

(2) 승자가 정해지지 않은 경우

O의 개수와 X의 개수는 같거나 O의 개수가 선공이므로 한 개 더 많아야 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
