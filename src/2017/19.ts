import aoc from "../lib";

const input = aoc.load();

let [letters, steps] = ["", 0];

const add = (x: int[], y: int[]) => [x[0] + y[0], x[1] + y[1]];

let [x, y] = [0, input[0].indexOf("|")];
let direction = [1, 0];

while (input[x][y] !== " " && ++steps) {
	[x, y] = add([x, y], direction);

	const line = input[x][y];

	if (/[A-Z]/.test(line)) {
		letters += line;
	}

	if (line == "+") {
		const left = [direction[1], -direction[0]];
		const [a, b] = add([x, y], left);

		direction = input[a][b] !== " " ? left : [-direction[1], direction[0]];
	}
}

export const day19 = () => [letters, steps];
