function solution(cards) {
  const cardCopy = [...cards.slice(1)];
  const groups = [];
  let curr = cards[0];
  let g = [curr];

  while (cardCopy.length) {
    const next = cards[curr - 1];
    const idx = cardCopy.indexOf(next);

    if (idx > -1) {
      cardCopy.splice(idx, 1);
    }

    if (g.includes(next)) {
      groups.push(g);
      curr = cardCopy.pop();
      g = [curr];
    } else {
      g.push(next);
      curr = next;
    }
  }

  if (!groups.includes(g)) {
    groups.push(g);
  }

  const groupsCount = groups.map((g) => g.length).sort((a, b) => b - a);
  return groupsCount.length > 1 ? groupsCount[0] * groupsCount[1] : 0;
}
