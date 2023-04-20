function solution(men, women) {
  hashMen = {};
  hashWomen = {};

  for (let i = 0; i < women.length; i++) {
    const [pw, tw] = women[i];
    for (let j = 0; j < men.length; j++) {
      const [pm, tm] = men[j];
      if (tw === 1) {
        // 타입이 친근함인경우
        hashWomen[i + 1] = hashWomen[i + 1]
          ? [...hashWomen[i + 1], [j + 1, 1000 - Math.abs(pw - pm)]]
          : [[j + 1, 1000 - Math.abs(pw - pm)]];
      } else {
        hashWomen[i + 1] = hashWomen[i + 1]
          ? [...hashWomen[i + 1], [j + 1, Math.abs(pw - pm)]]
          : [[j + 1, Math.abs(pw - pm)]];
      }
    }
  }

  for (let i = 0; i < men.length; i++) {
    const [pw, tw] = men[i];
    for (let j = 0; j < women.length; j++) {
      const [pm, tm] = women[j];
      if (tw === 1) {
        // 타입이 친근함인경우
        hashMen[i + 1] = hashMen[i + 1]
          ? [...hashMen[i + 1], [j + 1, 1000 - Math.abs(pw - pm)]]
          : [[j + 1, 1000 - Math.abs(pw - pm)]];
      } else {
        hashMen[i + 1] = hashMen[i + 1]
          ? [...hashMen[i + 1], [j + 1, Math.abs(pw - pm)]]
          : [[j + 1, Math.abs(pw - pm)]];
      }
    }
  }

  for (let i = 1; i < women.length + 1; i++) {
    hashWomen[i].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  }
  for (let i = 1; i < men.length + 1; i++) {
    hashMen[i].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  }

  let answer = 0;
  let before = 0;
  while (true) {
    for (let i = 1; i < men.length + 1; i++) {
      if (!hashMen[i] || !hashWomen[hashMen[i][0][0]]) continue;
      if (hashWomen[hashMen[i][0][0]][0][0] === i) {
        answer++;
        let [m, w] = [i, hashMen[i][0][0]];
        hashMen[m] = null;
        hashWomen[w] = null;
        for (let i = 1; i < men.length + 1; i++) {
          if (!hashMen[i]) continue;
          hashMen[i] = hashMen[i].filter(([v, _]) => v !== w);
        }
        for (let i = 1; i < women.length + 1; i++) {
          if (!hashWomen[i]) continue;
          hashWomen[i] = hashWomen[i].filter(([v, _]) => v !== m);
        }
      }
    }
    if (answer === before) break;
    else before = answer;
  }

  return answer;
}
