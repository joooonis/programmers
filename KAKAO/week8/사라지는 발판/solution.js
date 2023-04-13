const solution = (board, aloc, bloc) => {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const dfs = (aLoc, bLoc, turn, cnt) => {
    if (
      (turn === 0 && board[aLoc[0]][aLoc[1]] === 0) ||
      (turn === 1 && board[bLoc[0]][bLoc[1]] === 0)
    )
      return { win: false, cnt: cnt };

    let win = Number.MAX_VALUE;
    let lose = 0;

    for (let idx = 0; idx < 4; idx++) {
      const typedLoc = turn === 0 ? aLoc : bLoc;
      const nextLoc = [typedLoc[0] + dx[idx], typedLoc[1] + dy[idx]];
      if (
        nextLoc[0] < 0 ||
        nextLoc[0] >= board.length ||
        nextLoc[1] < 0 ||
        nextLoc[1] >= board[0].length
      )
        continue;

      if (board[nextLoc[0]][nextLoc[1]] === 0) continue;
      board[typedLoc[0]][typedLoc[1]] = 0;
      const check =
        turn === 0
          ? dfs(nextLoc, bLoc, 1 - turn, cnt + 1)
          : dfs(aLoc, nextLoc, 1 - turn, cnt + 1);
      if (check.win === false) win = Math.min(win, check.cnt);
      else lose = Math.max(lose, check.cnt);
      board[typedLoc[0]][typedLoc[1]] = 1;
    }

    if (win === Number.MAX_VALUE && lose === 0) return { win: false, cnt };
    else if (win !== Number.MAX_VALUE) return { win: true, cnt: win };
    else return { win: false, cnt: lose };
  };

  return dfs(aloc, bloc, 0, 0).cnt;
};
