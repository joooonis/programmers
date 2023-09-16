def solution(n, wires):
    graph = {u: [] for u in range(1, n+1)}
    for u, v in wires:
        graph[u].append(v)
        graph[v].append(u)

    def dfs(i, graph, visited):
        visited.add(i)
        count = 1
        for v in graph[i]:
            if v not in visited:
                count += dfs(v, graph, visited)
        return count

    answer = n

    for u, v in wires:
        visited = set()
        graph[u].remove(v)
        graph[v].remove(u)
        count = dfs(1, graph, visited)
        answer = min(answer, abs(n - count - count))
        graph[u].append(v)
        graph[v].append(u)

    return answer
