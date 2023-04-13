function solution(price, money, count) {
  var answer = -1;
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += i * price;
  }
  return cost > money ? cost - money : 0;
}
