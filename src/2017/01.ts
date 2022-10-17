import aoc from "../lib";

const [input] = aoc.load();

export const day01 = () => [
	(input + input[0]).match(/(.)\1+/g)!.reduce((a, b) => +b[0] * ~-b.length + a, 0),
	2 * [...input].reduce((a, b, i, n) => a + (n.slice(1019)[i] === b ? +b : 0), 0),
];
