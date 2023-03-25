function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue = new Array(bridge_length).fill(0);
  let sum = 0;

  while (truck_weights.length > 0 || sum > 0) {
    sum -= queue.shift();
    if (sum + truck_weights[0] <= weight) {
      sum += truck_weights[0];
      queue.push(truck_weights.shift());
    } else {
      queue.push(0);
    }
    time++;
  }

  return time;
}
