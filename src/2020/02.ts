import aoc from "../lib";

const input = aoc.load((line) => line.split(/[- ]/));

export function day02() {
	const valid = [0, 0];

	for (const [x, y, [letter], password] of input) {
		const min = +x;
		const max = +y;

		const occurances = [...password].filter((char) => char === letter).length;

		const first = +(password[min - 1] === letter);
		const last = +(password[max - 1] === letter);

		valid[0] += +(min <= occurances && occurances <= max);
		valid[1] += first ^ last;
	}

	return valid;
}
