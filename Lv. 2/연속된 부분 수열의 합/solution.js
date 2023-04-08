function solution(sequence, k) {
  let answers = [];
  let sum = 0;
  const map = new Map([[0, 0]]);

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (map.has(sum - k)) {
      answers.push([map.get(sum - k), i]);
    }
    map.set(sum, i + 1);
  }

  answers.sort((a, b) =>
    a[1] - a[0] !== b[1] - b[0] ? a[1] - a[0] - (b[1] - b[0]) : a[0] - b[0]
  );
  return answers[0];
}
