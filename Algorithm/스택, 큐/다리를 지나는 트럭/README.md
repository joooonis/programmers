# 문제

[다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

# 코드

```javascript
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue = new Array(bridge_length).fill(0);
  let sum = 0;

  while (truck_weights.length > 0 || sum > 0) {
    sum -= queue.shift();

    if (sum + truck_weights[0] <= weight) {
      sum += truck_weights[0];
      queue.push(truck_weights.shift());
    } else {
      queue.push(0);
    }

    time++;
  }

  return time;
}
```

# 풀이

다리를 queue로 생각합니다. 처음에 queue 배열을 bridge_length 만큼 0으로 채워서 초기화 합니다. 이러면 시작부터 다리 앞에서 하나씩 빼는 것으로 생각할 수 있습니다. sum === 0 이 되면 모든 트럭이 다리를 통과한 것으로 판단합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
