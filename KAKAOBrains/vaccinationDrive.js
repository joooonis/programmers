/*
 * Complete the 'findMinimumTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. UNWEIGHTED_INTEGER_GRAPH centre
 *  2. INTEGER_ARRAY status
 */

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i].
 *
 */

function findMinimumTime(centreNodes, centreFrom, centreTo, status) {
  let suplus = [];
  for (let i = 0; i < status.length; i++) {
    if (status[i] === 3) suplus.push(i + 1);
  }

  vaccinationDrive = {};
  for (let s of suplus) {
    vaccinationDrive[s] = Infinity;
  }

  graph = {};
  for (let i = 0; i < centreFrom.length; i++) {
    if (!graph[centreFrom[i]]) {
      graph[centreFrom[i]] = [];
    }
    if (!graph[centreTo[i]]) {
      graph[centreTo[i]] = [];
    }
    graph[centreFrom[i]].push(centreTo[i]);
    graph[centreTo[i]].push(centreFrom[i]);
  }

  const bfs = (start) => {
    let queue = [];
    let targets = Object.keys(vaccinationDrive);
    queue.push([start, 0]);
    visited[start] = true;
    while (queue.length) {
      let [current, time] = queue.shift();
      if (status[current - 1] === 3) {
        vaccinationDrive[current] = Math.min(vaccinationDrive[current], time);
        targets = targets.filter((t) => t !== current);
      }
      for (let i = 0; i < graph[current].length; i++) {
        if (!visited[graph[current][i]]) {
          queue.push([graph[current][i], time + 1]);
          visited[graph[current][i]] = true;
        }
      }
      // if all vaccinated has been visited break
      if (targets.length === 0) break;
    }
  };

  for (let i = 0; i < suplus.length; i++) {
    bfs(suplus[i]);
  }
  return answer;
}
