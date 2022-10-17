import aoc from "../lib";

const input = aoc.load(Number);

export function day15() {
	let a = 0;
	let b = input.at(-1)!;

	const spoken = new Array<int>(3e7);

	input.forEach((number, i) => (spoken[number] = i + 1));

	for (let i = input.at(-2)!; i < 3e7; i++) {
		if (i === 2020) a = b;

		const previous = spoken[b];
		spoken[b] = i;

		b = previous ? i - previous : 0;
	}

	return [a, b];
}
