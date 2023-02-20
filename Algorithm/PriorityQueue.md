# 우선순위 큐(Priority Queue)

우선순위 큐는 일반적으로 우선순위가 높은 항목이 먼저 처리되는 데이터 구조입니다. 이를 위해 JavaScript에서는 일반적으로 Array 객체와 함께 push()와 shift() 메서드를 사용하여 구현합니다.

다음은 JavaScript에서 우선순위 큐를 구현하는 간단한 코드 예시입니다.

```javascript
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
    return this.queue[0]?.item;
  }
}
```

우선순위 큐는 일반적으로 두 가지 메서드를 가지고 있습니다: enqueue()와 dequeue()입니다.

- enqueue(item, priority) 메서드: 항목과 우선순위를 인자로 받아 우선순위에 따라 항목을 큐에 추가합니다.
- dequeue() 메서드: 가장 높은 우선순위를 가진 항목을 큐에서 제거하고 반환합니다.

이 예시에서는 enqueue() 메서드를 사용하여 우선순위가 낮은 항목부터 큐에 추가하며, dequeue() 메서드를 사용하여 가장 높은 우선순위를 가진 항목을 큐에서 제거합니다.

위의 코드에서는 우선순위 큐를 구현하기 위해 item과 priority를 속성으로 가지는 queueItem 객체를 생성하며, enqueue() 메서드에서는 큐에 추가하기 전에 queueItem 객체를 우선순위에 따라 정렬합니다.

이제 PriorityQueue 클래스를 사용하여 우선순위 큐를 만들고 다음과 같이 사용할 수 있습니다.

```javascript
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);
console.log(pq.dequeue()); // task2
console.log(pq.dequeue()); // task3
console.log(pq.dequeue()); // task1
```
