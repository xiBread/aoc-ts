import aoc, { sum, windows } from "../lib";

const input = aoc.load(Number);

function find(xs: int[]): int {
	let increases = 0;

	for (let i = 0; i < xs.length; i++) {
		if (xs[i] > xs[i - 1]) increases++;
	}

	return increases;
}

export const day01 = () => [input, windows(input, 3).map(sum)].map(find);
