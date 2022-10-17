import aoc from "../lib";

const input = aoc.load((line) => line.split(" ")).map(([a, b]) => [a[0], +b] as const);

export function day02() {
	const depths = [0, 0];
	let position = 0;
	let aim = 0;

	for (const [step, units] of input) {
		if (step === "f") {
			position += units;
			depths[1] += aim * units;
		} else {
			const direction = units * (step === "u" ? -1 : 1);

			aim += direction;
			depths[0] += direction;
		}
	}

	return depths.map((depth) => depth * position);
}
