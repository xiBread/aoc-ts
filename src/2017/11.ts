import aoc, { abs, sum } from "../lib";

const input = aoc.load();

let [x, y, z] = [0, 0, 0];
const distances: int[] = [];

for (const direction of input) {
	({
		n: () => [y++, z--],
		s: () => [y--, z++],
		ne: () => [x++, z--],
		sw: () => [x--, z++],
		nw: () => [x--, y++],
		se: () => [x++, y--],
	}[direction as "n"]());

	distances.push((abs(x) + abs(y) + abs(z)) / 2);
}

export const day11 = () => [sum([x, y, z].map(abs)) / 2, Math.max(...distances)];
