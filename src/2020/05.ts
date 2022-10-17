import aoc, { dec, tr } from "../lib";

const input = aoc.load((line) => dec(tr(line, "BRFL", "1100")));

export function day05() {
	const max = Math.max(...input);
	const seats = [...new Array(max).keys()];

	return [max, seats.filter((id) => !input.includes(id)).pop()];
}
