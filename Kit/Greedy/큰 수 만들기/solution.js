// time exceeded
function solution(number, k) {
  const numbers = number.split('').map((n) => +n);

  for (let i = 0; i < numbers.length; i++) {
    if (k === 0) break;
    if (numbers[i] < numbers[i + 1]) {
      numbers.splice(i, 1);
      i -= 2;
      k--;
    }
  }

  if (k > 0) numbers.splice(numbers.length - k, k);

  return numbers.join('');
}

// use stack to pass time limit
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  stack.splice(stack.length - k, k);

  return stack.join('');
}
