import aoc from "../lib";

const input = aoc.load((line) => line.match(/\d+/g)!.map(Number));

const claims = new Map<str, int[]>();
const overlaps = [new Set<str>(), new Set<int>()] as const;
const ids = new Set<int>();

for (const [id, left, top, width, height] of input) {
	ids.add(id);

	for (let i = top; i < top + height; i++) {
		for (let n = left; n < left + width; n++) {
			const key = `${n},${i}`;

			if (!claims.has(key)) {
				claims.set(key, []);
			}

			const next = () => claims.get(key)!;
			claims.set(key, [...next()!, id]);

			if (next().length >= 2) {
				next().forEach((x) => overlaps[1].add(x));

				overlaps[0].add(key);
			}
		}
	}
}

export const day03 = () => [overlaps[0].size, [...ids].find((x) => !overlaps[1].has(x))!];
