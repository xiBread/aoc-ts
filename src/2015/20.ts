const input = 29_000_000;

const houses: int[][] = [[], []];

for (let x = 1; x < input / 10; x++) {
	let visits = 0;

	for (let y = x; y < input / 10; y += x) {
		houses[0][y] = (houses[0][y] ??= 10) + x * 10;

		if (visits < 50) {
			houses[1][y] = (houses[1][y] ??= 11) + x * 11;
			visits++;
		}
	}
}

export const day20 = () => houses.map((n) => n.reduce((a, b, i) => (!a && b >= input ? i : a), 0));
