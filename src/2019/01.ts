import aoc, { sum } from "../lib";

const input = aoc.load();

let total = 0;

for (let mass of input as (str | int)[]) {
	while ((mass = ~~(+mass / 3) - 2) > 0) {
		total += mass;
	}
}

export const day01 = () => [sum(input.map((mass) => ~~(+mass / 3) - 2)), total];
