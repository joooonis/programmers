function solution(weights) {
  let answer = 0;
  let hash = {};

  for (let i = 0; i < weights.length; i++) {
    const w = weights[i];
    answer += hash[w] || 0;
    answer += hash[w * 2] || 0;
    answer += hash[w / 2] || 0;
    answer += hash[(w * 2) / 3] || 0;
    answer += hash[(w * 3) / 2] || 0;
    answer += hash[(w * 3) / 4] || 0;
    answer += hash[(w * 4) / 3] || 0;
    hash[w] = (hash[w] || 0) + 1;
  }

  return answer;
}
