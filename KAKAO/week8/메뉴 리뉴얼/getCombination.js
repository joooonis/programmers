function getCombinateion(n, array) {
  const combinations = [];

  function generateCombination(start, combination) {
    if (combination.length === n) {
      combinations.push(combination);
      return;
    }

    for (let i = start; i < array.length; i++) {
      generateCombination(i + 1, combination.concat(array[i]));
    }
  }

  generateCombination(0, []);

  return combinations;
}

console.log(getCombinateion(2, [1, 2, 3, 4, 5]));
