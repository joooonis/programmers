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


function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let d = 0;
  let p = 0;
  for (var i = n - 1; i >= 0; i--) {
    let cnt = 0;

    d -= deliveries[i];
    p -= pickups[i];

    while (d < 0 || p < 0) {
      d += cap;
      p += cap;
      cnt += 1;
    }

    answer += (i + 1) * 2 * cnt;
  }

  return answer;
}
