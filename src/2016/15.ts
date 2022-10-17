import aoc from "../lib";

const input = aoc.load((line) => / (\d+).+?(\d+)\./.exec(line)!);

type Disc = (time: int) => bool;

const discs: Disc[] = [];

for (const [, positions, start] of input) {
	discs.push((time) => !((time + +start) % +positions));
}

let time = 0;

function wait(extra?: Disc): int {
	if (extra) discs.push(extra);

	while (!discs.every((disc, i) => disc(time + -~i))) {
		time++;
	}

	return time;
}

export const day15 = () => [wait(), wait((time) => !(time % 11))];
