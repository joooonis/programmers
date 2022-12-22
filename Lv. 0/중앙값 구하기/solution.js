function solution(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid] + sorted[mid - 1]) / 2;
}
