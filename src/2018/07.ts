import { isEmpty, sortBy } from "lodash";
import aoc from "../lib";

const input = aoc.load((line) => line.match(/(\b[A-Z]\b)/g)!);

export function day07() {
	let order = "";
	const instructions: Record<string, [string, Record<string, boolean>]> = {};

	for (const [x, y] of input) {
		instructions[x] ??= [x, {}];
		(instructions[y] ??= [y, {}])[1][x] = true;
	}

	while (true) {
		const next = sortBy(
			Object.values(instructions).filter(([, x]) => isEmpty(x)),
			"[0]"
		);

		if (!next[0]) break;

		const [step] = next[0];
		order += step;

		delete instructions[step];
		Object.values(instructions).forEach(([, x]) => delete x[step]);
	}

	return [order];
}
