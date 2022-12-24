function solution(k, ranges) {
  let n = k;
  let answer = [];
  let collas = [];
  let area = [];
  while (k !== 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;
    collas.push(k);
  }
  collas = [n].concat(collas);

  for (let i = 0; i < collas.length - 1; i++) {
    area.push((collas[i] + collas[i + 1]) / 2);
  }

  ranges.map(([start, end]) => {
    end = collas.length - 1 + end;
    if (end < start) answer.push(-1);
    else {
      let sum = 0;
      for (let i = start; i < end; i++) {
        sum += area[i];
      }
      answer.push(sum);
    }
  });
  return answer;
}
