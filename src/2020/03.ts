import aoc from "../lib";

const input = aoc.load();

const slopes = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2],
];

export function day03() {
	const trees: int[] = [];

	for (const [x, y] of slopes) {
		let encountered = 0;

		for (let i = 1; i < input.length / y; i++) {
			if (input[i * y]?.[(i * x) % input[0].length] === "#") {
				encountered++;
			}
		}

		trees.push(encountered);
	}

	return [trees[1], trees.reduce((a, b) => a * b)];
}
