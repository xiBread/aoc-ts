import aoc, { ord } from "../lib";

const input = aoc.load(Number);

export function day10() {
	function build(list: number[], lengths: number[], current: number, skip: number) {
		for (const length of lengths) {
			const reversed = Array.from(
				{ length },
				(_, i) => list[(i + current) % list.length]
			).reverse();

			for (let i = 0; i < reversed.length; ) {
				list[(i + current) % list.length] = reversed[i++];
			}

			current += length + skip++;
		}

		return [list, current, skip] as const;
	}

	const lengths = [...input.join(",")].map(ord).concat(17, 31, 73, 47, 23);

	let list = [...new Array(256).keys()];
	let [skip, current] = [0, 0];

	for (let i = 0; i < 64; i++) {
		[list, current, skip] = build(list, lengths, current, skip);
	}

	const dense: number[] = [];

	for (let i = 0; i < list.length; ) {
		dense.push(list.slice(i, (i += 16)).inject("^"));
	}

	const hash = dense.map((x) => {
		const hex = x.toString(16);

		return hex.length === 1 ? 0 + hex : hex;
	});

	const [[x, y]] = build([...new Array(256).keys()], input, 0, 0);

	return [x * y, hash.join("")];
}
