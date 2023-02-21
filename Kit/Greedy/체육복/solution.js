function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const lostAndReserve = lost.filter((l) => reserve.includes(l));
  lost = lost.filter((l) => !lostAndReserve.includes(l));
  reserve = reserve.filter((r) => !lostAndReserve.includes(r));

  lost.forEach((l) => students[l - 1]--);
  reserve.forEach((r) => {
    if (students[r - 1] === 0) students[r - 1]++;
    else if (students[r - 2] === 0) students[r - 2]++;
    else if (students[r] === 0) students[r]++;
  });

  return students.filter((s) => s > 0).length;
}
