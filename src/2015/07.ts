import aoc from "../lib";

const input = aoc.load().join("\n");

let signals = {};

const fn = "const $4 = (_) => signals.$4 ??= $1() $2 $3()";
const ops = { A: "&", O: "|", N: "~", L: "<<", R: ">>" };

const circuits = input
	.replace(/(do|i[fn])/g, "_$1")
	.replace(/(\w*?) ?([A-Z])?\w*? ?(\w+) -> (\w+)/g, fn)
	.replace(/(?:(\d+)| )\(\)/g, "$1")
	.replace(/[A-Z]/g, ($) => ops[$ as "A"]);

const signal = () => eval(`${circuits}; a()`);

const a = signal();
signals = { b: a };

export const day07 = () => [a, signal()];
