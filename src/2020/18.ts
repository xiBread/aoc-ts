import aoc from "../lib";

const input = aoc.load((line) => line.replace(/\d/g, "($&)").replace(/\+/g, "['+']"));

export function day18() {
	for (const operator of "+*") {
		Object.defineProperty(Number.prototype, operator, {
			value: Function("n", `return this ${operator} n`),
		});
	}

	return [input.map((line) => line.replace(/\*/g, "['*']")), input].map(($) =>
		$.map(eval).reduce((a, b) => a + b)
	);
}
