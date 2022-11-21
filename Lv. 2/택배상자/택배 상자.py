def solution(order):
    answer = 0
    container = 1
    stack = []

    for target in order:
        if target < container and stack[-1] != target:
            break

        if stack:
            if stack[-1] == target:
                stack.pop()
                answer += 1
                continue

        while container != target:
            stack.append(container)
            container += 1

        if container == target:
            container += 1
            answer += 1

    return answer
