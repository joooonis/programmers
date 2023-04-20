# 문제

[디펜스 게임](https://school.programmers.co.kr/learn/courses/30/lessons/142085)

# 코드

```python
import heapq

def solution(n, k, enemy):
    pq = []
    answer = 0

    for en in enemy:
        if n >= en:
            n -= en
            heapq.heappush(pq, -en)
        else:
            if k == 0:
                break
            elif len(pq) == 0 and k > 0:
                k -= 1
            elif -pq[0] > en and k > 0:
                n += -pq[0]
                heapq.heappop(pq)
                n -= en
                heapq.heappush(pq, -en)
                k -= 1
            elif en >= -pq[0] and k > 0:
                k -= 1
        answer += 1

    return answer
```

# 풀이

PriorityQueue(우선 순위 큐)를 사용합니다.

1. 막힐 때까지 게임을 진행시킵니다. 막힐 때까지 가는 동안 적이 많았던 개수 순으로 PriorityQueue에 넣습니다.
   2 - 1. 막힌 경우 무적권이 있다면 현재스테이지의 enemy 수와 PriorityQueue의 peek을 비교하여 더 큰걸로 무적권을 사용하는것으로 합니다.
   2 - 2. 만약 이전라운드에서 무적권을 사용하는 거라면 이번 라운드에는 무적권을 사용하지 않는 것으로 이전과 동일하게 PriorityQueue에 추가해주어야 합니다.
2. 만약 PriorityQueue가 비었다면 무적권을 사용합니다.
3. 무적권이 없다면 게임을 종료합니다.

# 결과

정확성: 81.3
합계: 81.3 / 100.0
