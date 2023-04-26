def solution(board):
    n = len(board)
    queue = [((0, 0), (0, 1), 0)]  # 시작 상태를 큐에 추가
    visited = set(queue[0])       # 시작 상태를 visited에 추가

    while queue:
        robot1, robot2, time = queue.pop(0)

        if (n-1, n-1) in (robot1, robot2):
            return time

        for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            next_robot1 = (robot1[0] + dr, robot1[1] + dc)
            next_robot2 = (robot2[0] + dr, robot2[1] + dc)

            if 0 <= next_robot1[0] < n and 0 <= next_robot1[1] < n \
                    and 0 <= next_robot2[0] < n and 0 <= next_robot2[1] < n \
                    and board[next_robot1[0]][next_robot1[1]] == 0 \
                    and board[next_robot2[0]][next_robot2[1]] == 0 \
                    and (next_robot1, next_robot2) not in visited:
                queue.append((next_robot1, next_robot2, time + 1))
                visited.add((next_robot1, next_robot2))

        # 로봇이 가로로 놓여 있는 경우
        if robot1[0] == robot2[0]:
            # 위쪽으로 회전
            if robot1[0] > 0 and board[robot1[0]-1][robot1[1]] == 0 and board[robot2[0]-1][robot2[1]] == 0:
                next_robot1 = (robot1[0]-1, robot1[1])
                next_robot2 = (robot2[0]-1, robot2[1])
                if (next_robot1, robot1) not in visited:
                    queue.append((next_robot1, robot1, time + 1))
                    visited.add((next_robot1, robot1))
                if (next_robot2, robot2) not in visited:
                    queue.append((next_robot2, robot2, time + 1))
                    visited.add((next_robot2, robot2))
            # 아래쪽으로 회전
            if robot1[0] < n-1 and board[robot1[0]+1][robot1[1]] == 0 and board[robot2[0]+1][robot2[1]] == 0:
                next_robot1 = (robot1[0]+1, robot1[1])
                next_robot2 = (robot2[0]+1, robot2[1])
                if (robot1, next_robot1) not in visited:
                    queue.append((robot1, next_robot1, time + 1))
                    visited.add((robot1, next_robot1))
                if (robot2, next_robot2) not in visited:
                    queue.append((robot2, next_robot2, time + 1))
                    visited.add((robot2, next_robot2))
                    
