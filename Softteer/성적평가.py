n = int(input())
finalScroe = {i: 0 for i in range(n)}

for _ in range(3):
    rank = {i: 1 for i in range(n)}
    score = list(map(int, input().split()))

    for i in range(n):
        finalScroe[i] += score[i]
        for j in range(n):
            if score[j] > score[i]:
                rank[i] += 1
    print(' '.join([str(s) for s in rank.values()]))

finalRank = {i: 1 for i in range(n)}

for i in range(n):
    finalRank[i] = 1
    for j in range(n):
        if finalScroe[j] > finalScroe[i]:
            finalRank[i] += 1

print(' '.join([str(s) for s in finalRank.values()]))
