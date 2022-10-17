import aoc from "../lib";

const input = aoc.load(Number);

function next(current: int[]): int[] {
	const sequence = [];

	for (let i = 0; i < current.length; ) {
		const digit = current[i];
		let count = 1;

		while (i + count < current.length && current[i + count] === digit) {
			count++;
		}

		sequence.push(count, digit);
		i += count;
	}

	return sequence;
}

function iterate(n: int): int {
	let sequence = input;

	for (let i = 0; i < n; i++) {
		sequence = next(sequence);
	}

	return sequence.length;
}

export const day10 = () => [40, 50].map(iterate);
