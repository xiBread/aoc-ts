import aoc, { sum } from "../lib";

const [input] = aoc.load();

function filter(obj: any): int {
	if (typeof obj === "number") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return sum(obj.map(filter));
	}

	if (typeof obj !== "object" || Object.values(obj).includes("red")) {
		return 0;
	}

	return filter(Object.values(obj));
}

export const day12 = () => [eval(input.replace(/[^-\d]+/g, "+") + 0), filter(JSON.parse(input))];
