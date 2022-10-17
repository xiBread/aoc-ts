import aoc, { ALPHA_LOWER } from "../lib";

const [input] = aoc.load();

function react(polymer: str): int {
	const produced = ["."];

	for (const unit of polymer) {
		const last = produced.at(-1)!;

		if (last !== unit && last.toLowerCase() === unit.toLowerCase()) {
			produced.pop();
		} else {
			produced.push(unit);
		}
	}

	return ~-produced.length;
}

const lengths: int[] = [];

for (const letter of ALPHA_LOWER) {
	const units = [];

	for (const unit of input) {
		if (unit.toLowerCase() !== letter) {
			units.push(unit);
		}
	}

	lengths.push(react(units.join("")));
}

export const day05 = () => [react(input), Math.min(...lengths)];
