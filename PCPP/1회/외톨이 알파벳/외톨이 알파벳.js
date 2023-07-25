function solution(input_string) {
  hash = {};
  answers = new Set();

  for (let i in [...input_string]) {
    alpha = input_string[i];
    if (!hash[alpha]) hash[alpha] = [+i];
    else if (hash[alpha][hash[alpha].length - 1] + 1 === +i) {
      hash[alpha] = [...hash[alpha], +i];
    } else {
      hash[alpha] = [...hash[alpha], +i];
      answers.add(alpha);
    }
  }

  return answers.size > 0 ? [...answers].sort().join('') : 'N';
}
