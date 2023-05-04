def solution(n, m, x, y, r, c, k):
    answer = ''

    # d, l, r, u 사전순
    # (x,y) => (r,y) => (n,y) => (n,1) => (r,c)
    if abs(x-r) + abs(y-c) > k or (k - abs(x-r) - abs(y-c)) % 2 == 1:
        return 'impossible'

    # 아래로 우선 이동
    while x < r:
        answer += 'd'
        x += 1
        k -= 1

    # 이후에 다시 올라올 수 있는 거리만큼 아래로 이동
    while k - (abs(y-c)+abs(x-r)) > 0 and n > x:
        answer += 'd'
        x += 1
        k -= 1

    # 왼쪽으로 우선 이동
    while y > c:
        answer += 'l'
        y -= 1
        k -= 1

    # 이후에 다시 오른쪽으로 이동할 수 있는 거리만큼 왼쪽으로 이동
    while k - (abs(y-c)+abs(x-r)) > 0 and 1 < y:
        answer += 'l'
        y -= 1
        k -= 1

    # 아직도 k가 남으면 rl 반복, ud보다 사전순으로 빠르기 때문
    while k - (abs(y-c)+abs(x-r)) > 0:
        answer += 'rl'
        k -= 2

    # 오른쪽으로 이동
    while y < c:
        answer += 'r'
        y += 1
        k -= 1

    # 위로 이동
    while x > r:
        answer += 'u'
        x -= 1
        k -= 1

    return answer
