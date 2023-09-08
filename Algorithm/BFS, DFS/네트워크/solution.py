def solution(n, computers):
    visited = set()
    network = 0

    def dfs(node):
        visited.add(node)
        for i in range(n):
            if computers[node][i] and i not in visited:
                dfs(i)

    for node in range(n):
        if node not in visited:
            network += 1
            dfs(node)

    return network
