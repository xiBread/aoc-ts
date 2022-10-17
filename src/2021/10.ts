import aoc, { reduce, sort, withDef } from "../lib";

const input = aoc.load().map((line) => [...line]);

const points: Dict<str, int[]> = {
	")": [3, 1],
	"]": [57, 2],
	"}": [1197, 3],
	">": [25_137, 4],
};

const pairs: Dict<str, str> = {
	"(": ")",
	"[": "]",
	"{": "}",
	"<": ">",
};

const scores: [Dict<str, int>, int[]] = [withDef(() => 0), []];

export function day10() {
	outer: for (const line of input) {
		let cScore = 0;
		const open = [];

		for (const char of line) {
			if (char in pairs) {
				open.push(char);
			} else if (pairs[open.pop()!] !== char) {
				scores[0][char]++;

				continue outer;
			}
		}

		while (open.length) {
			cScore = cScore * 5 + points[pairs[open.pop()!]][1];
		}

		scores[1].push(cScore);
	}

	return [
		reduce(scores[0], (x, [k, v]) => x + points[k][0] * v, 0),
		sort(scores[1])[(scores[1].length / 2) | 0],
	];
}
