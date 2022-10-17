import aoc from "../lib";

const input = aoc.load();

export const day01 = () =>
	input.reduce(([a, b], char, i) => [a + (char < ")" ? 1 : -1), a < 0 && !b ? i : b], [0, 0]);
