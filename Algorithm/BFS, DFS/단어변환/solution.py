def solution(begin, target, words):
    def is_connect(a, b):
        return sum(1 for x, y in zip(a, b) if x != y) == 1

    def dfs(current, count):
        nonlocal answer
        if current == target:
            answer = min(answer, count)
            return
        for word in words:
            if is_connect(current, word) and word not in visited:
                visited.add(word)
                dfs(word, count+1)
                visited.pop()

    answer = float('inf')
    visited = set()

    if target not in words:
        return 0

    dfs(begin, 0)

    return answer if answer != float('inf') else 0
