function solution(weights) {
  let answer = 0;
  let hash = {};

  weights.forEach((weight, index) => {
    set = new Set();
    [2, 3, 4].forEach((num) => {
      set.add(weight * num);
    });
    hash[index] = set;
  });

  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      let set1 = hash[keys[i]];
      let set2 = hash[keys[j]];
      let intersection = new Set([...set1].filter((x) => set2.has(x)));
      if (intersection.size > 0) {
        answer += 1;
      }
    }
  }
  return answer;
}
