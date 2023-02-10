function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    target = arr.slice(i + 1);
    if (target.find((num) => num > arr[i])) {
      answer.push(target.find((num) => num > arr[i]));
    } else {
      answer.push(-1);
    }
  }
  return answer;
}

function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;
    while (j < numbers.length && numbers[i] >= numbers[j]) {
      j++;
    }
    if (j === numbers.length) {
      result.push(-1);
    } else {
      result.push(numbers[j]);
    }
  }
  return result;
}

function solution(numbers) {
  let result = [];
  let stack = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
    stack.push(numbers[i]);
  }
  return result.reverse();
}
