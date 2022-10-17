import aoc, { minmax, sum } from "../lib";

const input = aoc.load(Number);

export function day09() {
	const f = ([x, ...xs]: int[], [y, ...ys]: int[]): int =>
		includes(y, [x, ...xs]) ? f([...xs, y], ys) : y;

	const includes = (n: int, [x, ...xs]: int[]): bool =>
		!x ? false : xs.includes(n - x) || includes(n, xs);

	const invalid = f(input.slice(0, 25), input.slice(25));
	let [lower, upper] = [0, 0];

	for (let n = input.length; n--; ) {
		let total = 0;

		input
			.slice(n)
			.forEach(($, i) => ((total += $) === invalid ? ([lower, upper] = [n, n + i]) : 0));
	}

	return [invalid, sum(minmax(input.slice(lower, -~upper)))];
}
