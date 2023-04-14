// 정렬

function solution(numbers) {
  nums = numbers.map(String).sort((a, b) => {
    let i = 0;
    let j = 0;
    if (a == b) return a - b;
    while (a[i] === b[j]) {
      i = (i + 1) % a.length;
      j = (j + 1) % b.length;
    }
    return b[j] - a[i];
  });
  return nums.join('');
}

function solution(numbers) {
  const nums = numbers.map(String).sort((a, b) => b + a - (a + b));
  if (nums[0] === '0') return '0';
  return nums.join('');
}
