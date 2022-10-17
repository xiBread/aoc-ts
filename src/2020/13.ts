import aoc from "../lib";

const input = aoc.load();

let [wait, bus, earliest, i, offset] = [+input[0], 1, 1, 1, 1];

export function day13() {
	for (const id of input[1].split(",").map(Number)) {
		if (id) {
			while ((earliest + i) % id) {
				earliest += offset;
			}

			offset *= id;

			const time = Math.abs(id - (+input[0] % id));

			if (Math.min(wait, time) !== wait) {
				[wait, bus] = [time, id];
			}
		}

		i++;
	}

	return [bus * wait, earliest + 1];
}
