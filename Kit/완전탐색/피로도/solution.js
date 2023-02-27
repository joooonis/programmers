function solution(k, dungeons) {
  let answer = -1;
  const allCase = permutation(dungeons, dungeons.length);
  const result = allCase.map((selectedDungeons) => {
    let hp = k;
    let clear = 0;
    for (const [dungeonHp, dungeonExp] of selectedDungeons) {
      if (hp < dungeonHp) {
        return clear;
      }
      hp -= dungeonExp;
      clear++;
    }
    return clear;
  });
  answer = Math.max(...result);
  return answer;
}

function permutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = permutation(rest, selectNum - 1);
    const combined = permutations.map((p) => [fixed, ...p]);
    result.push(...combined);
  });

  return result;
}
