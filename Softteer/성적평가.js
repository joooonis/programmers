const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); //줄바꿈 처리 추가

const n = input[0];
const scores = input.slice(1);

let print = '';

const sums = Array(Number(n)).fill(0);

for (let score of scores) {
  const mems = score.split(' ').map(Number);
  const sorted = [...mems].sort((a, b) => b - a);

  for (let i in mems) {
    print += sorted.indexOf(mems[i]) + 1 + ' ';
    sums[i] += mems[i];
  }
  print += '\n';
}

const sorted = [...sums].sort((a, b) => b - a);
for (let s of sums) {
  print += sorted.indexOf(s) + 1 + ' ';
}

console.log(print);
