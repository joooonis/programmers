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
  const hash = {};

  info.forEach((i) => {
    const [language, work, career, fav, score] = i.split(' ');
    const keys = [];
    for (let i = 0; i < 16; i++) {
      keys.push(
        (i & 1 ? language : '-') +
          (i & 2 ? work : '-') +
          (i & 4 ? career : '-') +
          (i & 8 ? fav : '-')
      );
    }
    keys.forEach((k) => {
      if (!hash[k]) hash[k] = [];
      hash[k].push(Number(score));
    });
  });

  for (let q of query) {
    const [l, w, c, fs] = q.split(' and ');
    const [f, s] = fs.split(' ');
    const key = l + w + c + f;
    if (!hash[key]) answer.push(0);
    else {
      const scores = hash[key];
      scores.sort((a, b) => a - b);
      let start = 0;
      let end = scores.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (scores[mid] >= Number(s)) end = mid;
        else start = mid + 1;
      }
      answer.push(scores.length - start);
    }
  }

  return answer;
}

solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',

    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ],
  [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ]
);
