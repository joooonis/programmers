# 문제

[프린터](https://school.programmers.co.kr/learn/courses/30/lessons/42587#)

# 코드

```javascript
function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));
  while (true) {
    let current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      answer++;
      if (current.index === location) return answer;
    }
  }
}
```

# 풀이

우선 주어진 priorities 배열을 기존값에 index를 추가를 가지는 map배열로 만듭니다.

```javascript
let queue = priorities.map((priority, index) => ({
  priority,
  index,
}));
// queue
[
  { priority: 2, index: 0 },
  { priority: 1, index: 1 },
  { priority: 3, index: 2 },
  { priority: 2, index: 3 },
];
```

# 결과

정확성: 100.0
합계: 100.0 / 100.0
