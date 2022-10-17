import aoc from "../lib";

const [input] = aoc.load();

export function day20() {
	const points: Dict<str, Dict<str, int[]>> = {};
	const directions = [
		[0, -1],
		[1, 0],
		[0, 1],
		[-1, 0],
	];

	let position = [0, 0, 0];
	const options = [position];

	for (const char of input) {
		if (/[NESW]/.test(char)) {
			const [x, y] = directions["NESW".indexOf(char)].map((n, i) => position[i] + n);
			const next = points[y][x] || [x, y, Infinity];

			next[2] = Math.min(next[2], -~position[2]);
			position = next;

			(points[next[1]] ??= {})[next[0]] = next;
		}

		[
			() => options.push(position),
			() => (position = options.pop()!),
			() => (position = options.slice(-1)[0]),
		]["()|".indexOf(char)]?.();
	}

	const doors: int[] = [];

	Object.keys(points).forEach((x) =>
		Object.keys(points[x]).forEach((y) => doors.push(points[x][+y][2]))
	);

	return [Math.max(...doors), doors.filter((door) => door >= 1000).length];
}
