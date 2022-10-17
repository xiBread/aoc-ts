import aoc from "../lib";

const input = aoc.load();

let [frequency, twice] = [0, 0];
const reached = new Set<int>();

while (!twice) {
	for (const value of input.map(Number)) {
		frequency += value;

		if (reached.has(frequency)) {
			twice = frequency;
			break;
		}

		reached.add(frequency);
	}
}

export const day01 = () => [eval(input.join("")), twice];
