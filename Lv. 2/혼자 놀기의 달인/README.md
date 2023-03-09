# 문제

[혼자 놀기의 달인](https://school.programmers.co.kr/learn/courses/30/lessons/131130)

# 코드

```javascript
function solution(cards) {
  const cardCopy = [...cards.slice(1)];
  const groups = [];
  let curr = cards[0];
  let g = [curr];

  while (cardCopy.length) {
    const next = cards[curr - 1];
    const idx = cardCopy.indexOf(next);
    if (idx > -1) {
      cardCopy.splice(idx, 1);
    }

    if (g.includes(next)) {
      groups.push(g);
      curr = cardCopy.pop();
      g = [curr];
    } else {
      g.push(next);
      curr = next;
    }
  }

  if (!groups.includes(g)) {
    groups.push(g);
  }

  const groupsCount = groups.map((g) => g.length).sort((a, b) => b - a);
  return groupsCount.length > 1 ? groupsCount[0] * groupsCount[1] : 0;
}
```

# 풀이

결국 이어진 순환고리들의 그룹들을 전부 찾아주면 됩니다. 놀기 방식대로 구현합니다.

배열에서 특정 값 삭제하기

```javascript
const idx = cardCopy.indexOf(next);
if (idx > -1) {
  cardCopy.splice(idx, 1);
}
```

깊은복사

```javascript
const copy = [...card];
```

# 결과

정확성: 100.0
합계: 100.0 / 100.0
