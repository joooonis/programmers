def solution(today, terms, privacies):
    answer = []
    term_dict = {k: int(v)*28 for k, v in (item.split() for item in terms)}
    today = calculateDay(today)

    for i, privacy in enumerate(privacies):
        day, term = privacy.split(' ')
        day = calculateDay(day)
        if day + term_dict[term] <= today:
            answer.append(i+1)

    return answer


def calculateDay(day):
    year, month, day = day.split('.')
    return int(year) * 12 * 28 + int(month) * 28 + int(day)
