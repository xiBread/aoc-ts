import { range, zip } from "lodash";
import aoc, { minmax, ocr } from "../lib";

const input = aoc.load((line) => line.match(/-?\d+/g)!.map(Number));

const rows: int[][] = [];
let seconds = 0;

for (const i of range(10_100)) {
	const points = input.map((line) => [line[0] + i * line[2], line[1] + i * line[3]]);
	const [min, max] = zip(...(zip(...points) as number[][]).map(minmax));

	const size = [max[0]! - -~min[0]!, -~max[1]! - min[1]!];

	if (size[1] <= 10) {
		seconds = i;

		const local = points.map((x) => x.map((y, i) => y - min[i]!));
		const message = range(size[1]).map(() => range(size[0]).map(() => 0));

		for (const point of local) {
			message[point[1]][point[0]] = 1;
		}

		for (const row of message) {
			rows.push(row);
		}
	}
}

export const day10 = () => [ocr(rows), seconds];
