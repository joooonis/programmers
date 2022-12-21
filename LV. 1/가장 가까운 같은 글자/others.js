// map을 사용하여 문자열을 배열로 만들고, hash에 문자열을 key로, 인덱스를 value로 저장합니다.
// hash에 문자열이 존재하면, 현재 인덱스에서 hash에 저장된 인덱스를 빼서 result에 저장합니다.
// hash에 문자열이 존재하지 않으면, -1을 result에 저장합니다.
// hash에 값이 있는지 확인하기 위해 undefined를 사용합니다.(null도 가능합니다.)
// 조건문도 ? : 연산자를 사용하여 간단하게 표현할 수 있습니다.
function solution(s) {
  const hash = {};
  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
