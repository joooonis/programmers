function solution(expression) {
  // expression에서 operator 찾기
  const operators = ['+', '-', '*'];
  const ops = [];
  for (let i = 0; i < expression.length; i++) {
    if (operators.includes(expression[i]) && !ops.includes(expression[i]))
      ops.push(expression[i]);
  }

  // operator 우선순위 정하기 by dfs
  const visited = Array(ops.length).fill(false);
  const orders = [];

  function dfs(order) {
    if (order.length === visited.length) {
      orders.push(order);
      return;
    }
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(order + ops[i]);
        visited[i] = false;
      }
    }
  }

  dfs('');

  // 모든 우선순위에 대해 계산하기
  const results = [];
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const nums = expression.split(/[^0-9]/);

    // 구분자(숫자)를 기준으로 숫자와 연산자를 분리
    // 구분자(숫자) 사이에 문자가 없는경우 ''이 배열에 포함되므로 filter로 제거
    const ops = expression.split(/[0-9]/).filter((el) => el !== '');
    for (let j = 0; j < order.length; j++) {
      const op = order[j];
      while (ops.includes(op)) {
        const idx = ops.indexOf(op);
        const result = eval(`${nums[idx]}${op}${nums[idx + 1]}`);
        nums.splice(idx, 2, result);
        ops.splice(idx, 1);
      }
    }
    results.push(Math.abs(nums[0]));
  }

  return Math.max(...results);
}
