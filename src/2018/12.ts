import { zip } from "lodash";
import aoc from "../lib";

const input = aoc.load();

export function day12() {
	// const initial = [...input[0].slice(15)].map((x) => x === '#');
	// const notes: Record<string, boolean> = {};
	// for (const line of input.slice(2)) {
	// 	const [llcrr, n] = line.split(' => ');
	// 	notes[[...llcrr].map((x) => x === '#') + ''] = n === '#';
	// }
	// const sums: Record<number, number> = {};
	// let left = 0;
	// const diffs = new Array(10).fill(null);
	// let plants = initial;
	// sums[0] = plants.reduce((x, y, i) => x + (y ? i : 0), 0);
	// let generations = 0;
	// for (let i = 1; true; i++) {
	// 	plants = [!1, !1, !1, !1, ...plants, !1, !1, !1, !1].eachCons(5).map((x) => notes[x + '']);
	// 	left -= 2;
	// 	const rest = Array.from({ length: plants.length }, (_, i) => i + left);
	// 	sums[i] = zip(plants, rest).reduce((x, [y, i]) => x + (y! ? i! : 0), 0);
	// 	diffs.shift();
	// 	diffs.push(sums[i] - sums[~-i]);
	// 	if (new Set(diffs).size === 1) {
	// 		generations = i;
	// 		break;
	// 	}
	// }
	// return [sums[20], sums[generations] + diffs[0] * (5e10 - generations)];
}
