function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;

  while (people.length > 0) {
    let p = people.pop();
    let right = false;
    while (p < limit && people.length > 0) {
      if (right && p + people[people.length - 1] <= limit) {
        p += people.pop();
        right = false;
      } else if (!right && p + people[0] <= limit) {
        p += people.shift();
        right = true;
      } else {
        break;
      }
    }
    answer++;
  }

  return answer;
}
