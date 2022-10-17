import aoc from "../lib";

const input = aoc.load();

export function day03() {
	return [1, 2].map(($) => {
		const houses: Dict<str, int> = { "0,0": 2 };
		const positions = [
			[0, 0],
			[0, 0],
		];

		for (let i = 0; i < input.length; i++) {
			const house = positions[i % $];

			house[+/\^|v/.test(input[i])] += /\^|>/.test(input[i]) ? 1 : -1;

			-~(houses[house + ""] ??= 0);
		}

		return Object.keys(houses).length;
	});
}
