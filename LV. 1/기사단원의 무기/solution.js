function countNumOfDivider(number) {
  let answer = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) answer++;
  }
  answer *= 2;
  return Math.sqrt(number) === Math.floor(Math.sqrt(number))
    ? answer - 1
    : answer;
}

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = countNumOfDivider(i);
    if (count <= limit) answer += count;
    else {
      answer += power;
    }
  }
  return answer;
}
