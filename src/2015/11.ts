import { ALPHA_LOWER, succ, windows } from "../lib";

const input = "vzbxkghb";

let password = input;

const triplets = windows([...ALPHA_LOWER], 3).map((x) => x.join(""));
const increase = new RegExp(triplets.join("|"));

function next(): str {
	while (true) {
		password = succ(password);

		if (increase.test(password) && !/[iol]/.test(password) && /(.)\1.*(.)\2/.test(password)) {
			break;
		}
	}

	return password;
}

export const day11 = () => [next(), next()];
