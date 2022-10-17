import aoc from "../lib";

const input = aoc.load();

export function day02() {
	const checksum = [2, 3]
		.map(
			(n) =>
				input
					.map((line) => [...line].countBy())
					.filter((x) => +Object.values(x).includes(n)).length
		)
		.inject("*");

	const patterns = new Set<string>();
	let common = "";

	for (const line of input) {
		for (const i of (0).to(line.length)) {
			const pattern = `${line.slice(0, i)}.${line.slice(-~i)}`;

			if (patterns.has(pattern)) {
				common = pattern.replace(".", "");
				break;
			}

			patterns.add(pattern);
		}
	}

	return [checksum, common];
}
