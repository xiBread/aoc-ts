import aoc, { max, sum } from "../lib";

const input = aoc.load((group) => sum(group.split("\n").map(Number)));

export const day01 = () => [max(input), sum(input.sort((a, b) => b - a).slice(0, 3))];
