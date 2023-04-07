function effect(board, skill) {
  const row = board.length;
  const col = board[0].length;
  const [type, r1, c1, r2, c2, degree] = skill;
  let damage = degree;
  if (type == 1) damage = damage * -1;
  board[r1][c1] += damage;
  if (c2 + 1 < col) board[r1][c2 + 1] -= damage;
  if (r2 + 1 < row) board[r2 + 1][c1] -= damage;
  if (c2 + 1 < col && r2 + 1 < row) board[r2 + 1][c2 + 1] += damage;
}

function solution(board, skill) {
  var answer = 0;
  let aBoard = Array(board.length)
    .fill(0)
    .map((_) => Array(board[0].length).fill(0));

  for (let s of skill) {
    effect(aBoard, s);
  }

  for (let i = 0; i < aBoard.length; i++) {
    for (let j = 1; j < aBoard.length; j++) {
      aBoard[i][j] += aBoard[i][j - 1];
    }
  }
  for (let i = 0; i < aBoard.length; i++) {
    for (let j = 1; j < aBoard.length; j++) {
      aBoard[j][i] += aBoard[j - 1][i];
    }
  }
  for (let i = 0; i < aBoard.length; i++) {
    for (let j = 0; j < aBoard.length; j++) {
      board[i][j] += aBoard[i][j];
    }
  }
  for (let i in board) {
    for (let j in board[i]) {
      if (board[i][j] > 0) answer += 1;
    }
  }
  return answer;
}
