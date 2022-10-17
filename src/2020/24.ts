import aoc, { range, sum } from "../lib";

const input = aoc.load();

let floor = range(0, 141).map(() => range(0, 141).map(() => 0));

for (let line of input) {
	let [x, y] = [70, 70];

	while (line) {
		if (line[0] === "e") {
			line = line.slice(1);
			x++;
		} else if (line[0] == "w") {
			line = line.slice(1);
			x--;
		} else if (line.slice(0, 2) === "ne") {
			line = line.slice(2);
			x++;
			y--;
		} else if (line.slice(0, 2) === "nw") {
			line = line.slice(2);
			y--;
		} else if (line.slice(0, 2) === "se") {
			line = line.slice(2);
			y++;
		} else if (line.slice(0, 2) === "sw") {
			line = line.slice(2);
			x--;
			y++;
		}
	}

	floor[x][y] = +!floor[x][y];
}

const a = sum(floor.flat());

for (const _ of range(0, 100)) {
	const floorCopy = structuredClone(floor);

	for (const x of range(3, 140)) {
		for (const y of range(3, 140)) {
			const adjacent =
				floor[x + 1][y] +
				floor[x + 1][y - 1] +
				floor[x - 1][y] +
				floor[x - 1][y + 1] +
				floor[x][y - 1] +
				floor[x][y + 1];

			if (floor[x][y]) {
				if (adjacent === 0 || adjacent > 2) {
					floorCopy[x][y] = 0;
				}
			} else {
				if (adjacent === 2) {
					floorCopy[x][y] = 1;
				}
			}
		}
	}

	floor = floorCopy;
}

export const day24 = () => [a, sum(floor.flat())];
