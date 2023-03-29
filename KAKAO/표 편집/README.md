# 문제

[표 편집](https://school.programmers.co.kr/learn/courses/30/lessons/81303#)

# 코드

```javascript
function solution(n, k, cmd) {
  let answer = '';
  let stack = [];
  let list = new DLL();
  for (let i = 0; i < n; i++) {
    list.add(i);
  }
  let curr = list.head;
  for (let i = 0; i < k; i++) {
    curr = curr.next;
  }

  for (let i = 0; i < cmd.length; i++) {
    let [command, num] = cmd[i].split(' ');
    if (command === 'U') {
      for (let i = 0; i < num; i++) {
        curr = curr.prev;
      }
    } else if (command === 'D') {
      for (let i = 0; i < num; i++) {
        curr = curr.next;
      }
    } else if (command === 'C') {
      stack.push(curr);
      if (curr.prev) {
        curr.prev.next = curr.next;
      }
      if (curr.next) {
        curr.next.prev = curr.prev;
      }
      curr = curr.next ? curr.next : curr.prev;
    } else if (command === 'Z') {
      let node = stack.pop();
      if (node.prev) {
        node.prev.next = node;
      }
      if (node.next) {
        node.next.prev = node;
      }
    }
  }

  let set = new Set();
  for (let i = 0; i < stack.length; i++) {
    set.add(stack[i].value);
  }
  for (let i = 0; i < n; i++) {
    if (set.has(i)) answer += 'X';
    else answer += 'O';
  }

  return answer;
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}
```

# 풀이

Dobule Linked List를 사용해야 모든 효율성 케이스를 통과할 수 있습니다.

아래는 Node, DLL 클래스 입니다.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}
```

삭제된 노드들은 stack에 담고 "Z" 명령어 입력시 최근값부터 pop 해줍니다.

노드를 삭제할 때 주의해서 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
