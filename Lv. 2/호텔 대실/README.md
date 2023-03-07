# 문제

[호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651#)

# 코드

```javascript
function solution(book_time) {
  book_time.sort();
  const room = [];
  book_time.forEach((t) => {
    const tmp = t[0].split(':');
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = room.findIndex((e) => e <= startTime);
    if (idx === -1) room.push(getNextTime(t[1]));
    else room[idx] = getNextTime(t[1]);
  });

  return room.length;
}

function getNextTime(endTime) {
  const next = endTime.split(':');
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}
```

# 풀이

결국 손님을 받을 수 있는 방이 있는지 여부를 위해 필요한 정보는 현재 사용중인 방들의 종료시간이 언제인가 하는 것입니다. 입실시간이 빠른 순서대로 입장을 받고, 각 방의 종료시간과 비교하여 새로운 방이 필요한 여부를 확인하고 만약 가능한 방이 있다면 그 방에 손님을 받고 종료시간을 새롭게 업데이트 해주면 됩니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
