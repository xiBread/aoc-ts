import aoc from "../lib";

const input = aoc.load((line) => line.match(/^([\w ]+) bags .+?n (.*)/) ?? []);

export function day07() {
	const bags: Dict<str, str[][]> = {};

	for (const [, color, contents] of input) {
		const children: str[][] = [];

		if (!contents.includes("no")) {
			for (const child of contents.split(", ")) {
				children.push(/(\d+) ([\w ]+) bag/.exec(child)!.slice(1));
			}
		}

		bags[color] = children;
	}

	const gold = "shiny gold";

	const f = (color: str): bool => color === gold || bags[color].some((next) => f(next[1]));
	const g = (color = gold, total = 1): int =>
		-~bags[color].reduce((n, [a, b]) => n + g(b, +a), 0) * total;

	return [~-Object.keys(bags).map(f).filter(Boolean).length, ~-g()];
}
