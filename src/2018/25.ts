import aoc, { abs } from "../lib";

const input = aoc.load((line) => line.split(",").map(Number));

const visited = input.map(() => 0);

const dist = (x: int[], y: int[]) =>
	abs(x[0] - y[0]) + abs(x[1] - y[1]) + abs(x[2] - y[2]) + abs(x[3] - y[3]);

function find(n: int) {
	visited[n] = 1;

	for (let i = 0; i < input.length; i++) {
		if (!visited[i] && dist(input[n], input[i]) <= 3) {
			find(i);
		}
	}
}

let constellations = 0;

for (let i = 1; i < input.length; i++) {
	if (!visited[i]) {
		constellations++;
		find(i);
	}
}

export const day25 = () => constellations;
