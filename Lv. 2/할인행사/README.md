# 문제

[할인 행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127#)

# 코드

```javascript
function solution(want, number, discount) {
  answer = 0;

  const isMatch = (discount) => {
    hash = {};
    for (let d of discount) {
      hash[d] = (hash[d] || 0) + 1;
    }
    let enough = true;
    want.forEach((w, i) => {
      if (hash[w] !== number[i]) enough = false;
    });
    return enough;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    if (isMatch(discount.slice(i, i + 10))) answer += 1;
  }

  return answer;
}
```

# 풀이

해시 또는 객체를 이용합니다. 해시를 매번 새로 만들어주어야 통과됩니다.(왜인지 모르겠음)

# 결과

정확성: 100.0
합계: 100.0 / 100.0
