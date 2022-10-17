import aoc from "../lib";

const [input] = aoc.load();

const safe: number[] = [];
let [traps, mask] = [0n, 0n];

for (const char of input) {
	traps = (traps << 1n) | BigInt(char === "^");
	mask = (mask << 1n) | 1n;
}

function popcnt(n: bigint): number {
	return ((n >> 64n).toString(2) + BigInt.asUintN(64, n).toString(2)).match(/1/g)!.length;
}

for (const rows of [40, 4e5]) {
	let tmp = traps;
	let tiles = popcnt(traps);

	for (let i = 1; i < rows; i++) {
		tiles += popcnt((tmp = ((tmp >> 1n) ^ (tmp << 1n)) & mask));
	}

	safe.push(rows * popcnt(mask) - tiles);
}

export const day18 = () => safe;
