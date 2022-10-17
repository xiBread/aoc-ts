import { countBy, zip } from "lodash";
import aoc from "../lib";

const input = aoc.load((line) => [...line]);

let [corrected, original] = ["", ""];

for (const column of zip(...input)) {
	const frequencies = Object.entries(countBy(column)).sort(([, a], [, b]) => a - b);

	corrected += frequencies.pop()![0];
	original += frequencies[0][0];
}

export const day06 = () => [corrected, original];
