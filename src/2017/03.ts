import aoc from "../lib";

const [input] = aoc.load(Number);

let [x, y, value] = [0, 0, 0];

const matrix: Dict<str, int> = { "00": 1 };

while (value < input) {
	value = 0;

	for (let a = ~-x; a <= -~x; a++) {
		for (let b = ~-y; b <= -~y; b++) {
			value += matrix[a + "" + b] || 0;
		}
	}

	matrix[x + "" + y] = value;

	if ((x !== y || x >= 0) && Math.abs(x) <= Math.abs(y)) {
		x += y >= 0 ? 1 : -1;
	} else {
		y += x >= 0 ? -1 : 1;
	}
}

const size = -~(input ** 0.5);
const center = -~(size / 2);

export const day03 = () => [~-center + (center - (input % size)), value];
