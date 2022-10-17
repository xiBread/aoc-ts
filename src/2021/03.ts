import aoc, { Counter, dec } from "../lib";

const input = aoc.load((line) => line.split("").map(Number));

export function day03() {
	let [gam, eps] = ["", ""];

	for (let i = 0; i < input[0].length; i++) {
		const common = new Counter(input.map((line) => line[i])).mostCommon();

		gam += common[0][0];
		eps += common.at(-1)![0];
	}

	const [generator, scrubbing] = [input, input].map((n, s) => {
		for (let i = 0; i < n[0].length && n.length > 1; i++) {
			n = n.filter((b) => b[i] === (n.map((c) => c[i]).sort()[n.length >> 1] ^ s));
		}

		return dec(n[0].join(""));
	});

	return [dec(gam) * dec(eps), generator * scrubbing];
}
