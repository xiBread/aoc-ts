import aoc, { count } from "../lib";

const input = aoc.load((line) => line.split(">")[1].split(", ").map(Number));

const visited: int[] = [];

function reach(i: int): number {
	if (visited.includes(i)) return 0;
	visited.push(i);

	return input[i].reduce((a, b) => a + reach(b), 1);
}

const programs = input.map((_, i) => reach(i));

export const day12 = () => [programs[0], count(programs, (n) => n > 0)];
