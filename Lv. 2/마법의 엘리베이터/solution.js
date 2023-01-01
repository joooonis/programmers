function solution(storey) {
  let answer = 0;
  while (storey > 0) {
    const p = storey % 10;
    if (p > 5) {
      answer += 10 - p;
      storey += 10;
    } else if (
      p == 5 &&
      (storey + '').length >= 2 &&
      (storey + '')[(storey + '').length - 2] >= 5
    ) {
      answer += 10 - p;
      storey += 10;
    } else if (p > 0) {
      answer += p;
    }
    storey = Math.floor(storey / 10);
  }
  return answer;
}
