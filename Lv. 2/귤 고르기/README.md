# 문제

귤 고르기

https://school.programmers.co.kr/learn/courses/30/lessons/138476

# 풀이

단순 구현

(1) object에 크기별로 귤들을 저장합니다.(귤 : 개수)

```tangerine.forEach((v, _) => {
    if (gull[v] === undefined) {
      gull[v] = 1;
    } else {
      ++gull[v];
    }
  });
```

(2) key값만 가지고 와서 수가 많은 순으로 정렬합니다.

```
  const keys = Object.keys(gull).sort((a, b) => gull[a] - gull[b]);
```

(3) 총 개수가 k개가 될 때까지 크기별 귤의 개수가 많은 거부터 담습니다. 귤을 다 담으면 다음 순의 귤을 담습니다.

- x++ -> x의 값을 1증가시키고 이전값을 return
- ++x -> x의 값을 1증가시키고 증가한 값을 return

# 결과

정확성: 100.0
합계: 100.0 / 100.0
