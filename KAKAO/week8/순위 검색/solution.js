function solution(info, query) {
  const answer = [];
  const infoMap = new Map();
  const queryMap = new Map();

  const infoArr = info.map((e) => e.split(' '));
  const queryArr = query.map((e) => e.split(' '));

  infoArr.forEach((e) => {
    const key = e.slice(0, -1).join(' ');
    const value = e[4];

    if (infoMap.has(key)) {
      infoMap.set(key, [...infoMap.get(key), value]);
    } else {
      infoMap.set(key, [value]);
    }
  });

  infoMap.forEach((value, key) => {
    infoMap.set(
      key,
      value.sort((a, b) => a - b)
    );
  });

  queryArr.forEach((e) => {
    const key = e
      .filter((e) => e !== 'and')
      .slice(0, -1)
      .join(' ');
    const value = e[7];

    if (queryMap.has(key)) {
      queryMap.set(key, [...queryMap.get(key), value]);
    } else {
      queryMap.set(key, [value]);
    }
  });

  queryMap.forEach((value, key) => {
    queryMap.set(
      key,
      value.sort((a, b) => a - b)
    );
  });

  queryMap.forEach((value, key) => {
    const keys = possibeKeys(key);

    let scores = [];
    for (const k of keys) {
      if (infoMap.has(k)) scores = scores.concat(infoMap.get(k));
    }
    scores.sort((a, b) => a - b);

    answer.push(scores.filter((e) => Number(e) >= Number(value[0])).length);
  });

  return answer;
}

const possibeKeys = (key) => {
  const keys = [];
  const keyArr = key.split(' ');
  const dfs = (depth, str) => {
    if (depth === 0) {
      if (keyArr[0] !== '-') dfs(depth + 1, [keyArr[0]]);
      else {
        dfs(depth + 1, ['java']);
        dfs(depth + 1, ['python']);
        dfs(depth + 1, ['cpp']);
      }
    }
    if (depth === 1) {
      if (keyArr[1] !== '-') dfs(depth + 1, [...str, keyArr[1]]);
      else {
        dfs(depth + 1, [...str, 'backend']);
        dfs(depth + 1, [...str, 'frontend']);
      }
    }
    if (depth === 2) {
      if (keyArr[2] !== '-') dfs(depth + 1, [...str, keyArr[2]]);
      else {
        dfs(depth + 1, [...str, 'junior']);
        dfs(depth + 1, [...str, 'senior']);
      }
    }
    if (depth === 3) {
      if (keyArr[3] !== '-') dfs(depth + 1, [...str, keyArr[3]]);
      else {
        dfs(depth + 1, [...str, 'pizza']);
        dfs(depth + 1, [...str, 'chicken']);
      }
    }
    if (depth === 4) {
      keys.push(str.join(' '));
    }
  };

  dfs(0, []);

  return keys;
};
