function solution(n, build_frame) {
  const board = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));
  const results = [];
  for ([x, y, a, b] of build_frame) {
    // 기둥 설치하는 경우
    if (a === 0 && b === 1) {
      if (y === 0) results.push([x, y, 0]); // 바닥
      else if (y > 0 && isBuildable([x, y, a], results))
        results.push([x, y, a]);
    }
    // 보를 설치하는 경우
    if (a === 1 && b === 1) {
      if (isBuildable([x, y, a], results)) results.push([x, y, a]);
    }
  }

  return results.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function isRemovable([x, y, a], results) {
  if (a === 0) {
    let [leftBo, rightBo, leftGi, rightGi, onGi] = [
      false,
      false,
      false,
      false,
      false,
    ];

    for (let i = 0; i < results.length; i++) {
      const [m, n, c] = results[i];
      if (m === x - 1 && n === y + 1 && c === 1) leftBo = true;
      if (m === x && n === y + 1 && c === 1) rightBo = true;
      if (m === x - 1 && n === y && c === 0) leftGi = true;
      if (m === x + 1 && n === y && c === 0) rightGi = true;
      if (m === x && n === y + 1 && c === 0) onGi = true;
    }
    if (leftBo && !leftGi) return false;
    if (rightBo && !rightGi) return false;
    if (onGi && !leftBo && !rightBo) return false;
    return true;
  }
  if (a === 1) {
    let [leftBo, rightBo, leftUnderGi, rightUnderGi, leftOnGi, rightOnGi] = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    for (let i = 0; i < results.length; i++) {
      const [m, n, c] = results[i];
      if (m === x - 1 && n === y && c === 1) leftBo = true;
      if (m === x + 1 && n === y && c === 1) rightBo = true;
      if (m === x && n === y - 1 && c === 0) leftUnderGi = true;
      if (m === x + 1 && n === y - 1 && c === 0) rightUnderGi = true;
      if (m === x && n === y && c === 0) leftOnGi = true;
      if (m === x + 1 && n === y && c === 0) rightOnGi = true;
    }
    if (leftOnGi && !leftUnderGi && !leftBo) return false;
    if (rightOnGi && !rightUnderGi && !rightBo) return false;
  }
}

function isBuildable([x, y, a], results) {
  if (a === 0) {
    for (let i = 0; i < results.length; i++) {
      const [m, n, c] = results[i];
      if (m === x && n === y - 1 && c === 0) return true;
      if (m === x && n === y && c === 1) return true;
      if (m === x - 1 && n === y && c === 1) return true;
    }
    return false;
  }

  if (a === 1) {
    let [left, right] = [false, false];

    for (let i = 0; i < results.length; i++) {
      const [m, n, c] = results[i];

      if (m === x && n === y - 1 && c === 0) return true;
      if (m === x + 1 && n === y - 1 && c === 0) return true;
      if (m === x - 1 && n === y) left = true;
      if (m === x + 1 && n === y) right = true;
      if (left && right) return true;
    }
    return false;
  }
}
