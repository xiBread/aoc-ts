import aoc from "../lib";

const input = aoc.load((line) => line.split(")"));

export function day06() {
	const orbits: Record<string, string> = {};
	const objects: Record<string, number> = {};

	for (const [x, y] of input) {
		orbits[y] = x;

		objects[y] = objects[x] = 1;
	}

	const checksums = [0, 0, 0];

	for (let object of Object.keys(objects)) {
		while (object !== "COM") {
			object = orbits[object];
			checksums[0]++;
		}
	}

	let [you, santa] = [orbits["YOU"], orbits["SAN"]];
	const transfers: Record<string, number> = {};

	while (you !== "COM") {
		transfers[you] = checksums[1]++;
		you = orbits[you];
	}

	transfers["COM"] = checksums[1];

	let minimum = 0;

	while (santa !== "COM") {
		if (transfers[santa]) {
			minimum = transfers[santa] + checksums[2];
			break;
		}

		santa = orbits[santa];
		checksums[2]++;
	}

	return [checksums[0], minimum];
}
