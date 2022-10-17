import aoc, { count, difference, intersection, max, reduce, values } from "../lib";

const input = aoc.load().map((line) => /(.+) \(.+? (.+)./.exec(line)!);

export function day21() {
	const food = input.map(([, xs, ys]) => ({ i: xs.split(" "), a: ys.split(", ") }));

	const allergens = [...new Set(food.map((x) => x.a).flat())].sort();
	const ingredients = food.map((x) => x.i).flat();

	let assigned = allergens.reduce<Dict<str, str[]>>(
		(xs, a) => ({
			...xs,
			[a]: food
				.filter((x) => x.a.includes(a))
				.map((i) => i.i)
				.reduce(intersection),
		}),
		{}
	);

	const invalid = difference(ingredients, values(assigned).flat());

	while (max(values(assigned).map((x) => x.length)) > 1) {
		const known = values(assigned)
			.filter((x) => x.length === 1)
			.flat();

		assigned = reduce(
			assigned,
			(xs, [key, val]) => ({
				...xs,
				[key]: val.length > 1 ? difference(val, known) : val,
			}),
			{}
		);
	}

	return [
		count(invalid, (x) => invalid.includes(x)),
		Object.keys(assigned)
			.sort()
			.map((x) => assigned[x])
			.join(","),
	];
}
