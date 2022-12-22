function solution(str) {
  let words = str.split('');
  let answer = 0;
  let same = 1;
  let notSame = 0;

  while (words.length > 0) {
    same = 1;
    notSame = 0;
    let firstWord = words.shift();
    while (words.length > 0) {
      let nextWord = words.shift();
      if (nextWord === firstWord) {
        same++;
      } else {
        notSame++;
      }
      if (same === notSame) {
        answer++;
        break;
      }
    }
  }

  if (same !== notSame) answer++;
  return answer;
}
