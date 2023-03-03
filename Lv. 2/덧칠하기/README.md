# 문제

[덧칠하기](https://school.programmers.co.kr/learn/courses/30/lessons/161989)

# 코드

```javascript
function solution(n, m, section) {
  var answer = 0;
  while (section.length > 0) {
    let next = section.pop();
    answer++;
    while (section.length > 0 && section[section.length - 1] >= next + m - 1) {
      section.pop();
    }
  }
  return answer;
}
```

# 풀이

단순구현 문제입니다.

칠해야하는 구역 오른쪽 끝에 롤러를 대서 칠하고 칠해진 구역은 패스, 이후 다시 칠해야하는 구역 오른쪽 끝에 롤러를 대서 칠합니다. 이를 끝날 때까지 반복합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
