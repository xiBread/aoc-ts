import aoc, { rotate } from "../lib";

const input = aoc.load();

const program = [..."abcdefghijklmnop"];
const dances: str[] = [];

const moves: Dict<str, any> = {
	s: (n: int) => rotate(program, n),
	x: (a: int, b: int) => ([program[a], program[b]] = [program[b], program[a]]),
	p: (a: str, b: str) => moves.x(program.indexOf(a), program.indexOf(b)),
};

do {
	dances.push(program.join(""));
	input.forEach((x) => moves[x[0]](...x.slice(1).split("/")));
} while (program.join("") !== "abcdefghijklmnop");

export const day16 = () => [dances[1], dances[1e9 % dances.length]];
