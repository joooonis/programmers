function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((priority, index) => ({ priority, index }));

  while (true) {
    let p = queue.shift();
    if (queue.some((v) => v.priority > p.priority)) {
      queue.push(p);
    } else {
      answer++;
      if (p.index === location) return answer;
    }
  }
}
