import aoc from "../lib";

const input = aoc.load((line) => line.split(" "));

export function day09() {
	const distances: Record<string, number> = {};

	for (const [x, , y, , z] of input) {
		distances[[x, y].sort() + ""] = +z;
	}

	// return keys(distances)
	// 	|> #.map((x) => x.split(','))
	// 	|> #.flat()
	// 	|>> uniqueBy
	// 	|>> permutations
	// 	|>> toArray
	// 	|> #.map((n) => [...eachCons(n, 2)]
	// 	|> #.reduce((x, y) => x + distances[y.sort() + ''], 0))
	// 	|> #.sort()
	// 	|> rotate(#, 1)
	// 	|> take(#, 2)
	// 	|> #.reverse()
}
