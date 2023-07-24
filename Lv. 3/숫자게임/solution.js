function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let n = A.length;
  let aIdx = 0,
    bIdx = 0;
  let maxPoints = 0;

  while (aIdx < n && bIdx < n) {
    if (A[aIdx] < B[bIdx]) {
      maxPoints++;
      aIdx++;
      bIdx++;
    } else {
      bIdx++;
    }
  }

  return maxPoints;
}
