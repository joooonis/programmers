# 문제

[표현 가능한 이진트리](https://school.programmers.co.kr/learn/courses/30/lessons/150367)

# 코드

```javascript
function solution(numbers) {
  let answer = [];
  numbers.forEach((num) => {
    binary = num.toString(2);
    while (!isHeight(binary.length)) {
      binary = '0' + binary;
    }
    answer.push(wow(binary));
  });

  return answer;
}

function wow(binary) {
  if (binary.length === 1) {
    return 1;
  }

  let mid = binary[Math.floor(binary.length / 2)];
  let left = binary.slice(0, Math.floor(binary.length / 2));
  let right = binary.slice(Math.floor(binary.length / 2) + 1, binary.length);

  if (mid === '1') {
    return wow(left) * wow(right);
  } else {
    return left.includes(1) || right.includes(1) ? 0 : 1;
  }
}

function isHeight(n) {
  if (n === 1) return true;
  if (n % 2 === 0) return false;
  return isHeightNumber(Math.floor(n / 2));
}
```

# 풀이

포화이진트리, 즉 꽉찬 이진트리에서 노드의 개수는 2\*\*h - 1 입니다.
반대로 높이는 log2(n+1) 입니다. 주어진 이진수를 포화이진트리로 만들기 위해서는
필요한 만큼 '0'을 앞에 추가합니다.
이후 표현가능한 수인지 확인하기 위해서는

1. 가운데 노드 === 1 이라면 왼쪽, 오른쪽 서브트리에 대하여 재귀적으로 판별함수를 호출합니다.
2. 가운데 노드 === 0 이라면 그 하위 노드들에 1이 포함되서는 안됩니다.

올바르지 못한 구조가 발견될 경우 wow함수는 0을 return 함으로 재귀적으로 호출된 값들의 곱이 0으로 틀린 구조임을 보일 수 있습니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
