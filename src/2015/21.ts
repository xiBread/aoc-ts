import aoc from "../lib";

const input = aoc.load((line) => +line.match(/\d+/)![0]);

export function day21() {
	// const weapons = [8, 10, 25, 40, 74].map((x, i) => [x, i + 4]);
	// const armors = [0, 13, 31, 53, 75, 102].map((x, i) => [x, i]);
	// const rings = [
	// 	[0, 0, 0],
	// 	[0, 0, 0],
	// 	[25, 1, 0],
	// 	[50, 2, 0],
	// 	[100, 3, 0],
	// 	[20, 0, 1],
	// 	[40, 0, 2],
	// 	[80, 0, 3]
	// ];
	// function attack([health, damage, armor]: number[]): boolean {
	// 	const boss = [...input];
	// 	while (boss[0] > 0 && health > 0) {
	// 		if (health > 0) {
	// 			boss[0] -= Math.max(damage - boss[2], 1);
	// 		}
	// 		if (boss[0] > 0) {
	// 			health -= Math.max(boss[1] - armor, 1);
	// 		}
	// 	}
	// 	return health > 0;
	// }
	// const [wins, losses]: number[][] = [[], []];
	// for (const weapon of weapons) {
	// 	for (const armor of armors) {
	// 		for (const [left, right] of rings.combinations(2)) {
	// 			const gold = weapon[0] + armor[0] + left[0] + right[0];
	// 			(attack([100, weapon[1] + left[1] + right[1], armor[1] + left[2] + right[2]]) ? wins : losses).push(
	// 				gold
	// 			);
	// 		}
	// 	}
	// }
	// return [wins.min(), losses.max()];
}
