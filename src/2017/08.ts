import aoc from "../lib";

const input = aoc.load();

export function day08() {
	const registers: Record<string, number> = {};
	let highest = 0;

	for (const line of input) {
		/(\w+) (\w+) (-?\d+).+? (\w+) (.+) (-?\d+)/.exec(line);
		registers[$4] ??= 0;

		if (eval(registers[$4] + $5 + $6)) {
			registers[$1] = (registers[$1] ??= 0) + ($2 === "dec" ? -1 : 1) * +$3;
		}

		highest = Math.max(highest, Object.values(registers).max());
	}

	return [Object.values(registers).max(), highest];
}
