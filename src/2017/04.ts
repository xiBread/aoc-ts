import aoc, { count, words } from "../lib";

const input = aoc.load();

type Validator = (passphrase: str[]) => bool;

const validators: Validator[] = [
	(a) => new Set(a.sort()).size === a.length,
	(a) => new Set(a.map((b) => [...b].sort().join(""))).size === a.length,
];

export const day04 = () => [0, 1].map((i) => count(input.map(words), validators[i]));
