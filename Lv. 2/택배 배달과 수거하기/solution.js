function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  while (deliveries.length > 0 || pickups.length > 0) {
    answer += Math.max(deliveries.length, pickups.length) * 2;
    let [del, pick] = [0, 0];

    while (del < cap && deliveries.length > 0) {
      d = deliveries.pop();
      del += d;
      if (del > cap) {
        deliveries.push(del - cap);
      }
    }
    while (pick < cap && pickups.length > 0) {
      p = pickups.pop();
      pick += p;
      if (pick > cap) {
        pickups.push(pick - cap);
      }
    }

    if (deliveries[deliveries.length - 1] === 0) deliveries.pop();
    if (pickups[pickups.length - 1] === 0) pickups.pop();
  }

  return answer;
}
