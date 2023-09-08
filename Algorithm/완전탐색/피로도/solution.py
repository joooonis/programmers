def solution(k, dungeons):
    def dfs(p, n, path):
        max_depth = n
        for i, (power, damage) in enumerate(dungeons):
            if power > p or i in path:
                continue
            path.append(i)
            max_depth = max(max_depth, dfs(p-damage, n+1, path))
            path.pop()
        return max_depth

    return dfs(k, 0, [])
