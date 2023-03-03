function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;

  while (people.length > 0) {
    let p = people.pop();
    while (p < limit && people.length > 0) {
      if (p + people[people.length - 1] <= limit) {
        p += people.pop();
      } else if (p + people[0] <= limit) {
        p += people.shift();
      } else {
        break;
      }
    }
    answer++;
  }

  return answer;
}
