function solution(n) {
  const count = countOne(n);
  let nextNum = n + 1;
  while (countOne(nextNum) !== count) {
    nextNum++;
  }
  return nextNum;
}

function countOne(num) {
  return num
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;
}
