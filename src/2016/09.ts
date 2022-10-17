import aoc from "../lib";

const input = aoc.load();

function length(fn: (...args: any[]) => int, file = input[0]): int {
	let decompressed = 0;

	while (file.length) {
		if (file[0] === "(") {
			const [, subsequent, repeat, rest] = /^\((\d+)x(\d+)\)(.*)$/.exec(file)!;

			decompressed += fn(fn, rest.slice(0, +subsequent)) * +repeat;
			file = rest.slice(+subsequent);
		} else {
			decompressed++;
			file = file.slice(1);
		}
	}

	return decompressed;
}

export const day09 = () => [length((_, x) => x.length), length(length)];
