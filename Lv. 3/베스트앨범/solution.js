function solution(genres, plays) {
  let hash = {};
  let playsSum = {};
  let answer = [];

  for (let i = 0; i < genres.length; i++) {
    hash[genres[i]] = hash[genres[i]]
      ? [...hash[genres[i]], [plays[i], i]]
      : [[plays[i], i]];
    playsSum[genres[i]] = (playsSum[genres[i]] || 0) + plays[i];
  }

  const orders = Object.entries(playsSum).sort((a, b) => b[1] - a[1]);

  for (let [genre, _] of orders) {
    hash[genre].sort((a, b) => b[0] - a[0]);
    if (hash[genre].length === 1) {
      answer.push(hash[genre][0][1]);
    } else {
      answer.push(hash[genre][0][1]);
      answer.push(hash[genre][1][1]);
    }
  }
  return answer;
}
