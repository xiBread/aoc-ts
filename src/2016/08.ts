import aoc, { ocr, sum } from "../lib";

const input = aoc.load();

const screen: int[][] = [];

for (let height = 6; height--; ) {
	screen.push(new Array(50).fill(0));
}

for (const line of input) {
	const [, pixels, by] = line.split(/[a-z= ]+/).map(Number);
	const [dx, dy] = [-by % 50, -by % 6];

	let tmp: int[] = [];

	({
		r: () => {
			for (let i = by * pixels; i--; ) {
				screen[~~(i / pixels)][i % pixels] = 1;
			}
		},
		w: () => (screen[pixels] = [...screen[pixels].slice(dx), ...screen[pixels].slice(0, dx)]),
		l: () => {
			screen.forEach((row) => tmp.push(row[pixels]));

			tmp = [...tmp.slice(dy), ...tmp.slice(0, dy)];

			screen.forEach((row, i) => (row[pixels] = tmp[i]));
		},
	}[(line[9] || line[0]) as "r"]());
}

export const day08 = () => [sum(screen.map(sum)), ocr(screen)];
