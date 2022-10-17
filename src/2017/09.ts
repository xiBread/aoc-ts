import aoc, { sum } from "../lib";

const input = aoc.load()[0].replace(/!./g, "");

let [score, total] = [0, 0];

for (const char of input.replace(/<.*?>/g, "")) {
	char === "}" ? (total += score--) : (score += +(char === "{"));
}

export const day09 = () => [total, sum(input.match(/<.*?>/g)!.map(($) => $.length - 2))];
