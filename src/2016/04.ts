import countBy from "lodash/countBy";
import aoc, { chr, ord } from "../lib";

const input = aoc.load((line) => line.split(/[-[\]]/).slice(0, -1));

let [sum, id] = [0, 0];

for (const line of input) {
	const [sector, checksum] = line.splice(-2);

	const common = Object.entries(countBy(line.join("")))
		.sort(([a, x], [b, y]) => y - x || a.localeCompare(b))
		.map(([key]) => key)
		.slice(0, 5)
		.join("");

	sum += common === checksum ? +sector : 0;

	const north = line
		.join(" ")
		.replace(/[a-z]/g, ($) => chr(((ord($) - 97 + +sector) % 26) + 97))
		.includes("north");

	id = north ? +sector : id;
}

export const day04 = () => [sum, id];
