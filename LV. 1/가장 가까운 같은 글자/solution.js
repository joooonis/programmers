function solution(s) {
  let result = [];
  let words = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in words) {
      result.push(i - words[s[i]]);
      words[s[i]] = i;
    } else {
      result.push(-1);
      words[s[i]] = i;
    }
  }
  return result;
}
