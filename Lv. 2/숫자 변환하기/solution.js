// queue를 사용한 bfs 풀이
function solution(x, y, n) {
  if (x === y) {
    return 0;
  }
  const visited = Array.from({ length: 2 * y + 1 }, () => false);
  const queue = [[x, 0]];
  visited[x] = true;
  while (queue.length > 0) {
    const [curr, count] = queue.shift();
    if (curr === y) {
      return count;
    }
    if (curr + n <= 2 * y && !visited[curr + n]) {
      queue.push([curr + n, count + 1]);
      visited[curr + n] = true;
    }
    if (curr * 2 <= 2 * y && !visited[curr * 2]) {
      queue.push([curr * 2, count + 1]);
      visited[curr * 2] = true;
    }
    if (curr * 3 <= 2 * y && !visited[curr * 3]) {
      queue.push([curr * 3, count + 1]);
      visited[curr * 3] = true;
    }
  }
  return -1;
}

// dynamic programming 풀이
function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) continue;
    if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}
