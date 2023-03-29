function solution(n, times) {
  let left = 1;
  let right = times[0] * n;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i]);
    }
    if (cnt < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
