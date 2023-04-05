# 문제

[주차 요금 계산](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

# 코드

```javascript
function solution(fees, records) {
  let hash = {};
  const answer = [];

  for (const recode of records) {
    const [time, car] = recode.split(' ');
    hash[car] = hash[car] ? [...hash[car], time] : [time];
  }
  let keys = Object.keys(hash);
  keys.sort();

  for (const key of keys) {
    const recode = hash[key];
    if (recode.length % 2 === 1) recode.push('23:59');
    let timeOfDay = 0;

    while (recode.length > 0) {
      const outTime = recode.pop();
      const inTime = recode.pop();
      timeOfDay += calculateTime(inTime, outTime);
    }

    let sum = 0;

    if (timeOfDay <= fees[0]) sum += fees[1];
    else {
      sum += fees[1] + Math.ceil((timeOfDay - fees[0]) / fees[2]) * fees[3];
    }
    answer.push(sum);
  }
  return answer;
}

function calculateTime(inTime, outTime) {
  let [hour1, minute1] = inTime.split(':').map(Number);
  let [hour2, minute2] = outTime.split(':').map(Number);

  if (minute1 > minute2) {
    hour2 -= 1;
    minute2 += 60;
  }

  return (hour2 - hour1) * 60 + minute2 - minute1;
}
```

# 풀이

단순 구현 문제입니다. 각 차량의 입차내역을 저장하기 위해 map를 이용합니다.
내역을 전부 담은 후 만약 내역의 길이가 홀수라면 '23:59'를 마지막에 넣어줍니다.
이후 map의 키들을 정렬하여 저장한다음 차례대로 하루동안의 주차장 이용시간과 그에 따른 주차요금을 계산해줍니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
