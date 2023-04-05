function solution(n, info) {
  const lion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function getMostScore(arrow, round = 0) {
    if (round > 9) return 0;
    let score = 0;
    for (let i = round; i < 10; i++) {
      // 어피치가 과녁을 맞추지 못한경우
      if (info[i] === 0) {
        arrow--;
        score += 10 - i;
        lion[i] = 1;
      } else {
        // 어피치가 과녁에 맞힌 화살 개수가 k 인경
        const k = info[i];
        if (arrow < k + 1) continue; // 라이언이 승리할 수 없음
        // 다음 라운드에 부터 화살 k+1 개를 소비해서 이길 수 있는 최대 점수 계산

        if (10 - i > getMostScore(k + 1, i + 1)) {
          score += 10 - i;
          arrow -= k + 1;
          lion[i] = k + 1;
        }
      }
    }
    return score;
  }
  let score = getMostScore(n);
  // console.log(score);
  return lion;
}

function solution(n, info) {
  const lion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let maxScore = 0;
  let visited = Array(10).fill(false);
  let boards = [];

  // find all possible cases
  function dfs(arrow, score) {
    if ((arrow = 0)) {
      maxScore = Math.max(maxScore, score);
      if (maxScore === score) {
        boards = [...visited];
      }
    }

    for (let i = 0; i < 10; i++) {
      if (!visited[i] && arrow >= info[i] + 1) {
        visited[i] = true;
        dfs(arrow - info[i] - 1, score + 10 - i);
        visited[i] = false;
      }
    }
  }

  dfs(n, 0);
  return maxScore;
}

function solution(n, info) {
  let maxScore = 0;
  let visited = Array(11).fill(false);
  let boards = new Set();

  // find all possible cases
  function dfs(arrow, score) {
    if (arrow === 0) {
      let lion = [...visited.map((v, i) => (v ? info[i] + 1 : 0))];
      if (lion.reduce((a, b) => a + b) !== n)
        lion[10] = n - lion.reduce((a, b) => a + b);
      let score = getDifferOfScores(lion, info);
      if (score > maxScore) {
        maxScore = score;
        boards = new Set([JSON.stringify(lion)]);
      } else if (score === maxScore) {
        boards.add(JSON.stringify(lion));
      }
    }

    for (let i = 0; i < 11; i++) {
      if (!visited[i] && arrow >= info[i] + 1) {
        visited[i] = true;
        dfs(arrow - info[i] - 1, score + 10 - i);
        visited[i] = false;
      }
    }
  }
  dfs(n, 0);

  const answers = Array.from(boards);
  answers.sort(sorting);
  console.log(answers);
  return answers.length ? JSON.parse(answers[answers.length - 1]) : [-1];
}

function sorting(boardA, boardB) {
  for (let i = boardA.length - 1; i >= 0; i--) {
    if (boardA[i] > boardB[i]) return 1;
    if (boardA[i] === boardB[i]) continue;
    else {
      return -1;
    }
  }
}

function getDifferOfScores(lion, peach) {
  let lionScore = 0;
  let peachScore = 0;
  for (let i = 0; i < 10; i++) {
    if (lion[i] > peach[i]) {
      lionScore += 10 - i;
    } else if (lion[i] < peach[i]) {
      peachScore += 10 - i;
    }
  }
  return lionScore - peachScore;
}
