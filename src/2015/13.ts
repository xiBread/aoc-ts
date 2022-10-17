import aoc, { max, permutations, sum, windows } from "../lib";

const input = aoc.load((line) => /(\w+).+(\w) (\d+).+?(\w+)\./.exec(line)!);

export function day13() {
	const guests: Dict<str, Dict<str, int>> = {};

	for (const [, x, type, units, y] of input) {
		(guests[x] ??= {})[y] = +units * { e: -1, n: 1 }[type as "e"];
	}

	function optimize() {
		return permutations(Object.keys(guests)).map((x) =>
			sum(windows(x.concat(x[0]), 2).map(([a, b]) => guests[a][b] + guests[b][a]))
		);
	}

	const first = optimize();

	for (const guest of Object.keys(guests)) {
		guests[guest]["i"] = (guests["i"] ??= {})[guest] = 0;
	}

	return [max(first), max(optimize())];
}
