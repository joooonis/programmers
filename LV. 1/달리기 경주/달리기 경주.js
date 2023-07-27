function solution(players, callings) {
  const playerRankMap = {}; // 각 선수의 등수를 기록할 해시맵

  // players 배열의 순서대로 등수를 해시맵에 저장
  for (let i = 0; i < players.length; i++) {
      playerRankMap[players[i]] = i + 1;
  }

  // 해설진이 부른 선수들을 순서대로 확인하면서, 추월한 선수의 등수를 업데이트
  for (let i = 0; i < callings.length; i++) {
      const callingPlayer = callings[i];
      const callingPlayerRank = playerRankMap[callingPlayer];

      // 1등은 더 이상 추월할 선수가 없으므로 그대로 둠
      if (callingPlayerRank === 1) continue;

      // 추월한 선수와 기존 등수를 swap
      const prevRank = callingPlayerRank - 1;
      const prevPlayer = players[prevRank - 1];
      [players[prevRank - 1], players[callingPlayerRank - 1]] = [callingPlayer, prevPlayer];

      // 해시맵도 업데이트
      playerRankMap[callingPlayer] = prevRank;
      playerRankMap[prevPlayer] = callingPlayerRank;
  }

  return players;
}
