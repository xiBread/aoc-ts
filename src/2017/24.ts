import aoc from "../lib";

const input = aoc.load((line) => [...line.split("/").map(Number), 0]);

export function day24() {
	let strongest = 0;
	const bridges: number[] = [];

	(function build(n: number, i: number, current: number) {
		let found = false;

		for (const line of input) {
			if (line[2]) continue;

			if (line[0] === n || line[1] === n) {
				found = true;
				line[2] = 1;

				build(line[+(line[0] === n)], -~i, current + line[0] + line[1]);
				line[2] = 0;
			}
		}

		if (!found) {
			strongest = Math.max(strongest, current);

			while (bridges.length <= i) {
				bridges.push(0);
			}

			bridges[i] = Math.max(bridges[i], current);
		}
	})(0, 0, 0);

	return [strongest, bridges.at(-1)!];
}
