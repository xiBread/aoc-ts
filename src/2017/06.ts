import aoc from "../lib";

const input = aoc.load(Number);

const seen: Dict<str, int> = {};

let config = "";
let cycles = 0;

while (!(config in seen)) {
	seen[config] = cycles++;

	let value = Math.max(...input);
	let i = input.findIndex((blocks) => blocks === value);

	input[i] = 0;

	while (value--) {
		input[(i = -~i % input.length)]++;
	}

	config = input.reduce((a, b) => a + b, "");
}

export const day06 = () => [cycles, cycles - seen[config]];
