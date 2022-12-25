# 문제

2022 KAKAO TECH INTERSHIP

두 큐 합 같게 만들기

https://school.programmers.co.kr/learn/courses/30/lessons/118667#

# 풀이

### two pointer, circular queue

`q1 = [3, 2, 7, 2], q2 = [4, 5, 5, 1]`

(1) q3 = [3, 2, 7, 2, 4, 5, 5, 1]

(2) 전체 합이 홀수이면 -1을 return

(3) 두 개의 queue를 concat해주고 i = 0, j = 4로 pointer의 위치를 잡습니다. sum에 q1의 합을 저장하고, tqrgetSum에 전체합 / 2 를 저장합니다.

(4)
while sum !== targetSum:

if sum < targetSum : j pointer의 위치를 ++

else : i pointer의 위치를 ++

\* pointer의 위치는 1을 더한후 %= q3.length를 하여 circular 하게 해줍니다.

\* impossible case(infinite loop) :

[1, 1], [1, 5] : 두 pointer가 겹치면 -1을 반환합니다.
[101, 100], [102, 103] : 두 pointer의 위치가 반대가 되면 -1을 반환합니다.

# 결과

정확성 : 96.7
합계 : 96.7 / 100/0
