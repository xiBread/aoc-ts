import aoc from "../lib";

const input = aoc.load().sort();

export function day04() {
	const records: Record<string, number[]> = {};

	let guard!: string, start!: number, end: number;

	for (const line of input) {
		if (line[25] === "#") {
			guard = line.split(" ")[3];
		} else if (line[25] === "a") {
			start = +line.slice(15, 17);
		} else {
			end = +line.slice(15, 17);

			for (const i of start.to(end)) {
				(records[guard] ??= new Array(60).fill(0))[i]++;
			}
		}
	}

	return (["sum", "max"] as const)
		.map((k) => Object.keys(records).sort((a, b) => -records[a][k]() - -records[b][k]())[0])
		.map((guard) => +guard.slice(1) * records[guard].indexOf(records[guard].max()));
}
