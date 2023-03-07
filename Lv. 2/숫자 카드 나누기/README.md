# 문제

[스킬트리](https://school.programmers.co.kr/learn/courses/30/lessons/49993)

# 코드

```javascript
function solution(arrayA, arrayB) {
  const gcdA = findGCD(arrayA);
  const gcdB = findGCD(arrayB);

  const isPossiblegcdA = !arrayB.some((b) => b % gcdA === 0);
  const isPossiblegcdB = !arrayA.some((a) => a % gcdB === 0);

  if (isPossiblegcdA && isPossiblegcdB) {
    return Math.max(gcdA, gcdB);
  }
  if (isPossiblegcdA) {
    return gcdA;
  }
  if (isPossiblegcdB) {
    return gcdB;
  }
  return 0;
}

function findGCD(nums) {
  function getGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a % b);
  }

  let gcd = nums[0];
  for (let i = 1; i < nums.length; i++) {
    gcd = getGCD(gcd, nums[i]);
  }
  return gcd;
}
```

# 풀이

arrayA, arrayB에 해당하는 최대공약수를 찾고 그 값으로 반대편 배열의 값들을 전부 나눌 수 없다면 그 값이 가능한 정수 a입니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
