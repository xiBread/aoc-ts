import aoc from "../lib";

const input = aoc.load((line) => line.trim());

let cols = 0;

const possible = ([a, b, c]: int[]): int => +(a + b > c);

const triangles = input.map((line) => line.split(/ +/).map(Number));
const sorted = triangles.map((sides) => [...sides].sort((a, b) => a - b));

for (let n = 0; n < 3; n++) {
	for (let i = 0; i < triangles.length; ) {
		const side = () => triangles[i++][n];

		cols += possible([side(), side(), side()].sort((a, b) => a - b));
	}
}

export const day03 = () => [sorted.reduce((a, b) => a + possible(b), 0), cols];
