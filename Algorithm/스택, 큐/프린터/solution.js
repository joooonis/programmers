function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));
  while (true) {
    let current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      answer++;
      if (current.index === location) return answer;
    }
  }
}

function solution(priorities, location) {
  const queue = priorities.map((v, i) => [v, i]);
  let count = 1;

  while (queue.length > 0) {
    paper = queue.shift();
    if (Math.max(...queue.map((v) => v[0])) > paper[0]) {
      queue.push(paper);
    } else if (paper[1] === location) {
      return count;
    } else {
      count++;
    }
  }
  return count;
}
