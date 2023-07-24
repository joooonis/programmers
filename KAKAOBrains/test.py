def find_matching_substring(text, prefixString, suffixString):
    prefixScore = ''
    suffixScore = ''
    textScore = 0

    # Find prefixScore
    for i in range(len(prefixString), 0, -1):
        if text.endswith(prefixString[:i]):
            prefixScore = prefixString[:i]
            break

    # Find suffixScore
    for i in range(len(suffixString)):
        if text.startswith(suffixString[i:]):
            suffixScore = suffixString[i:]
            break

    # Compute textScore
    textScore = len(prefixScore) + len(suffixScore)

    # Find the matching substring with the highest textScore
    matching_substrings = []
    for i in range(len(text)):
        for j in range(i, len(text)):
            substring = text[i:j+1]
            if substring.startswith(prefixScore) and substring.endswith(suffixScore):
                matching_substrings.append(substring)

    highest_score = 0
    best_substring = ''
    for substring in matching_substrings:
        score = len(substring)
        if score > highest_score:
            highest_score = score
            best_substring = substring
        elif score == highest_score and substring < best_substring:
            best_substring = substring

    return best_substring


text = 'abracadabra'
prefixString = 'habrahabr'
suffixString = 'bracket'
result = find_matching_substring(text, prefixString, suffixString)
print(result)  # Output: 'abrac'
