# 문제

[추억 점수](https://school.programmers.co.kr/learn/courses/30/lessons/176963)

# 코드

```js
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
```

# 풀이

map, reduce 함수를 사용해서 풀어줍니다.
