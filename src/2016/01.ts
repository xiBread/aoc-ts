import aoc, { sum } from "../lib";

const input = aoc.load((line) => /([RL])(\d+)/.exec(line)!);

const position = [0, 0];
const visited = new Set<string>();

let twice = 0;

for (let i = 1, n = 0; n < input.length; n++) {
	i += ~input[n][1].charCodeAt(0) & 3;

	for (let $ = +input[n][2]; $--; ) {
		position[i & 1] += ~-(i & 2);

		if (!twice && visited.has(`${position}`)) {
			twice = sum(position.map(Math.abs));
		}

		visited.add(`${position}`);
	}
}

export const day01 = () => [sum(position.map(Math.abs)), twice];
