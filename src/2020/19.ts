import aoc, { words } from "../lib";

const input = aoc.load((line) => line.split("\n"));

const rules: Dict<str, str[][]> = {};

function validate(msg: str, sequence = ["0"]): int {
	if (!msg.length || !sequence.length) {
		return +(!msg && !sequence.length);
	}

	const rule = rules[sequence[0]];
	const [quote, char] = rule[0][0];

	if (quote === '"') {
		if (char === msg[0]) {
			return validate(msg.slice(1), sequence.slice(1));
		}

		return 0;
	}

	return +rule.some(($) => validate(msg, [...$, ...sequence.slice(1)]));
}

const filter = (): int => input[1].reduce((a, b) => a + validate(b), 0);

export function day19() {
	for (const line of input[0]) {
		const [rule, matches] = line.split(": ");

		rules[rule] = matches.split(" | ").map(words);
	}

	const messages = filter();

	rules[8] = [["42"], ["42", "8"]];
	rules[11] = [
		["42", "31"],
		["42", "11", "31"],
	];

	return [messages, filter()];
}
