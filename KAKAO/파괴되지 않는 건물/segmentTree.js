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
