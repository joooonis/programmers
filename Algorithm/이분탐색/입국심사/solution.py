def solution(n, times):
    left = 1
    right = times[0] * n

    while left < right:
        mid = (left + right) // 2
        cnt = 0
        for time in times:
            cnt += mid // time
        if n > cnt:
            left = mid + 1
        else:
            right = mid

    return left
