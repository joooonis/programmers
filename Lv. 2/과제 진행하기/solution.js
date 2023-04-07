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
