import aoc from "../lib";

const input = aoc.load();

export const day08 = () =>
	input.reduce(
		([a, b], str) => [a + str.length - eval(str).length, b + str.match(/[\\"]/g)!.length + 2],
		[0, 0]
	);
