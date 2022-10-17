import aoc, { count } from "../lib";

const input = aoc.load();

export const day05 = () => [
	count(input, (x) => /(?:[aeuio].*){3,}/.test(x) && /(.)\1/.test(x) && !/(ab|cd|pq|xy)/.test(x)),
	count(input, (x) => /(..).*\1/.test(x) && /(.).\1/.test(x)),
];
