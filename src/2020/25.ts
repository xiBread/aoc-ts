import aoc from "../lib";

const input = aoc.load(Number);

export function day25() {
	let key = 1;

	for (let x = 20_201_227, y = 1; y !== input[0]; ) {
		y = (y * 7) % x;
		key = (key * input[1]) % x;
	}

	return key;
}
