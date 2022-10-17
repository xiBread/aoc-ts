import { isEqual } from "lodash";
import aoc from "../lib";

const input = 765_071;

export function day14() {
	// const digits = [...(input + '')].map(Number);
	// let scores = [3, 7];
	// let [first, second] = [0, 1];
	// const add = () => {
	// 	const sum = scores[first] + scores[second];
	// 	scores.push(...(sum >= 10 ? Math.divmod(sum, 10) : [sum]));
	// 	first = -~(first + scores[first]) % scores.length;
	// 	second = -~(second + scores[second]) % scores.length;
	// };
	// while (scores.length < input + 10) add();
	// const ten = scores.slice(input, input + 10).join('');
	// scores = [3, 7];
	// [first, second] = [0, 1];
	// while (!isEqual(scores.slice(-digits.length), digits) && !isEqual(scores.slice(~-(-digits.length), -1), digits)) {
	// 	add();
	// }
	// return [+ten, scores.length - digits.length - -~isEqual(scores.slice(-digits.length), digits)];
}
