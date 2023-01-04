function solution(k, tangerine) {
  let answer = 1;
  let gull = {};
  let basket = 0;
  tangerine.forEach((v, _) => {
    if (gull[v] === undefined) {
      gull[v] = 1;
    } else {
      ++gull[v];
    }
  });
  const keys = Object.keys(gull).sort((a, b) => gull[a] - gull[b]);
  let gall = keys.pop();
  basket += 1;
  --gull[gall];
  while (basket < k) {
    if (gull[gall] === 0) {
      gall = keys.pop();
      answer += 1;
    }
    basket += 1;
    --gull[gall];
  }
  return answer;
}
