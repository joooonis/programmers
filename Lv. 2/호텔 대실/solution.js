function solution(book_time) {
  // 시작 시간과 종료 시간으로 분리하고 정렬
  const times = [];
  book_time.forEach(([start, end]) => {
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    times.push([startHour * 60 + startMinute, 1]);
    times.push([endHour * 60 + endMinute + 10, -1]);
  });
  times.sort((a, b) => a[0] - b[0]);

  // 객실의 수와 예약 중인 객실의 수 초기화
  let num_rooms = 0;
  let curr_rooms = 0;

  // 각 시간대별로 예약 중인 객실의 수 갱신
  times.forEach(([time, delta]) => {
    curr_rooms += delta;
    num_rooms = Math.max(num_rooms, curr_rooms);
    console.log(curr_rooms, num_rooms);
  });

  return num_rooms;
}

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
