function solution(s) {
  var answer = true;
  let stack = [];

  s.split('').forEach((v) => {
    if (v === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(v);
  });

  return stack.length === 0 ? true : false;
}

function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === '(' ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
