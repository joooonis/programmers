# 문제

[위장](https://school.programmers.co.kr/learn/courses/30/lessons/42578)

# 코드

```javascript
function solution(clothes) {
  let hash = {};

  for (let item of clothes) {
    hash[item[1]] = (hash[item[1]] || 0) + 1;
  }

  return (
    Object.values(hash)
      .map((n) => n + 1)
      .reduce((a, c) => a * c) - 1
  );
}
```

# 풀이

의상 종류마다 n개의 옷에서 고를 수 있는 겅우의 수는 n+1이고, 서로 곱해준다음 전체에서 1을 빼줍니다.(아무 옷도 고르지 않는 경우)

의상의 종류를 key로, 의상의 개수를 value로 가지는 hash map을 만들어서 사용합니다.

```javascript
for (let item of clothes) {
  hash[item[1]] = (hash[item[1]] || 0) + 1;
}
```

위와 같이 key가 없는 경우 0으로 초기화 해주고 있는 경우 값에 1을 더해줍니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
