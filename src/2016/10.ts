import aoc from "../lib";

const input = aoc.load();

type Bot = [Set<number>, ...((arg: number) => void)[]];

export function day10() {
	const output: Record<number, number> = {};
	const bots: Bot[] = [];

	function balance(bot: Bot, chip: number) {
		const [min, max] = bot[0].add(chip).toArray().minmax();

		return bot[0].size === 2 && (bot[1](min), bot[2](max));
	}

	const give = (x: string, y: number) => {
		return (chip: number) => (x[0] === "o" ? (output[y] = chip) : balance(bots[y], chip));
	};

	for (const line of input) {
		if (/(\d+).+?(\w+) (\d+).+?(\w+) (\d+)/.test(line)) {
			bots[+$1] = [new Set(), give($2, +$3), give($4, +$5)];
		}
	}

	for (const line of input) {
		if (/e (\d+).+?(\d+)/.test(line)) {
			balance(bots[+$2], +$1);
		}
	}

	return [bots.findIndex(([x]) => x.hasAll(17, 61)), output[0] * output[1] * output[2]];
}
