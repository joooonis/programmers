function solution(name, yearning, photo) {
  let missingScoreMap = {};
  for (let i = 0; i < name.length; i++) {
    missingScoreMap[name[i]] = yearning[i];
  }

  let result = [];
  for (let p of photo) {
    let score = 0;
    for (let n of p) {
      score += missingScoreMap[n] ?? 0;
    }
    result.push(score);
  }

  return result;
}
