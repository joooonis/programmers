function solution(clothes) {
  let hash = {};

  for (let item of clothes) {
    hash[item[1]] = (hash[item[1]] || 0) + 1;
  }

  return (
    Object.values(hash)
      .map((n) => n + 1)
      .reduce((a, c) => a * c) - 1
  );
}
