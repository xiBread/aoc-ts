import aoc from "../lib";

const [input] = aoc.load();

export function day16() {
	let signal = [...input.repeat(1)].map(Number);

	for (const _ of (0).to(100)) {
		const next = [];

		for (const phase of (0).to(signal.length)) {
			let x = 0;
			let increase = true;

			for (let i = phase; i < signal.length; i += -~phase * 2) {
				x +=
					signal.slice(i, Math.min(i + -~phase, signal.length)).sum() *
					(increase ? 1 : -1);
				increase = !increase;
			}

			next.push(Math.abs(x) % 10);
		}

		signal = next;
	}

	const eight = (output: number[]): number => +output.slice(0, 8).join("");

	const real = [...input.repeat(1e4)].map(Number).slice(+input.slice(0, 7));

	for (const _ of (0).to(100)) {
		for (let i = real.length; i--; ) {
			real[i] = ((real[-~i] ?? 0) + real[i]) % 10;
		}
	}

	return [eight(signal), eight(real)];
}

[68_764_632, 52_825_021];
