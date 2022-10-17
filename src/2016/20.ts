import aoc from "../lib";

const input = aoc.load((line) => line.split("-").map(Number)).sort(([a], [b]) => a - b);

let [lowest, allowed] = [0, 0];

let previous = -1;

for (const [a, b] of input) {
	const valid = Math.max(0, ~-(a - previous));

	allowed += valid;
	lowest = !lowest && valid ? -~previous : lowest;

	previous = Math.max(previous, b);
}

export const day20 = () => [lowest, allowed];
