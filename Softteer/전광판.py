d = {
    'N': 0b0000000,
    '0': 0b1110111,
    '1': 0b0000011,
    '2': 0b0111110,
    '3': 0b0011111,
    '4': 0b1001011,
    '5': 0b1011101,
    '6': 0b1111101,
    '7': 0b1010011,
    '8': 0b1111111,
    '9': 0b1011111
}

n = int(input())

for _ in range(n):
    n, m = input().split(" ")
    count_ones = 0

    while len(n) != len(m):
        if len(n) > len(m):
            m = 'N' + m
        else:
            n = 'N' + n
    for i in range(len(n)-1, -1, -1):
        xor = d[n[i]] ^ d[m[i]]
        binary_string = bin(xor)[2:]  # '0b' prefix 제거
        count_ones += binary_string.count('1')

    print(count_ones)
