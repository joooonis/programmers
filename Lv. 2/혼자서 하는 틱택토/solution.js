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
