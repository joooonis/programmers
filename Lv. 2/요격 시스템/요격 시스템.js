function solution(targets) {
  // 개구간을 시작 위치에 따라 오름차순으로 정렬합니다.
  targets.sort((a, b) => a[0] - b[0]);
  const n = targets.length;
  const destroyed = new Set(); // 요격에 파괴된 폭격 미사일의 인덱스를 저장하는 Set
  let count = 0; // 요격 미사일 수

  for (let i = 0; i < n; i++) {
    // 이미 요격에 파괴된 폭격 미사일은 건너뜁니다.
    if (destroyed.has(i)) continue;

    const target = targets[i];
    let end = target[1]; // 현재 개구간의 끝 위치

    // 현재 개구간을 포함하는 모든 폭격 미사일을 파괴합니다.
    for (let j = i + 1; j < n; j++) {
      const nextTarget = targets[j];
      if (nextTarget[0] < end) {
        destroyed.add(j);
        end = Math.min(end, nextTarget[1]); // 현재 개구간을 포함하는 폭격 미사일 중 끝 위치가 가장 작은 값을 취합니다.
      } else break;
    }
    count++; // 요격 미사일 수를 증가시킵니다.
  }

  return count;
}

function solution(targets) {
  targets.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let tail = -1;
  let answer = 0;
  targets.forEach(([s, e]) => {
    if (tail <= s) {
      tail = e;
      answer++;
    } else if (e < tail) {
      tail = e;
    }
  });

  return answer;
}
