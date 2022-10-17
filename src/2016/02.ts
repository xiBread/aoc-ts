import aoc from "../lib";

const input = aoc.load();

const keypad = {
	U: ["123123456", "121452349678B"],
	D: ["456789789", "36785ABC9ADCD"],
	L: ["112445778", "122355678AABD"],
	R: ["233566899", "134467899BCCD"],
};

function decode(type: int): int | str {
	let current = "5";
	let code = "";

	for (const line of input) {
		for (const direction of line) {
			current = keypad[direction as "U"][type][~-parseInt(current, 16)];
		}

		code += current;
	}

	return +code || code;
}

export const day02 = () => [0, 1].map(decode);
