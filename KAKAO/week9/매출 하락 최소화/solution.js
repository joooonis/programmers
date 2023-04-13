function solution(sales, links) {
  let teams = new Map();
  for (let link of links) {
    if (teams.has(link[0])) {
      teams.set(link[0], [...teams.get(link[0]), link[1]]);
    } else {
      teams.set(link[0], [link[1]]);
    }
  }

  const dp = Array.from({ length: sales.length + 1 }, () => [0, 0]);

  const dfs = (node) => {
    if (teams.has(node)) {
      let isTeamAttended = false;
      for (let child of teams.get(node)) {
        dfs(child);
        dp[node][1] += Math.min(dp[child][0], dp[child][1]);
        if (dp[child][0] > dp[child][1]) {
          isTeamAttended = true;
        }
      }

      if (isTeamAttended) {
        for (let child of teams.get(node)) {
          dp[node][0] += Math.min(dp[child][0], dp[child][1]);
        }
      } else {
        let min = Infinity;
        for (let child of teams.get(node)) {
          min = Math.min(min, dp[child][1] - dp[child][0]);
          dp[node][0] += Math.min(dp[child][0], dp[child][1]);
        }
        dp[node][0] += min;
      }
    } else {
      dp[node][0] = 0;
      dp[node][1] = sales[node - 1];
      return;
    }

    dp[node][1] += sales[node - 1];
  };

  dfs(1);
  return Math.min(dp[1][0], dp[1][1]);
}

console.log(
  solution(
    [14, 17, 15, 18, 19, 14, 13, 16, 28, 17],
    [
      [10, 8],
      [1, 9],
      [9, 7],
      [5, 4],
      [1, 5],
      [5, 10],

      [10, 6],
      [1, 3],
      [10, 2],
    ]
  )
);
