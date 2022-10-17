import aoc, { sort, sum } from "../lib";

const input = aoc.load((line) => sort(line.split(/\s+/).map(Number)));

let result = 0;

for (const row of input) {
	for (let i = row.length ** 2; i--; ) {
		const [x, y] = [row[~~(i / row.length)], row[i % row.length]];

		if (x !== y && x % y === 0) {
			result += x / y;
		}
	}
}

export const day02 = () => [sum(input.map((row) => row.slice(-1)[0] - row[0])), result];
