function solution(tickets) {
  let answers = [];
  let usedTickets = Array(tickets.length).fill(false);

  const dfs = (current, count, path) => {
    if (count === tickets.length) {
      answers.push(path); // 경로를 복사하여 answer 배열에 할당
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!usedTickets[i] && tickets[i][0] === current) {
        usedTickets[i] = true;
        dfs(tickets[i][1], count + 1, [...path, tickets[i][1]]);
        usedTickets[i] = false;
      }
    }
  };

  tickets.sort();
  dfs('ICN', 0, ['ICN']);
  answers.sort();
  return answers[0];
}
