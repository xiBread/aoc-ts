import { maxBy } from "lodash";
import aoc from "../lib";

const input = aoc.load((line) => line.match(/(\d+)/g)!.map(Number));

type Reindeer = [int, [int, int], int, bool, int, int];

const reindeer: Reindeer[] = [];

for (const [x, y, z] of input) {
	reindeer.push([x, [y, z], y, false, 0, 0]);
}

for (let i = 0; i < 2503; i++) {
	for (const deer of reindeer) {
		if (!deer[3]) {
			deer[4] += deer[0];
		}

		if (!--deer[2]) {
			deer[3] = !deer[3];
			deer[2] = deer[1][+deer[3]];
		}
	}

	reindeer.filter((x) => x[4] === maxBy(reindeer, 4)![4]).forEach((x) => x[5]++);
}

export const day14 = () => [4, 5].map((x) => maxBy(reindeer, x)![x]);
