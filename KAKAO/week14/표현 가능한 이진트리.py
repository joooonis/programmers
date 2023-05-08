def solution(numbers):
    answer = []
    for num in numbers:
        n = bin(num)[2:]
        while not isFullBinaryTree(len(n)):
            n = '0' + n
        answer.append(checkIsFullBinaryTree(n))
    return answer


def checkIsFullBinaryTree(binary):
    if len(binary) == 1:
        return 1
    mid = binary[len(binary)//2]
    left = binary[:len(binary)//2]
    right = binary[len(binary)//2+1:]

    if mid == '1':
        return checkIsFullBinaryTree(left) * checkIsFullBinaryTree(right)
    else:
        return isNotIncluedsOne(left) * isNotIncluedsOne(right)


def isFullBinaryTree(n):
    if n == 1:
        return True
    if n % 2 == 0:
        return False
    return isFullBinaryTree(n//2)


def isNotIncluedsOne(binary):
    return not '1' in binary
