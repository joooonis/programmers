function solution(numbers, hand) {
  var answer = '';

  const distance = ([x1, y1], [x2, y2]) =>
    Math.abs(x2 - x1) + Math.abs(y2 - y1);

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let left = '*';
  let right = '#';

  for (let n of numbers) {
    if (n === 1 || n === 4 || n === 7) {
      left = n;
      answer += 'L';
    }
    if (n === 3 || n === 6 || n === 9) {
      right = n;
      answer += 'R';
    }
    if (n === 2 || n === 5 || n === 8 || n === 0) {
      distance1 = distance(keypad[left], keypad[n]);
      distance2 = distance(keypad[right], keypad[n]);
      if (distance1 < distance2) {
        left = n;
        answer += 'L';
      } else if (distance1 > distance2) {
        right = n;
        answer += 'R';
      } else {
        if (hand === 'left') {
          left = n;
          answer += 'L';
        } else {
          right = n;
          answer += 'R';
        }
      }
    }
  }

  return answer;
}
