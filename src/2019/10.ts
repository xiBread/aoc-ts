import { isEqual } from "lodash";
import aoc from "../lib";

const input = aoc.load();

export function day10() {
	const asteroids: [number, number][] = [];

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			if (input[y][x] === "#") {
				asteroids.push([x, y]);
			}
		}
	}

	const angle = (start: number[], end: number[]): number => {
		const result = (Math.atan2(end[0] - start[0], start[1] - end[1]) * 180) / Math.PI;

		if (result < 0) {
			return result + 360;
		}

		return result;
	};

	let location: [number, number] = [0, 0];
	let detectable = 0;

	for (const start of asteroids) {
		const s = new Set();

		for (const end of asteroids) {
			if (!isEqual(start, end)) {
				s.add(angle(start, end));
			}
		}

		if (s.size > detectable) {
			detectable = s.size;
			location = start;
		}
	}

	asteroids.splice(asteroids.indexOf(location), 1);

	const angles: [number, [number, number]][] = [];

	for (const end of asteroids) {
		angles.push([angle(location, end), end]);
	}

	angles.sort(
		(x, y) =>
			x[0] - y[0] ||
			Math.abs(location[0] - x[1][0]) +
				Math.abs(location[1] - x[1][1]) -
				(Math.abs(location[0] - y[1][0]) + Math.abs(location[1] - y[1][1]))
	);

	let i = 0;
	let last = angles.shift()!;
	let lastangle: null | number = last[0];
	let count = 1;

	while (count < 200 && angles) {
		if (i >= angles.length) {
			i = 0;
			lastangle = null;
		}

		if (lastangle === angles[i][0]) {
			i++;
			continue;
		}

		last = angles.splice(i, 1)[0];
		count++;
	}

	return [detectable, last[1][0] * 100 + last[1][1]];
}
