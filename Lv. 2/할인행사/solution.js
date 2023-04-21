function solution(want, number, discount) {
  answer = 0;

  const isMatch = (discount) => {
    hash = {};
    for (let d of discount) {
      hash[d] = (hash[d] || 0) + 1;
    }
    let enough = true;
    want.forEach((w, i) => {
      if (hash[w] !== number[i]) enough = false;
    });
    return enough;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    if (isMatch(discount.slice(i, i + 10))) answer += 1;
  }

  return answer;
}
