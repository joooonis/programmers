// priority queue with Array (shift, unshift), O(n*logn)
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

// priority queue with Heap, O(logn)
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(item, priority) {
    const node = { item, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min.item;
  }

  peek() {
    return this.heap[0].item;
  }

  length() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    const node = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (node.priority <= parent.priority) {
        break;
      }
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const node = this.heap[index];
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority > node.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority > node.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
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
