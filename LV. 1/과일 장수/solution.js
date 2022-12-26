function solution(k, m, score) {
  let [answer, counter] = [0, 0];
  score.sort((a, b) => a - b);
  while (score.length > 0) {
    p = score.pop();
    counter++;
    if (counter === m) {
      answer += p * m;
      counter = 0;
    }
  }
  return answer;
}
