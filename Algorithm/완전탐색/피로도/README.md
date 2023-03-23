# 문제

[피로도](https://school.programmers.co.kr/learn/courses/30/lessons/87946)

# 코드

```javascript
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
```

# 풀이

최대 던전의 개수가 8개 이므로 완전탐색을 하여도 시간이 그렇게 걸리지 않을 것입니다. 던전을 방문하는 순서의 모든 경우의 수는 순열로 찾을 수 있습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
