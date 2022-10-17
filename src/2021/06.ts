import aoc, { sum } from "../lib";

const input = aoc.load(Number);

function cycle(days: int): int {
	const fish = input.reduce((xs, n) => ({ ...xs, [n]: xs[n] + 1 }), new Array(9).fill(0));

	for (let i = 0; i < days; i++) {
		fish[(7 + i) % 9] += fish[i % 9];
	}

	return sum(Object.values(fish));
}

export const day06 = () => [80, 256].map(cycle);
