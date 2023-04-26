function solution(name) {
  const targetDistane = [...name].map((char) => distance[char]);
  const nextIndex = (name, index, targetDistane) => {
    let next = -1;
    for (let i = 1; i < name.length; i++) {
      const left = (index - i + name.length) % name.length;
      const right = (index + i) % name.length;
      if (targetDistane[left] !== 0) {
        next = left;
        break;
      }
      if (targetDistane[right] !== 0) {
        next = right;
        break;
      }
    }
    return next;
  };

  let index = 0;
  let answer = 0;
  while (true) {
    answer += targetDistane[index];
    targetDistane[index] = 0;
    if (targetDistane.every((dist) => dist === 0)) break;
    index = nextIndex(name, index, targetDistane);
    answer++;
  }
  return answer;
}

const distance = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 12,
  P: 11,
  Q: 10,
  R: 9,
  S: 8,
  T: 7,
  U: 6,
  V: 5,
  W: 4,
  X: 3,
  Y: 2,
  Z: 1,
};
