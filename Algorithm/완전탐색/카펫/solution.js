function solution(brown, yellow) {
  var answer = [];
  let target = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      target.push([i, yellow / i]);
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (target[i][0] * 2 + target[i][1] * 2 + 4 === brown) {
      answer = [target[i][1] + 2, target[i][0] + 2];
      break;
    }
  }

  return answer;
}
