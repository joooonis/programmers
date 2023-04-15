function solution(n, times) {
  let left = 1;
  let right = times[0] * n;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < times.length; i++) {
      sum += Math.floor(mid / times[i]);
    }
    if (cnt < n) left = mid + 1;
    else right = mid;
  }
  return left;
}
