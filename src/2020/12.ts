import aoc, { rotate, sum } from "../lib";

const input = aoc.load();

let facing = [..."ESWN"];
let [x, y, wp] = [
	[0, 0],
	[0, 0],
	[10, 1],
];

const directions: Dict<str, int[]> = {
	N: [0, 1],
	E: [1, 0],
	S: [0, -1],
	W: [-1, 0],
};

export function day12() {
	for (const line of input) {
		const [dir, units] = [line[0], +line.slice(1)];
		const degrees = Math.trunc(units / 90);

		if (/L|R/.test(dir)) {
			facing = rotate(facing, dir === "R" ? -degrees : degrees);

			for (let i = 0; i++ < degrees; ) {
				wp = [-wp[1], wp[0]].map((i) => (dir === "R" ? -i : i));
			}
		}

		if (dir === "F") {
			x = x.map((n, i) => n + directions[facing[0]][i] * units);
			y = y.map((n, i) => n + wp[i] * units);
		}

		if (facing.includes(dir)) {
			[x, wp] = [x, wp].map((x) => x.map((n, i) => n + directions[dir][i] * units));
		}
	}

	return [x.map(Math.abs), y].map(sum);
}
