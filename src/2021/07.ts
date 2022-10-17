import aoc, { max, min, range, sum } from "../lib";

const input = aoc.load(Number);

const burners = [(n: int) => n, (n: int) => (n * -~n) / 2];

export const day07 = () =>
	burners.map((f) =>
		min(range(0, max(input)).map((n) => sum(input.map((i) => Math.abs(i - n)).map(f))))
	);
