# 문제

[스킬트리](https://school.programmers.co.kr/learn/courses/30/lessons/49993)

# 코드

```javascript
function solution(skill, skill_trees) {
  var answer = 0;
  const skillhashMap = {};

  for (let i = 1; i < skill.length; i++) {
    skillhashMap[skill[i]] = skill[i - 1];
  }

  for (let tree of skill_trees) {
    let prevSkill = null;
    let isPossible = true;
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] === skill[0]) {
        prevSkill = tree[i];
      }
      if (skillhashMap[tree[i]]) {
        if (skillhashMap[tree[i]] !== prevSkill) {
          isPossible = false;
          break;
        } else {
          prevSkill = tree[i];
        }
      }
    }
    if (isPossible) {
      answer++;
    }
  }

  return answer;
}
```

# 풀이

해시, 맵을 사용합니다.

배우는 스킬을 key, 바로 직전 선행스킬을 value로 가지는 map을 만들어서 사욯합니다.

시작시에는 배운 스킬이 없으므로 prevSkill을 null로 초기화 하고 만약 첫번째 스킬을 배우면 그때부터 prevSkill 값을 첫번째 스킬로 초기화 해줍니다.

선행스킬과 관련없는 스킬인경우 skillhashMap[배우는스킬] === undefined이므로 그냥 통과됩니다.

skillhashMap[배우는스킬] === prevSkill 이면 스킬을 배우고 prevSill을 업데이트 하고 그렇지 않다면 잘못된 스킬트리이므로 isPossible 값을 false로 변경하고 break를 해줍니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
