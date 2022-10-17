import aoc from "../lib";

const [input] = aoc.load();

export function day16() {
	return [
		eval(
			`0b${BigInt(`0x1${input}`)
				.toString(2)
				.slice(1)
				.replace(/(...)(100(1....)*0....|...(0.{15}|1.{11}))/g, "$1+0b")}0`
		),
	];
}
