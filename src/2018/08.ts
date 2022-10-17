import aoc from "../lib";

const input = aoc.load(Number);

export function day08() {
	function process(tree: number[]): [number, number, number[]] {
		const [children, entries] = tree.take(2);
		tree = tree.slice(2);

		const values: number[] = [];
		let metadata = 0;

		for (let i = 0; i < children; i++) {
			const [total, value, root] = process(tree);
			tree = root;

			metadata += total;
			values.push(value);
		}

		metadata += tree.take(entries).sum();

		if (!children) {
			return [metadata, tree.take(entries).sum(), tree.slice(entries)];
		}

		return [
			metadata,
			tree
				.take(entries)
				.filter((i) => i > 0 && i <= values.length)
				.map((i) => values[~-i])
				.sum(),
			tree.slice(entries),
		];
	}

	return process(input).take(2);
}
