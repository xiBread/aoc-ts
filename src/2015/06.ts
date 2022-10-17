import aoc, { sum } from "../lib";

const input = aoc.load((line) => line.split(/\W/));

const grid = new Array<number>(1e6).fill(0);
const copy = [...grid];

for (const line of input) {
	const instruction = line.at(-6)!;
	const [x1, y1, , x2, y2] = line.slice(-5).map(Number);

	for (let x = x1; x <= x2; x++) {
		for (let y = y1; y <= y2; y++) {
			const point = y * 1e3 + x;

			if (instruction === "on") {
				grid[point] = 1;
				copy[point]++;
			} else if (instruction === "off") {
				grid[point] = 0;
				copy[point] = Math.max(0, ~-copy[point]);
			} else {
				grid[point] ^= 1;
				copy[point] += 2;
			}
		}
	}
}

export const day06 = () => [grid, copy].map(sum);
