import aoc, { withDef } from "../lib";

const input = aoc.load().map((line) => line.split("-"));
const caves = withDef<str[]>(() => []);

for (const [a, b] of input) {
	caves[a].push(b);
	caves[b].push(a);
}

function visit(
	exact: int,
	caves: Dict<str, str[]>,
	start = "start",
	end = "end",
	paths: any[] = [],
	path: Dict<str, int> = {}
) {
	path[start] = -~(path[start] || 0);

	if (/^[a-z]+$/.test(start) && path[start] === 2) {
		path["$$"] = 1;
	}

	if (start === end) {
		return void paths.push(path);
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (!caves[start]) return;

	for (const next of caves[start]) {
		if (
			/^[a-z]+$/.test(next) &&
			next in path &&
			(exact || ["start", "end"].includes(next) || path["$$"])
		) {
			continue;
		}

		visit(exact, caves, next, end, paths, { ...path });
	}

	return paths;
}

export const day12 = () => [1, 0].map((n) => visit(n, caves)!.length);
