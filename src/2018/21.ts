import aoc from "../lib";

const [input] = /\d{2,}/.exec(aoc.load().slice(8, 9)[0])!;

let [first, second] = [0, 0];
let value = +input;

const seen = new Set<int>();
const ints = new Set<int>();

let next = 65536;

while (!seen.has(next)) {
	value = (((value += next % 256) % 2 ** 24) * 65899) % 2 ** 24;

	if (next < 256) {
		if (!ints.size) first = value;
		ints.add(value);

		next = value | (2 ** 16);
		seen.add(next);

		value = +input;
		continue;
	}

	next /= 256;
}

seen.clear();

function run(x: number): number {
	value = +input + ((x |= 0x10000) & 0xff);

	value *= 65899;
	value += (x >> 8) & 0xff;

	value *= 65899;
	value += (x >> 16) & 0xff;

	value &= 0xffffff;
	value *= 65899;

	return (value &= 0xffffff);
}

let number = run(0);

while (true) {
	const next = run(number);

	if (seen.has(next)) {
		second = number;
		break;
	}

	seen.add(number);
	number = next;
}

export const day21 = () => [first, second];
