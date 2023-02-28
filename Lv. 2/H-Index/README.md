# 문제

[H-Index](https://school.programmers.co.kr/learn/courses/30/lessons/42747#)

# 코드

```javascript
function calculateHIndex(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let hIndex = 0;
  for (let i = 0; i < sortedCitations.length; i++) {
    const citationCount = sortedCitations[i];
    if (citationCount >= i + 1 && citations.length - i - 1 <= citationCount) {
      hIndex = i + 1;
    }
  }
  return hIndex;
}
```

# 풀이

내림차순으로 정렬 후 index와 인용수를 비교하면서 반복문을 돌립니다.
인용수가 index보다 크거나 같고 남은 논문수가 인용수보다 작으면 h의 값을 없데이트 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
