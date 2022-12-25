function solution(k, ranges) {
  const accArea = [0];
  let value = k;
  while (value != 1) {
    // v % 2 가 1 이면 true, 0 이면 false
    const nextValue = value % 2 ? value * 3 + 1 : value / 2;
    accArea.push(accArea[accArea.length - 1] + (value + nextValue) / 2);
    value = nextValue;
  }

  // destructuring assignment
  return ranges.map(([a, b]) => {
    if (a >= accArea.length || -b >= accArea.length) return -1;
    const area = accArea[accArea.length - 1 + b] - accArea[a];
    if (area < 0 || area == null) return -1;
    return area;
  });
}
