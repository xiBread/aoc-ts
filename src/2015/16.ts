import aoc from "../lib";

const input = aoc.load((line) => line.split(/:? /).slice(1).join(" "));

const tape = {
	children: 3,
	cats: 7,
	samoyeds: 2,
	pomeranians: 3,
	akitas: 0,
	vizslas: 0,
	goldfish: 5,
	trees: 3,
	cars: 2,
	perfumes: 1,
};

const [a, b]: str[][] = [[], []];

for (const [item, i] of Object.entries(tape)) {
	a.push(`${item} [^${i}]`);

	if (/^(?:(?=.+ts|tr).+(s)|.o)/.test(item)) {
		b.push(`${item} ${RegExp.$1 ? `[0-${i}]` : `([${i}-9]|10)`}`);
		continue;
	}

	b.push(`${item} [^${i}]`);
}

export const day16 = () =>
	[a, b]
		.flatMap(($) => input.filter((line) => !new RegExp($.join("|")).test(line)))
		.map(($) => +$.split(" ")[0]);
