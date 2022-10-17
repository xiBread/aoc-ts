import aoc from "../lib";

const input = new Set(aoc.load(Number));

function find(n: int, target = 2020): int[] | undefined {
	if (n === 1) {
		return input.has(target) ? [target] : undefined;
	}

	for (const entry of input) {
		const found = find(n - 1, target - entry);

		if (found) {
			return [...found, entry];
		}
	}
}

export const day01 = () => [2, 3].map((n) => find(n)!.reduce((a, b) => a * b));
