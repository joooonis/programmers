import heapq

w, n = list(map(int, input().split(" ")))

heap = []

for _ in range(n):
    mi, pi = list(map(int, input().split(" ")))
    heapq.heappush(heap, (-pi, mi))

price = 0

while w >= 0 and heap:
    pi, mi = heapq.heappop(heap)
    pi = -pi
    if w - mi >= 0:
        price += mi*pi
        w -= mi
    else:
        price += w*pi
        w = 0

print(price)
