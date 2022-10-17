import aoc, { intersection } from "../lib";

const input = aoc.load((line) => line.split("\n").map(($) => [...$]));

export const day06 = () =>
	input.reduce(
		([a, b], xs) => [a + new Set(xs.flat()).size, b + xs.reduce(intersection).length],
		[0, 0]
	);
