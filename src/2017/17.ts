import aoc from "../lib";

const [input] = aoc.load(Number);

const buffer = [0];
let [x, y] = [0, 0];

for (let i = 0; i < 2017; i++) {
	x = -~((x + input) % buffer.length);
	buffer.splice(x, 0, -~i);
}

let value = 1;

for (let i = 0; i < 5e7; i++) {
	if ((y = -~((y + input) % -~i)) === 1) {
		value = -~i;
	}
}

export const day17 = () => [buffer[-~x], value];
