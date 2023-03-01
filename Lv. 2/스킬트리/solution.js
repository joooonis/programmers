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
