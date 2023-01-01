# 문제

마법의 엘리베이터

https://school.programmers.co.kr/learn/courses/30/lessons/148653

# 풀이

숫자의 길이 구하기 : `(123 + '').length`, 문자열로 변환한뒤 length를 사용
숫자의 각 자리수 : 123 % 10 -> 3
루프한번 돌때마다 : `Math.floor(number / 10)`
num의 십의 자리수 : `(num+'')[num.length - 2]`, 문자열로 바꾸고 맨 뒤에서 두번째 수...
일의자리수가 5일때 십의자리수 > 5 인지에 따라서 케이스가 바뀝니다.

# 결과

정확성 : 100.0
합계 : 100.0 / 100.0
