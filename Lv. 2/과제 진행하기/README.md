# 문제

[과제 진행하기](https://school.programmers.co.kr/learn/courses/30/lessons/176962#)

# 코드

```javascript
function solution(plans) {
  var answer = [];
  plans.sort((a, b) => convertToMinute(b[1]) - convertToMinute(a[1]));
  stack = [];
  while (plans.length || stack.length) {
    let [name, start, playTime] = plans.pop();
    let endTime = convertToMinute(start) + parseInt(playTime);

    // 남겨둔 과제들 전부 처리
    if (plans.length === 0) {
      answer.push(name);
      while (stack.length) {
        answer.push(stack.pop()[0]);
      }
      break;
    }

    let nextStartTime = convertToMinute(plans[plans.length - 1][1]);
    let leftTime = endTime - nextStartTime; // 남은 시간 = 현재 과제 끝나는 시간 - 다음 과제 시작 시간
    if (leftTime > 0) {
      // 과제를 끝내지 못하면 스택에 넣어둠
      stack.push([name, leftTime]);
    } else if (leftTime === 0) {
      answer.push(name);
    } else {
      // 과제를 끝낼 수 있으면
      answer.push(name);
      let nowTime = endTime; // 현재 시간 = 현재 과제 끝나는 시간
      while (stack.length) {
        let [Lastname, LastLeftTime] = stack.pop();
        let availableTime = nextStartTime - nowTime; // 현재 과제 끝나는 시간 - 다음 과제 시작 시간
        if (availableTime >= LastLeftTime) {
          // 다음 과제 시작 시간 - 현재 시간 >= 스택에 있는 과제 남은 시간, 스택에 있는 과제를 끝낼 수 있음
          answer.push(Lastname);
          nowTime = nowTime + LastLeftTime; // 현재 시간 = 현재 시간 + 스택에 있는 과제 남은 시간
        } else {
          // 스택에 있는 과제를 끝낼 수 없음
          stack.push([Lastname, LastLeftTime - availableTime]);
          break;
        }
      }
    }
  }

  return answer;
}

function convertToMinute(time) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}
```

# 풀이

정렬, 스택, 구현 문제입니다. 스택에서 꺼냈다가 과제를 다 마치지 못하고 다시 담을 때 남은시간을 수정해주어야 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
