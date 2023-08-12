
def solution(n, edge):
    graph = {}
    for e in edge:
        a, b = e
        if a in graph:
            graph[a].append(b)
        else:
            graph[a] = [b]
        if b in graph:

            graph[b].append(a)
        else:
            graph[b] = [a]

    def bfs(start):
        visited = set()
        q = [start]
        visited.add(start)
        currLevelSize = len(q)

        while q:
            currLevelSize = len(q)
            for i in range(currLevelSize):
                node = q.pop(0)
                for n in graph[node]:
                    if n not in visited:
                        visited.add(n)
                        q.append(n)
        return currLevelSize
    return bfs(1)
