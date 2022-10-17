import aoc from "../lib";

const input = aoc.load(Number);

export function day02() {
	// let output = 0;
	// const run = (noun: number, verb: number): number => {
	// 	const opcodes = [input[0], noun, verb, ...input.slice(3)];
	// 	for (let i = 0; i < opcodes.length; i += 4) {
	// 		if (opcodes[i] === 99) break;
	// 		const next = [opcodes[opcodes[-~i]], opcodes[opcodes[i + 2]]];
	// 		opcodes[opcodes[i + 3]] = eval(next.join({ 1: '+', 2: '*' }[opcodes[i]]));
	// 	}
	// 	return opcodes[0];
	// };
	// for (let i = 1e4; i--; ) {
	// 	const [x, y] = [~~(i / 100), i % 100];
	// 	if (run(x, y) === 19690720) {
	// 		output = 100 * x + y;
	// 		break;
	// 	}
	// }
	// return [run(12, 2), output];
}
