import aoc, { words } from "../lib";

const input = aoc.load((line) => line.split("\n").flatMap(words));

const rules: Dict<str, (val: str) => bool> = {
	byr: (val) => /19[^01]\d|200[0-2]/.test(val),
	iyr: (val) => /20(1\d|20)/.test(val),
	eyr: (val) => /20(2\d|30)/.test(val),
	hgt: (val) => /^((59|6\d|7[0-6])in|(1[5-8]\d|19[0-3])cm)/.test(val),
	hcl: (val) => /#[a-f\d]{6}/.test(val),
	ecl: (val) => /amb|blu|brn|gry|grn|hzl|oth/.test(val),
	pid: (val) => /^\d{9}$/.test(val),
};

export function day04() {
	let present = 0;
	let valid = 0;

	for (const fields of input) {
		const filtered = fields.filter((field) => !field.startsWith("cid"));
		let passed = 0;

		if (filtered.length > 6) {
			present++;

			for (const [key, value] of filtered.map(($) => $.split(":"))) {
				passed += +rules[key](value);
			}

			valid += +(passed === 7);
		}
	}

	return [present, valid];
}
