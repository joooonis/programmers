def solution(arrayA, arrayB):
    def findFactors(n):
        s = set()
        d = 2
        for i in range(2, n+1):
            if n % d == 0:
                s.add(d)
            d += 1
        return s

    s1, s2 = findFactors(arrayA[0]), findFactors(arrayB[0])
    s3, s4 = set(), set()

    for a in arrayA:
        s = findFactors(a)
        s1 = s1 & s
        s3 = s3 | s
    for b in arrayB:
        s = findFactors(b)
        s2 = s2 & s
        s4 = s4 | s

    s1 = s1 - s4
    s2 = s2 - s3
    s = s1 | s2
    if s != set():
        return max(s)
    return 0
