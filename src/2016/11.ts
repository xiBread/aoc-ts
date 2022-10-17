import { sum } from "../lib";

const input = [[8, 12], 2, 0, 0] as const;

const steps = [0, 0];

for (let i = 0; i < 2; i++) {
	const objects = [input[0][i], ...input.slice(1)];

	for (let n = 1; n < 4; ) {
		steps[i] += 2 * sum(objects.slice(0, n++) as int[]) - 3;
	}
}

export const day11 = () => steps;
