import aoc from "../lib";

const input = aoc.load(Number);

const steps = [0, 0];

for (const n of [0, 1]) {
	const msg = [...input];
	let i = 0;

	while (i >= 0 && i < input.length) {
		steps[n]++;

		i += n && msg[i] >= 3 ? msg[i]-- : msg[i]++;
	}
}

export const day05 = () => steps;
