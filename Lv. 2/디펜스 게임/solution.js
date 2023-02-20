class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    const queueItem = { item, priority };
    let added = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (queueItem.priority > this.queue[i].priority) {
        this.queue.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    if (!added) {
      this.queue.push(queueItem);
    }
  }

  dequeue() {
    return this.queue.shift().item;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  length() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0].item;
  }
}

function solution(n, k, enemy) {
  const pq = new PriorityQueue();
  let answer = 0;
  while (enemy.length > 0) {
    e = enemy.shift();
    if (n >= e) {
      n -= e;
      pq.enqueue(e, e);
      answer++;
    } else {
      if (pq.isEmpty() && k > 0) {
        k--;
        answer++;
        continue;
      }
      if (k > 0) {
        k--;
        answer++;
        max = pq.peek();
        if (max > e) {
          pq.dequeue();
          pq.enqueue(e, e);
          n += max;
          n -= e;
        }
      } else {
        return answer;
      }
    }
  }
  return answer;
}

// refactoring by ChatGPT
function solution(n, k, enemy) {
  const pq = new PriorityQueue();
  let answer = 0;

  while (enemy.length > 0) {
    const e = enemy.shift();

    if (n >= e) {
      n -= e;
      pq.enqueue(e, e);
      answer++;
    } else {
      if (pq.isEmpty() && k > 0) {
        k--;
        answer++;
        continue;
      }

      if (k <= 0) {
        break;
      }

      k--;
      answer++;

      const max = pq.peek();
      if (max > e) {
        pq.dequeue();
        pq.enqueue(e, e);
        n += max - e;
      }
    }
  }

  return answer;
}
