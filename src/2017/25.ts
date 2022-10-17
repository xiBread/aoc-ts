import aoc, { count } from "../lib";

const [input] = aoc.load()[1].split(" ").slice(-2);

const blueprints = {
	a: [
		[1, 1, "b"],
		[0, -1, "c"],
	],
	b: [
		[1, -1, "a"],
		[1, -1, "d"],
	],
	c: [
		[1, 1, "d"],
		[0, 1, "c"],
	],
	d: [
		[0, -1, "b"],
		[0, 1, "e"],
	],
	e: [
		[1, 1, "c"],
		[1, -1, "f"],
	],
	f: [
		[1, -1, "e"],
		[1, 1, "a"],
	],
} as const;

const tape: Dict<str, int> = {};

let current = "a";
let cursor = 0;

for (let i = +input; i--; ) {
	const [value, move, state] = blueprints[current as "a"][+!!tape[cursor]];
	tape[cursor] = value;

	cursor += move;
	current = state;
}

export const day25 = () => count(Object.values(tape), Boolean);
