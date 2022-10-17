import aoc, { min, sum } from "../lib";

const input = aoc.load(Number);

const containers: Dict<int, int> = {};

for (let n = 1; n < 1 << input.length; n++) {
	const liters = input.filter((_, i) => (n & (1 << i)) > 0);

	if (sum(liters) === 150) {
		containers[liters.length] = -~(containers[liters.length] ??= 0);
	}
}

export const day17 = () => [
	sum(Object.values(containers)),
	containers[min(Object.keys(containers).map(Number))],
];
