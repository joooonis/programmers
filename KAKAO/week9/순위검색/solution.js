function solution(info, query) {
  const answer = [];
  query.forEach((q) => answer.push(info.filter((i) => pass(i, q)).length));
  return answer;
}

function pass(info, query) {
  const [language, work, career, fav, score] = info.split(' ');

  const [l, w, c, fs] = query.split(' and ');
  const [f, s] = fs.split(' ');

  return (
    (language === l || l === '-') &&
    (work === w || w === '-') &&
    (career === c || c === '-') &&
    (fav === f || f === '-') &&
    Number(score) >= Number(s)
  );
}

function solution(info, query) {
  const answer = [];
  const map = new Map();
}
