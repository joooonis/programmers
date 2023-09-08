def solution(maps):
    def bfs(maps, start):
        rows = len(maps)
        cols = len(maps[0])
        visited = [[False]*cols for _ in range(rows)]
        dx = [1, -1, 0, 0]
        dy = [0, 0, 1, -1]
        queue = [start]
        visited[start[0]][start[1]] = True
        count = 0
        while queue:
            cur_level_size = len(queue)
            count += 1
            for _ in range(cur_level_size):
                x, y = queue.pop(0)
                if x == rows - 1 and y == cols - 1:
                    return count
                for i in range(4):
                    nx = x + dx[i]
                    ny = y + dy[i]
                    if 0 <= nx < rows and 0 <= ny < cols:
                        if not visited[nx][ny] and maps[nx][ny]:
                            visited[nx][ny] = True
                            queue.append([nx, ny])
    answer = bfs(maps, [0, 0])
    return answer if answer else -1
