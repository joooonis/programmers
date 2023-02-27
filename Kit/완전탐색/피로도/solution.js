function solution(k, dungeons) {
  var answer = -1;
  const allCase = permutation(dungeons, dungeons.length);
  const result = allCase.map((v) => {
    let hp = k;
    let clear = 0;
    for (let i = 0; i < v.length; i++) {
      if (hp < v[i][0]) {
        return clear;
      } else {
        hp -= v[i][1];
        clear++;
      }
    }
    return clear;
  });
  answer = Math.max(...result);

  return answer;
}

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}
