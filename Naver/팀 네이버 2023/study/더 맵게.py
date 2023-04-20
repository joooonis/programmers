import heapq


def solution(scoville, K):
    count = 0
    s = scoville
    heapq.heapify(s)
    while s[0] < K and len(s) > 1:
        x = heapq.heappop(s)
        y = heapq.heappop(s)
        z = x + (y * 2)
        count += 1
        heapq.heappush(s, z)

    if s[0] >= K:
        return count
    else:
        return -1
