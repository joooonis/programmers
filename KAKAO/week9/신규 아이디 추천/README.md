# 문제

[신규 아이디 추천](https://school.programmers.co.kr/learn/courses/30/lessons/72410)

# 코드

```javascript
function solution(new_id) {
  let answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z0-9-_.]/g, '');
  answer = answer.replace(/\.{2,}/g, '.');
  answer = answer.replace(/^\.|\.$/g, '');
  answer = answer === '' ? 'a' : answer;
  answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
  answer = answer.replace(/\.$/g, '');
  answer =
    answer.length <= 2 ? answer.padEnd(3, answer[answer.length - 1]) : answer;
  return answer;
}
```

# 풀이

정규식을 사용합니다. 위에서 사용된 정규식의 규칙들은 아래와 같습니다.

`answer.replace(/[^a-z0-9-_.]/g, '');`
[]: 문자 클래스를 나타내며, 해당 문자 클래스 내부에 나열된 문자 중 하나를 찾습니다.
^: 문자 클래스 내부에서 사용되는 경우, 부정(negation)을 의미하며 해당 문자 클래스 내부에 나열된 문자를 제외한 나머지 문자를 찾습니다.
a-z: 영문 소문자 a부터 z까지를 의미합니다.
0-9: 숫자 0부터 9까지를 의미합니다.

`answer.replace(/\.{2,}/g, '.')`
.의 경우 모든문자를 나타내는 특수문자이므로 이스케이프("\")문자 뒤에 사용합니다.
{2,} : 2번 반복을 나타냅니다.
{}를 사용하여 반복 횟수를 나타낼 수 있습니다. 예를 들어
/a{1,3}/은 a가 1번이상 3번까지 반복을 나타냅니다.
/a{2,}/은 a가 2번 이상 반복을 나타냅니다.
/a{,2}/은 a가 2번 이하 반복을 나타냅니다.

`answer.replace(/^\.|\.$/g, '')`
^:문자열의 시작을 나타냅니다.([] 내부에사 사용될 때와 다름)
$:문자열의 끝을 나타냅니다. 문자 뒤에 붙여야 합니다.

# 결과

정확성: 100.0
합계: 100.0 / 100.0
