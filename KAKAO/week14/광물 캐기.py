def solution(picks, minerals):
    answer = float("inf")
    diamond = {'diamond': 1, 'iron': 1, 'stone': 1}
    iron = {'diamond': 5, 'iron': 1, 'stone': 1}
    stone = {'diamond': 25, 'iron': 5, 'stone': 1}

    permutations = get_permutations_with_repetition(
        ['diamond', 'iron', 'stone'], picks)
    print(permutations)
    for permutation in permutations:
        pirodo = 0
        lst = [pick for pick in permutation]
        print(lst)
        m = [mineral for mineral in minerals]
        while lst:
            pick = lst.pop()
            for _ in range(10):
                if m:
                    mineral = m.pop()
                    pirodo += eval(pick)[mineral]
                else:
                    break
        answer = min(answer, pirodo)

    return answer


def get_permutations_with_repetition(elements, repetitions):
    if len(elements) != len(repetitions):
        raise ValueError(
            "The lengths of 'elements' and 'repetitions' must be the same.")

    result = []

    def generate_permutations(current_permutation, remaining_repetitions):
        if len(current_permutation) == len(elements):
            result.append(tuple(current_permutation))
            return

        for i in range(remaining_repetitions[0] + 1):
            current_permutation.append(elements[len(current_permutation)])
            generate_permutations(current_permutation,
                                  remaining_repetitions[1:])
            current_permutation.pop()

    generate_permutations([], repetitions)

    return result


print(get_permutations_with_repetition(
    ['diamond', 'iron', 'stone'], [2, 2, 2]))
