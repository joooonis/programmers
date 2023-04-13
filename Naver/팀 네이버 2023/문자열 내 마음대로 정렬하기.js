function solution(strings, n) {
  strings.sort((a, b) => compareFn(a, b, n));
  return strings;
}

function compareFn(a, b, n) {
  return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
}
