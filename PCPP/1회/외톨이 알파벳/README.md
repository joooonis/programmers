# 문제

[외톨이 알파벳](https://school.programmers.co.kr/learn/courses/15008/lessons/121683)

# 코드

```js
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
```

# 풀이

해시를 이용 알파벳이 두번 이상 나타나는지 확인하고 만약 두번 이상 일시 이전에 나타난 인덱스와 비교해서 서로 떨어져있는지 확인합니다.
