# 문제

[가장 큰 수](https://school.programmers.co.kr/learn/courses/30/lessons/42746)

# 코드

```javascript
function solution(numbers) {
  numbers = numbers.map(String);
  numbers.sort((a, b) => (b + a).localeCompare(a + b));
  return numbers.join('')[0] === '0' ? '0' : numbers.join('');
}
```

# 풀이

`parseInt`함수를 쓰면 정수 범위를 벗어나기 때문에 실패 합니다. 제외해야 하는 경우는 '00000'와 같이 맨 앞에 '0'이 오는 경우이므로 위와 같이 방어로직을 사용합니다.

```javascript
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1; // a, b
  }
  if (a is greater than b by the ordering criterion) {
    return 1; // b, a
  }
  // a must be equal to b
  return 0;
}

```

# 결과

정확성: 100.0
합계: 100.0 / 100.0
