import { inspect } from "util";

export class Counter<T extends string | number> {
	readonly #values = new Map<T, number>();

	public constructor(values: Iterable<T> = []) {
		for (const value of values) {
			this.add(value);
		}
	}

	public [Symbol.iterator](): IterableIterator<[T, number]> {
		return this.#values.entries();
	}

	public [inspect.custom]() {
		return this.#values;
	}

	public add(value: T): void {
		this.#values.set(value, (this.#values.get(value) ?? 0) + 1);
	}

	public leastCommon(limit = Infinity): [T, number][] {
		return this.#sort(1).slice(0, limit);
	}

	public mostCommon(limit = Infinity): [T, number][] {
		return this.#sort(0).slice(0, limit);
	}

	public total(): number {
		return this.mostCommon(Infinity).reduce((sum, [, count]) => sum + count, 0);
	}

	#sort(direction: 1 | 0): [T, number][] {
		return [...this.#values].sort((a, b) => (direction ? a[1] - b[1] : b[1] - a[1]));
	}
}
