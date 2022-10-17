import aoc, { sort, sum, zip } from "../lib";

const input = sort(aoc.load(Number));

export function day10() {
	const x: Dict<int, int> = { 1: 0, 3: 0 };
	const y: Dict<int, int> = { 0: 1 };

	const adapters = [0, ...input, Math.max(...input) + 3];

	for (const [a, b] of zip(adapters.slice(1), adapters)) {
		x[a - b]++;
		y[a] = sum([3, 2, 1, 0].map((i) => y[a - i] || 0));
	}

	return [x[1] * x[3], y[adapters.at(-1)!]];
}
