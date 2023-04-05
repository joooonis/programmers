function solution(board, skill) {
	const row = board.length;
	const col = board[0].length;

	for (let [type, r1, c1, r2, c2, degree] of skill) {
		if (type === 1) {
			for (let i = r1; i <= r2; i++) {
				for (let j = c1; j <= c2; j++) {
					board[i][j] -= degree;
				}
			}
		}
		if (type === 2) {
			for (let i = r1; i <= r2; i++) {
				for (let j = c1; j <= c2; j++) {
					board[i][j] += degree;
				}
			}
		}
	}

	return board.flat().filter((v) => v > 0).length;
}

class segmentTree {
	constructor(arr) {
		this.arr = arr;
		this.tree = Array.from({ length: arr.length * 4 }, () => 0);
		this.init(0, arr.length - 1, 1);
	}

	init(start, end, node) {
		if (start === end) return (this.tree[node] = this.arr[start]);
		const mid = Math.floor((start + end) / 2);
		return (this.tree[node] =
			this.init(start, mid, node * 2) + this.init(mid + 1, end, node * 2 + 1));
	}

	update(start, end, node, index, diff) {
		if (index < start || index > end) return;
		this.tree[node] += diff;
		if (start === end) return;
		const mid = Math.floor((start + end) / 2);
		this.update(start, mid, node * 2, index, diff);
		this.update(mid + 1, end, node * 2 + 1, index, diff);
	}

	query(start, end, node, left, right) {
		if (left > end || right < start) return 0;
		if (left <= start && end <= right) return this.tree[node];
		const mid = Math.floor((start + end) / 2);
		return (
			this.query(start, mid, node * 2, left, right) +
			this.query(mid + 1, end, node * 2 + 1, left, right)
		);
	}
}

function solution(board, skill) {
	const row = board.length;
	const col = board[0].length;
	const tree = new segmentTree(board.flat());
	for (let [type, r1, c1, r2, c2, degree] of skill) {
		if (type === 1) {
			for (let i = r1; i <= r2; i++) {
				for (let j = c1; j <= c2; j++) {
					tree.update(0, row * col - 1, 1, i * col + j, -degree);
				}
			}
		}
		if (type === 2) {
			for (let i = r1; i <= r2; i++) {
				for (let j = c1; j <= c2; j++) {
					tree.update(0, row * col - 1, 1, i * col + j, degree);
				}
			}
		}
	}

	// return the num of positive values of the board
	let anwser = 0;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (tree.query(0, row * col - 1, 1, i * col + j, i * col + j) > 0)
				anwser++;
		}
	}
}

function effect(board, skill) {
	const row = board.length;
	const col = board[0].length;
	const [type, r1, c1, r2, c2, degree] = skill;
	let damage = degree;
	if (type == 1) damage = damage * -1;
	board[r1][c1] += damage;
	if (c2 + 1 < col) board[r1][c2 + 1] -= damage;
	if (r2 + 1 < row) board[r2 + 1][c1] -= damage;
	if (c2 + 1 < col && r2 + 1 < row) board[r2 + 1][c2 + 1] += damage;
}

function solution(board, skill) {
	var answer = 0;
	let aBoard = Array(board.length)
		.fill(0)
		.map((_) => Array(board[0].length).fill(0));

	// skill 하나당 최대 4번의 연산이 필요.
	for (let s of skill) {
		effect(aBoard, s);
	}

	// 행 누적합 O(N^2)
	for (let i = 0; i < aBoard.length; i++) {
		for (let j = 1; j < aBoard.length; j++) {
			aBoard[i][j] += aBoard[i][j - 1];
		}
	}

	// 열 누적합 O(N^2)
	for (let i = 0; i < aBoard.length; i++) {
		for (let j = 1; j < aBoard.length; j++) {
			aBoard[j][i] += aBoard[j - 1][i];
		}
	}

	// board에 누적합 적용 O(N^2)
	for (let i = 0; i < aBoard.length; i++) {
		for (let j = 0; j < aBoard.length; j++) {
			board[i][j] += aBoard[i][j];
		}
	}

	// board에 남은 양 계산 O(N^2)
	for (let i in board) {
		for (let j in board[i]) {
			if (board[i][j] > 0) answer += 1;
		}
	}
	return answer;
}
