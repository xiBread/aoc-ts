import aoc from "../lib";

const input = aoc.load();

let [tls, ssl] = [0, 0];

const hypernet = /\[[\w ]*(\w)(\w)\2\1[\w ]*\]/;

const start = /(?:^|\])[\w ]*(\w)(\w)\1.*\[[\w ]*\2\1\2/;
const end = /\[[\w ]*(\w)(\w)\1.*\][\w ]*\2\1\2/;

for (const line of input) {
	let ip = line.replace(/(.)\1{3,}/g, "$1 $1");
	tls += +(!hypernet.test(ip) && /(\w)(\w)\2\1/.test(ip));

	ip = line.replace(/(.)\1{2,}/g, "$1 $1");
	ssl += +(start.test(ip) || end.test(ip));
}

export const day07 = () => [tls, ssl];
