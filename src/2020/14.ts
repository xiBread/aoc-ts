import aoc, { sum } from "../lib";

const input = aoc.load();

export function day14() {
	const [memory, floating]: Record<`${bigint}`, bigint>[] = [{}, {}];

	let [a, b] = [0n, 0n];
	let floats!: Set<bigint>;

	for (const line of input) {
		const [left, value] = line.split("=");

		try {
			for (const float of floats) {
				const address = BigInt(left.slice(4, -2));

				memory[`${address}`] = (BigInt(value) & b) | a;
				floating[`${(address & ~b) | (float >> 1n)}`] = BigInt(value);
			}
		} catch {
			[a, b] = [..."01"].map((bit) => BigInt(parseInt(value.replace(/X/g, bit), 2)));
			floats = new Set([0n]);

			for (const bit of `${value} `) {
				floats = new Set([
					...[...floats].map((n) => 2n * n + BigInt(bit === "1")),
					...(bit === "X" ? [...floats].map((n) => 2n * n + 1n) : []),
				]);
			}
		}
	}

	return [0, 0];
}
