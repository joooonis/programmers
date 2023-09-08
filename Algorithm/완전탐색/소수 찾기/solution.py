def solution(numbers):
    answer = set()
    arr = list(numbers)
    def dfs(n,s):
        if len(s) > 0 and isPrime(int(s)):
            answer.add(int(s))
            
        for i in range(len(arr)):
            if arr[i] is None:
                continue
            temp = arr[i]
            arr[i] = None   
            dfs(n+1, s + temp)
            arr[i] = temp
            
    dfs(0,'')
    return len(answer)

def isPrime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True