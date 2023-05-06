from itertools import product


def solution(users, emoticons):
    answer = []

    possible_sales = get_permutations([10, 20, 30, 40], len(emoticons))

    for sales in possible_sales:
        plus_assinger, purchases = caculatePlusAssinger(
            users, emoticons, sales)
        answer.append((plus_assinger, purchases))

    answer.sort(key=lambda x: (-x[0], -x[1]))

    return answer[0]


def caculatePlusAssinger(users, emoticons, sales):
    purchases = [0 for _ in range(len(users))]
    plus_assinger = 0

    for i, user in enumerate(users):
        user_sale, max_price = user
        for emogi_sale, emoticon in zip(sales, emoticons):
            if emogi_sale >= user_sale:
                purchases[i] += emoticon * (100 - emogi_sale) / 100
                if purchases[i] >= max_price:
                    plus_assinger += 1
                    purchases[i] = 0
                    break

    return plus_assinger, sum(purchases)


def get_permutations(elements, length):
    permutations = list(product(elements, repeat=length))
    return permutations
