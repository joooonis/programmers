// 해시
function solution(genres, plays) {
  genreHash = {};
  playHash = {};
  genres.forEach((genre, idx) => {
    if (!genreHash[genre]) genreHash[genre] = [idx];
    else genreHash[genre].push(idx);

    playHash[genre] = playHash[genre] + plays[idx] || plays[idx];
  });
  let answer = [];

  keys = Object.keys(genreHash);
  keys.sort((a, b) => playHash[b] - playHash[a]);

  for (let key of keys) {
    genreHash[key].sort((a, b) => plays[b] - plays[a] || a - b);
    answer = answer.concat(genreHash[key].slice(0, 2));
  }

  return answer;
}
