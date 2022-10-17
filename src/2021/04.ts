import aoc, { cut, lines, partition, sum, words } from "../lib";

const input = aoc.load();

export function day04() {
	const order = input[0].split(",").map(Number);
	const boards = input.slice(1).map((xs) => lines(xs).map((ys) => words(ys).map(Number)));

	const scores = order.reduce<[int[][][], int[]]>(
		(a, b) => {
			const [won, stale] = partition(
				a[0].map((xs) => xs.map((ys) => ys.map((n) => (n !== b ? n : -1)))),
				(xs) => [xs, cut(xs)].map((m) => m.some((ys) => ys.every((n) => n < 0))).some(Boolean)
			);

			return [stale, [...a[1], ...won.map((xs) => b * sum(xs.flat().filter((n) => n > -1)))]];
		},
		[boards, []]
	)[1];

	return [scores[0], scores.pop()];
}
