import aoc from "../lib";

const [input] = aoc.load();

export function day16() {
	// const checksums = ['', ''];
	// const on = (bits: boolean[]): number => bits.filter(Boolean).length;
	// for (const disk of [272, 35_651_584]) {
	// 	let checksum = '';
	// 	const a = [...input].map((bit) => bit === '1');
	// 	const b = a.reversed().map((bit) => !bit);
	// 	// eslint-disable-next-line prefer-const
	// 	let [separators, buffer]: [boolean[], boolean[]] = [[], []];
	// 	while (separators.length * -~a.length <= disk) {
	// 		separators = [...separators, false, ...separators.reverse().map((bit) => !bit)];
	// 	}
	// 	const chunk = disk & ~~-disk;
	// 	for (let i = disk / chunk; i--; ) {
	// 		const take = Math.min(buffer.length, chunk);
	// 		const remaining = chunk - take;
	// 		let ones = on(buffer.splice(0, take));
	// 		const [full, remainder] = Math.divmod(remaining, -~a.length * 2);
	// 		ones += on(separators.splice(0, full * 2)) + a.length * full;
	// 		if (remainder > 0) {
	// 			buffer.push(...a, separators.shift()!, ...b, separators.shift()!);
	// 			ones += on(buffer.splice(0, remainder));
	// 		}
	// 		checksum += +!(ones % 2);
	// 	}
	// 	checksums[~-disk % 3] = checksum;
	// }
	// return checksums.reverse();
}
