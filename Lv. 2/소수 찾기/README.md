# 문제

[소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)

# 코드

```javascript
function solution(numbers) {
  const arr = numbers.split('');
  const set = new Set();

  // 소수 판별함수
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const dfs = (n, str) => {
    if (str.length > 0) set.add(Number(str));
    if (n === arr.length) return; // 종료 조건 n 을 인자로 계속 넘겨주면서 확인
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null) continue;
      const temp = arr[i];
      arr[i] = null; // 방문한 것으로 처리
      dfs(n + 1, str + temp);
      arr[i] = temp; // 방문한 것을 다시 되돌림
    }
  };
  dfs(0, '');
  let answer = 0;
  for (let num of set) {
    if (isPrime(num)) answer++;
  }
  return answer;
}
```

# 풀이

DFS를 사용하여 모든 경로를 완전탐색하는 문제입니다. 방문처리를 하고 재귀호출을 한 후 방문하지 않은 것으로 되돌려야 합니다. 또한 현재 깊이를 함수 인자로 넘겨주어 종료조건을 확인합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
