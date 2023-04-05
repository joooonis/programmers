// 1. Prefix Sum for one dimension array
// 반복문을 사용하여 배열의 모든 요소를 더하는 것은 O(n)의 시간 복잡도를 가지는 반면, prefixSum을 사용하면 O(1)의 시간 복잡도를 가집니다.
// prefixSum[i] means the sum of arr[0] ~ arr[i - 1]
function prefixSum(arr) {
  const prefixSumArray = [0];
  for (let i = 0; i <= arr.length; i++) {
    prefixSumArray[i + 1] = prefixSumArray[i] + arr[i];
  }
  return prefixSumArray;
}

// 2. Get sum of arr[start] ~ arr[end]
function getSumInRange(prefixSumArray, start, end) {
  return prefixSumArray[end + 1] - prefixSumArray[start];
}

const arr = [1, 2, 3, 4, 5];
const prefixSumArray = prefixSum(arr); // [0, 1, 3, 6, 10, 15]
console.log(getSumInRange(prefixSumArray, 0, 4)); // 15

// 3. Prefix Sum for two dimension array
// prefixSum[i][j] means the sum of arr[0][0] ~ arr[i - 1][j - 1]
function prefixSum2D(arr) {
  const prefixSumArray = Array(arr.length + 1)
    .fill()
    .map(() => Array(arr[0].length + 1).fill(0));

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      prefixSumArray[i][j] =
        prefixSumArray[i - 1][j] +
        prefixSumArray[i][j - 1] -
        prefixSumArray[i - 1][j - 1] +
        arr[i - 1][j - 1];
    }
  }
  return prefixSumArray;
}

// 4. Get sum of arr[startRow][startCol] ~ arr[endRow][endCol]
function getSumInRange2D(prefixSumArray, startRow, startCol, endRow, endCol) {
  return (
    prefixSumArray[endRow + 1][endCol + 1] -
    prefixSumArray[startRow][endCol + 1] -
    prefixSumArray[endRow + 1][startCol] +
    prefixSumArray[startRow][startCol]
  );
}

const arr2d = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const prefixSumArray2d = prefixSum2D(arr2d);
console.log(getSumInRange2D(prefixSumArray2d, 0, 0, 0, 4));
