import aoc from "../lib";

const input = aoc.load((line) => line.split(": "));

let picoseconds = 0;

const layers = input.map(([depth, range]) => [+depth, +range, +range * 2 - 2]);

while (!layers.every((layer) => (picoseconds + layer[0]) % layer[2])) {
	picoseconds++;
}

export const day13 = () => [
	layers.reduce((a, b) => (b[0] % b[2] ? a : a + b[0] * b[1]), 0),
	picoseconds,
];
