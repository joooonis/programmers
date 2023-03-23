function solution(begin, target, words) {
  let answer = Infinity;

  const visited = Array(words.length).fill(false);

  function dfs(current, count) {
    if (current === target) {
      answer = Math.min(count, answer);
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (isConnect(current, words[i]) && !visited[i]) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  }

  if (!words.includes(target)) return 0;

  dfs(begin, 0);

  return answer !== Infinity ? answer : 0;
}

const isConnect = (a, b) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count === 1;
};
