import aoc from "../lib";

const input = aoc.load((line) => line.split("x").map(Number));

let [paper, ribbon] = [0, 0];

for (const [l, w, h] of input) {
	const [a, b] = [l, w, h].sort((a, b) => a - b);

	paper += 2 * l * w + 2 * w * h + 2 * h * l + a * b;
	ribbon += a * 2 + b * 2 + l * w * h;
}

export const day02 = () => [paper, ribbon];
