import { range, sortBy } from "lodash";
import aoc from "../lib";

const input = aoc.load(Number);

export function day08() {
	const layers: number[][] = [];
	const size = 25 * 6;

	for (let i = 0; i < input.length / size; i++) {
		layers.push(input.slice(i * size, -~i * size));
	}

	const appearances = [];

	for (const layer of layers) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		appearances.push(layer.reduce<Dict<int, int>>((a, b) => ({ ...a, [b]: -~(a[b] ?? 0) }), {}));
	}

	const [digits] = sortBy(appearances, [0]);
	const image = layers[0];

	for (let i = 1; i < layers.length; ) {
		range(layers[i++].length).forEach((x) => (image[x] ^ 2 ? 0 : (image[x] = layers[i][x])));
	}

	const message: string[] = [];

	for (const i of range(6)) {
		message.push(range(25).reduce((a, b) => (a += image[b + i * 25] ? "█" : " "), ""));
	}

	return [digits[1] * digits[2], ...message];
}
