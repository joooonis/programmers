function solution(k, score) {
  const hall = [];
  const answer = [];
  score.map((v, i) => {
    if (i <= k - 1) {
      hall.push(v);
      answer.push(Math.min(...hall));
    } else {
      hall.push(v);
      hall.sort((a, b) => b - a);
      hall.pop();
      answer.push(hall[k - 1]);
    }
  });
}
