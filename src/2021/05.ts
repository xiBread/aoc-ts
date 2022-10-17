import aoc, { Counter, count, partition, product, range, rangeR, split, zip } from "../lib";

const input = aoc.load((line) => line.split(/[^\d]+/).map(Number)).map((xs) => split(xs, 2));

export function day05() {
	const coords = ([[x1, y1], [x2, y2]]: int[][]): int[][] =>
		(x1 === x2 || y1 === y2 ? product : zip)(
			x1 > x2 ? rangeR(x2, x1) : range(x1, x2),
			y1 > y2 ? rangeR(y2, y1) : range(y1, y2)
		);

	const [straight, diagonal] = partition(
		input,
		([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2
	).map((xs) => xs.flatMap(coords).map((x) => x + ""));

	const hv = new Counter(straight);
	const all = new Counter([...straight, ...diagonal]);

	return [hv, all].map((xs) => count(xs, ([, n]) => n > 1));
}
