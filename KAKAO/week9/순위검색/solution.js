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
  info.forEach((i) => {
    const [language, work, career, fav, score] = i.split(' ');
    const key = language + ' ' + work + ' ' + career + ' ' + fav;
    if (map.has(key)) {
      map.get(key).push(Number(score));
    } else {
      map.set(key, [Number(score)]);
    }
  });

  query.forEach((q) => {
    const [l, w, c, fs] = q.split(' and ');
    const [f, s] = fs.split(' ');
    const queryKey = [l, w, c, f];
    const allKeys = map.keys();
    const validKey = [];

    for (const k of allKeys) {
      const memberKey = k.split(' ');
      if (memberKey.every((v, i) => queryKey[i] === v || queryKey[i] === '-')) {
        validKey.push(k);
      }
    }

    let scores = [];
    validKey.forEach((k) => (scores = scores.concat(map.get(k))));
    scores.sort((a, b) => a - b);

    let start = 0;
    let end = scores.length - 1;
    let mid = 0;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (scores[mid] >= Number(s)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    answer.push(scores.length - start);
  });

  return answer;
}
