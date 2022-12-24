function solution(elements) {
  let answer = new Set();
  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j <= elements.length; j++) {
      answer.add(elements.slice(0, j).reduce((a, b) => a + b, 0));
    }
    elements.push(elements.shift());
  }
  return answer.size;
}
