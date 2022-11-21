from collections import deque


def solution(order):
    answer = 0
    container = deque([i+1 for i in range(len(order))])

    stack = []

    for target in order:
        if target not in container and stack[-1] != target:
            break

        if stack:
            if stack[-1] == target:
                stack.pop()
                answer += 1
                continue

        while container[0] != target:
            stack.append(container.popleft())

        if container[0] == target:
            container.popleft()
            answer += 1

    return answer
