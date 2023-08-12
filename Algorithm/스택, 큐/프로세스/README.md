# 문제

[프로세스](https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript)

# 코드

```javascript
function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((priority, index) => ({ priority, index }));

  while (true) {
    let p = queue.shift();
    if (queue.some((v) => v.priority > p.priority)) {
      queue.push(p);
    } else {
      answer++;
      if (p.index === location) return answer;
    }
  }
}
```

# 풀이

priorites 배열을 index를 maping한 객체로 바꿔주고 요구사항대로 돌립니다.
